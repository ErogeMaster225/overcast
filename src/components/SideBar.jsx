function SideBar() {
    return (
        <div className="flex w-full flex-col bg-[#fdfdfd] p-3 text-black lg:w-1/3 lg:p-[32px_64px]">
            <div className="">
                <i className="fa-solid fa-xl fa-magnifying-glass text-[#000]"></i>
                <input className="border-none bg-transparent px-3 text-[18px] focus:outline-none" type="text" placeholder="Search for places..." />
            </div>
            <img src="/fill/openweathermap/10n.svg" alt="" />
            <div className="text-6xl">34°</div>
            <div className="text-xl">Wednesday, 23:50</div>
        </div>
    )
}

export default SideBar
