import connectMongo from '@/utils/connectMongo'
import Post from '@/models/Post'

export default async function handler(req, res) {
    await connectMongo()
    
    const posts = await Post.find({})
    res.status(200).json(posts)
}