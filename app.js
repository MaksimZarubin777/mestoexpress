const express = require('express');

const app = express();
const { PORT = 3000 } = process.env;
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');

mongoose.connect('mongodb://localhost:27017/mestodb ');

app.use(express.json());
app.use((req, res, next) => {
  req.user = {
    _id: '6443fd14af4e4653a7bd15f7',
  };
  next();
});
app.use(userRouter);
app.use(cardRouter);
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
