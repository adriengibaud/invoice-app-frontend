import { User } from '../models/user.js';
import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send('pong');
});

router.post('/getuser', async (req, res) => {
  const query = { id: req.body.id };
  const update = {
    $setOnInsert: {
      id: req.body.id,
    },
  };
  const options = { upsert: true };

  User.findOneAndUpdate(query, update, options, function (error, result) {
    if (error) return;
    res.send(result);
  }).then((result) => console.log(result));
});

router.put('/updateUser/:id', async (req, res) => {
  User.updateOne(
    { id: req.params.id },
    { $push: { invoiceId: req.body.invoiceId } },
    function (err, res) {
      if (err) return console.log('error');
      if (res) return console.log('updated');
    }
  );
});

router.delete('/updateUser/:id', async (req, res) => {
  User.updateOne(
    { id: req.params.id },
    { $pull: { invoiceId: req.body.invoiceId } },
    function (err, res) {
      if (err) return console.log('error', err.message);
      if (res) return console.log('updated');
    }
  );
});

export default router;
