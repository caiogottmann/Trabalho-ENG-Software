import mongoose from 'mongoose';

const dbUrl = 'mongodb://localhost/back-end';

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .catch((err) => {
    console.error('Error connecting mongodb: \n\n', err);
  });

mongoose.Promise = global.Promise;

export default mongoose;
