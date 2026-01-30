import mongoose from 'mongoose';

let isConnected = false;

const connectToDatabase = async () => {
    if (isConnected) return;
    try {
        await mongoose.connect(process.env.MONGO_URI);
        isConnected = true;
    } catch (error) {
        console.error('MongoDB Connection Error:', error);
        throw new Error('Failed to connect to database');
    }
};

const newsletterSchema = new mongoose.Schema({
    title: String,
    content: String,
    sentAt: { type: Date, default: Date.now }
});

// Use models.Newsletter if exists, else create it
const Newsletter = mongoose.models.Newsletter || mongoose.model('Newsletter', newsletterSchema);

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        await connectToDatabase();
        const newsletters = await Newsletter.find({}).sort({ sentAt: -1 });
        return res.status(200).json(newsletters);
    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ message: 'Server error' });
    }
}
