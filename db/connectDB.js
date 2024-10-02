import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL) => {
   try {
    const OPTIONS_DB ={
        dbName : 'calorietracker'
    }
    await mongoose.connect(DATABASE_URL,OPTIONS_DB);
    console.log('connection successfully....');
   } catch (error) {
      console.log(error)
   }
}

export default connectDB;