import connectMongo from '@/utils/connectMongo'
import Activity, { getTodaysDate } from '@/models/Activity'

export default async function handler(req, res) {
    await connectMongo()
    
    const todaysDate = getTodaysDate()
    const todaysData = await Activity.findOne({ date: todaysDate })
    res.status(200).json(todaysData)
}