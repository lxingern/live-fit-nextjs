import connectMongo from '@/utils/connectMongo'
import Post from '@/models/Post'

export default async function handler(req, res) {
    await connectMongo()
    
    const newPost = new Post(req.body)
    await newPost.save()
    res.status(201).json(newPost)
}