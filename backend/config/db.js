// config/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://gourangiacc2:159625@cluster0.klzxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed", error);
        process.exit(1);
    }
};

// Ensure you export the function as default
export default connectDB;
