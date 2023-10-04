require('dotenv').config();
const mongoose = require('mongoose');

const app = require('./app');

const port = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Successfully connected to DB 🌴');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});