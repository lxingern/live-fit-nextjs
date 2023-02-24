import connectMongo from '@/utils/connectMongo'
import Activity, { getTodaysDate } from '@/models/Activity'

export default async function handler (req, res) {
    await connectMongo()
    
    const todaysDate = getTodaysDate()
    const dataToUpdate = await Activity.findOne({ date: todaysDate })
    if (!dataToUpdate) {
        const newData = new Activity({ 
            data: { 
                steps: +req.body.steps 
            } 
        })
        await newData.save()
        res.status(200).json(newData)
    } else {
        dataToUpdate.data.steps = +req.body.steps
        await dataToUpdate.save()
        res.status(200).json(dataToUpdate)
    }
}