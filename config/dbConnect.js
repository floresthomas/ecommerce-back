const { default: mongoose } = require("mongoose")
const dotenv = require("dotenv");

dotenv.config();

const dbConnect =  () => {
    try {
        mongoose.set('strictQuery', false);
        const connect = mongoose.connect(process.env.MONGO_URL)
        console.log('Database connected sucessfully');
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = dbConnect