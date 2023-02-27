import Donut from "./Donut"
import ActivityList from "./ActivityList"

const Dashboard = () => {
    let todaysData = null
    
    const getTodaysData = async () => {
        const response = await fetch('/api/activity/get-todays-data')
        todaysData = await response.json()
    } 

    getTodaysData()

    return (
        <div className="flex flex-col items-center">
            <p className="text-2xl mb-5 font-bold">24 Feb 2023</p>
            <div className="flex mb-8">
                <Donut count={todaysData ? todaysData.data.steps : 0} unit="steps" />
                <Donut count={todaysData ? todaysData.data.activeMinutes : 0} unit="mins" />
            </div>
            <div className="w-2/3 text-lg">
                <ActivityList />
            </div>
        </div>
    )
}

export default Dashboard