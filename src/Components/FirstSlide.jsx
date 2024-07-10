function FirstSlide() {
    return <div className="flex container mx-auto gap-10 md:gap-20 text-center md:text-right">
        <div className="my-auto">
            <img className="hidden md:block my-auto" src={'left.png'} alt=""/>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-center" dir="rtl">
            <div className="font-body my-auto md:basis-1/2 ">
                <span className="text-xl md:text-4xl">یادگیری </span>
                <span className="text-[#0052CC] text-xl md:text-4xl">زبان انگلیسی</span>
                <div className="text-xl md:text-4xl">در هر زمان و هر مکانی</div>
                <div className="mt-5">اینجا ما کمکت میکنیم بهترین و مناسب ترین دوره هارو برای خودت انتخاب کنی، اگه کمک
                    میخوای فقط از ما مشاوره بگیر.
                </div>
                <button className="text-[#0052CC] border-[#0052CC] border-[0.08rem] md:text-white rounded bg-[#DDEBFF] md:bg-blue-700 p-2 px-3 rounded mt-5">مشاوره رایگان</button>
            </div>
            <img className=" basis-1/2 object-contain h-[33rem]" src={'slide11.png'} alt="img"/>
        </div>
        <div className="my-auto">
            <img className="hidden md:block my-auto" src={'right.png'} alt=""/>
        </div>
    </div>
}

export default FirstSlide;