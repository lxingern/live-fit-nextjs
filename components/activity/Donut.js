const Donut = (props) => {
    return (
        <div className="flex flex-col items-center text-lg w-36 mx-10">
            <div className="donut w-28 h-28 flex justify-center items-center rounded-full">
                <div className="bg-white rounded-full flex flex-col justify-center items-center w-20 h-20">
                    <p>{props.count}</p>
                    <p>{props.unit}</p>
                </div>
            </div>
        </div>
    )
}

export default Donut