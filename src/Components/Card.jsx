export default function Card({img,title,tag}) {
    return <div
        className="grid grid-cols-1 bg-white p-3 mx-3 mt-5 rounded-lg border-[.08rem] border-white hover:border-[#0052CC] hover:border-[0.08rem] hover:shadow hover:shadow-[#0052CC]"
        dir="rtl">
        <div className="flex ">
            <img className="h-fit my-auto" src={img} alt=""/>
            <div className="grid grid-cols-1 px-3 gap-2 text-base">
                <div className="bg-[#F0F9FF] text-[#0E96FD] my-auto px-5 py-1 rounded-lg mx-auto">
                    {tag}
                </div>
                <div>
                    {title}
                </div>
                <div>
                    <img src="stars.png" alt=""/>
                </div>
                <div className="border-b-[0.05rem] border-gray-500"></div>
                <div className="text-[#0EB465] flex gap-1">
                    750,000
                    <img src="toman.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
}