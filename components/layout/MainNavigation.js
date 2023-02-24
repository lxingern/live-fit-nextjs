const MainNavigation = () => {
    return (
        <div className="w-full h-14 bg-teal-700 flex justify-end items-center px-2">
            <div className="flex">
                <button className="p-1 text-white">Logout</button>
                <img src="no-profile-picture.png" className="w-12 p-1" />
            </div>
        </div>
    )
}

export default MainNavigation