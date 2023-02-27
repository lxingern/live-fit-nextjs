const ActivityList = (props) => {

    return (
        <ul>
            {props.data && props.data.data.activities.map(activity => (
                <li>
                    <div className="flex justify-between mb-2 shadow py-2 px-4">
                        <p>{activity.name}</p>
                        <p>{activity.duration} mins</p>
                    </div>
                </li>
            ))}
            <li className="text-center text-base text-gray-500">Add new activity +</li>
        </ul>
    )
}

export default ActivityList