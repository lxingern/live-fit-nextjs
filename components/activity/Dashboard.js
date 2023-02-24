import Donut from "./Donut"
import ActivityList from "./ActivityList"

const Dashboard = () => {
    return (
        <div className="flex flex-col items-center">
            <p className="text-2xl mb-5 font-bold">24 Feb 2023</p>
            <div className="flex mb-8">
                <Donut count="6000" unit="steps" />
                <Donut count="40" unit="mins" />
            </div>
            <div className="w-2/3 text-lg">
                <ActivityList />
            </div>
        </div>
    )
}

export default Dashboard