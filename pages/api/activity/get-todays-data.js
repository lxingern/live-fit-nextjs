import connectMongo from '@/utils/connectMongo'
import Activity, { getTodaysDate } from '@/models/Activity'

export default async function handler(req, res) {
    try {
        await connectMongo()
    
        const todaysDate = getTodaysDate()
        const todaysData = await Activity.findOne({ date: todaysDate })
        res.status(200).json(todaysData)
    } catch (error) {
        res.status(500).json({ error })
    }
}