import mongoose from 'mongoose';
import Email from '../server/models/Email.js';

// Cache the database connection
let isConnected = false;

const connectToDatabase = async () => {
    if (isConnected) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        isConnected = true;
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB Connection Error:', error);
        throw new Error('Failed to connect to database');
    }
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        await connectToDatabase();

        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        const existingEmail = await Email.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: 'Email already subscribed' });
        }

        const newEmail = new Email({ email });
        await newEmail.save();

        return res.status(201).json({ message: 'Subscribed successfully' });
    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ message: 'Server error' });
    }
}
