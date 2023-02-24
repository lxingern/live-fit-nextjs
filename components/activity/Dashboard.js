const Dashboard = () => {
    return (
        <div className="flex flex-col items-center">
            <p className="text-2xl mb-5 font-bold">24 Feb 2023</p>
            <div className="flex mb-8">
                <div className="flex flex-col items-center text-lg w-36 mx-10">
                    <div className="donut w-28 h-28 flex justify-center items-center rounded-full">
                        <div className="bg-white rounded-full flex flex-col justify-center items-center w-20 h-20">
                            <p>6000</p>
                            <p>steps</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center text-lg w-36 mx-10">
                    <div className="donut w-28 h-28 flex justify-center items-center rounded-full">
                        <div className="bg-white rounded-full flex flex-col justify-center items-center w-20 h-20">
                            <p>40</p>
                            <p>mins</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-2/3 text-lg">
                <ul>
                    <li>
                        <div className="flex justify-between mb-2 shadow py-2 px-4">
                            <p>Yoga</p>
                            <p>45 mins</p>
                        </div>
                    </li>
                    <li className="text-center text-base text-gray-500">Add new activity +</li>
                </ul>
            </div>
        </div>
    )
}

export default Dashboard