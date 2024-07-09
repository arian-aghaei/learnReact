function FirstSlide() {
    return <div className="flex container mx-auto gap-20">
        <div className="my-auto">
            <img className="my-auto" src={'left.png'} alt=""/>
        </div>
        <div className="container mx-auto flex justify-center" dir="rtl">
            <div className="font-body my-auto basis-1/2 ">
                <span className="text-4xl">یادگیری </span>
                <span className="text-[#0052CC] text-4xl">زبان انگلیسی</span>
                <div className="text-4xl">در هر زمان و هر مکانی</div>
                <div className="mt-5">اینجا ما کمکت میکنیم بهترین و مناسب ترین دوره هارو برای خودت انتخاب کنی، اگه کمک
                    میخوای فقط از ما مشاوره بگیر.
                </div>
                <button className="text-white rounded bg-blue-700 p-2 px-3 rounded mt-5">مشاوره رایگان</button>
            </div>
            <img className="basis-1/2 object-contain h-[33rem]" src={'slide11.png'} alt="img"/>
        </div>
        <div className="my-auto">
            <img className="my-auto" src={'right.png'} alt=""/>
        </div>
    </div>
}

export default FirstSlide;