const ActivityList = (props) => {
    return (
        <ul>
            {props.posts && props.posts.map(post => (
                <li>
                    <div className="flex justify-between mb-2 shadow py-2 px-4">
                        <p>{post.name}</p>
                        <p>{post.duration} mins</p>
                    </div>
                </li>
            ))}
            <li className="text-center text-base text-gray-500">Add new activity +</li>
        </ul>
    )
}

export default ActivityList