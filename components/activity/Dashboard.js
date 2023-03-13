import { useState } from "react"
import dayjs from "dayjs"
import Donut from "./Donut"
import ActivityList from "./ActivityList"
import Modal from "../UI/Modal"

const Dashboard = (props) => {
    const todaysData = props.data
    const [showEditSteps, setShowEditSteps] = useState(false)

    const showEditStepsHandler = () => {
        setShowEditSteps(true)
        console.log('clicked')
    }

    const closeModal = () => {
        setShowEditSteps(false)
    }

    return (
        <div className="flex flex-col items-center">
            <p className="text-2xl mb-5 font-bold">{dayjs(new Date()).format('D MMM YYYY')}</p>
            <div className="flex mb-8">
                <Donut count={todaysData ? todaysData.data.steps : 0} unit="steps" clickHandler={showEditStepsHandler} />
                {showEditSteps && (
                    <Modal onClose={closeModal} > 
                        <h2>Edit Steps</h2>
                        <form>
                            <input type="number" />
                            <button>Edit</button>
                        </form>
                    </Modal>
                )}
                <Donut count={todaysData ? todaysData.data.activeMinutes : 0} unit="mins" />
            </div>
            <div className="w-2/3 text-lg">
                <ActivityList data={todaysData} />
            </div>
        </div>
    )
}

export default Dashboard