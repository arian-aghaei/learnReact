import Card from "./Card";
import Card2 from "./Card2";

function Packages() {
    return <div className="font-body flex flex-col items-center mt-6 justify-center">
        <div className="text-black text-xl md:text-2xl">بسته های آموزشی خود آموز اسپیکاپ</div>
        <img className="mx-auto" src="gunderline.png" alt=""/>
        <div className="mt-5 flex md:grid md:grid-cols-3 mx-auto" dir="rtl">
            <button
                className="bg-[#E2FAF4] text-xs md:text-lg border-[0.08rem] border-[#1EB28F] text-[#1EB28F] px-2 py-1 rounded-s-lg md:hidden">همه
            </button>
            <button
                className="bg-[#1EB28F] border-[0.08rem] border-[#1EB28F] text-white px-2 py-1 text-xs md:text-lg md:rounded-s-lg">کودکان
                6
                تا 12 سال
            </button>
            <button
                className="bg-[#E2FAF4] text-xs md:text-lg border-[0.08rem] border-[#1EB28F] text-[#1EB28F] px-2 py-1">نوجوانان
            </button>
            <button
                className="bg-[#E2FAF4] text-xs md:text-lg border-[0.08rem] border-[#1EB28F] text-[#1EB28F] px-2 py-1 rounded-e-lg">بزرگسالان
            </button>
        </div>
        <div className="mx-auto flex flex-col justify-center items-center p-5 md:hidden text-xl">
            <div className="grid grid-cols-1 bg-white p-3 mt-3 rounded-lg" dir="rtl">
                <div className="flex ">
                    <img className="h-fit my-auto" src="alpha-plus.png" alt=""/>
                    <div className="grid grid-cols-1 px-3 gap-3">
                        <div className="bg-[#F0F9FF] text-[#0E96FD] my-auto px-5 py-1 rounded-lg mx-auto">
                            ویژه کودکان
                        </div>
                        <div>
                            دوره آموزشی Alphaplus
                        </div>
                        <div>
                            <img src="stars.png" alt=""/>
                        </div>
                        <div className="border-b-[0.05rem] border-gray-500"></div>
                        <div className="text-[#0EB465]">
                            ثبت نام
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 bg-white p-3 mt-3 rounded-lg" dir="rtl">
                <div className="flex ">
                    <img className="h-fit my-auto" src="alpha-plus.png" alt=""/>
                    <div className="grid grid-cols-1 px-3 gap-3">
                        <div className="bg-[#F0F9FF] text-[#0E96FD] my-auto px-5 py-1 rounded-lg mx-auto">
                            ویژه کودکان
                        </div>
                        <div>
                            دوره آموزشی Alphaplus
                        </div>
                        <div>
                            <img src="stars.png" alt=""/>
                        </div>
                        <div className="border-b-[0.05rem] border-gray-500"></div>
                        <div className="text-[#0EB465]">
                            ثبت نام
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 bg-white p-3 mt-3 rounded-lg" dir="rtl">
                <div className="flex ">
                    <img className="h-fit my-auto" src="alpha-plus.png" alt=""/>
                    <div className="grid grid-cols-1 px-3 gap-3">
                        <div className="bg-[#F0F9FF] text-[#0E96FD] my-auto px-5 py-1 rounded-lg mx-auto">
                            ویژه کودکان
                        </div>
                        <div>
                            دوره آموزشی Alphaplus
                        </div>
                        <div>
                            <img src="stars.png" alt=""/>
                        </div>
                        <div className="border-b-[0.05rem] border-gray-500"></div>
                        <div className="text-[#0EB465]">
                            ثبت نام
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="hidden md:flex">
            <div className="grid grid-cols-3">
                <Card img="alpha-plus.png" title="دوره آموزشی Alphaplus" tag="ویژه کودکان"/>

                <Card img="alpha-plus.png" title="دوره آموزشی Alphaplus" tag="ویژه کودکان"/>

                <Card img="alpha-plus.png" title="دوره آموزشی Alphaplus" tag="ویژه کودکان"/>
            </div>
        </div>
        <div className="mb-10 flex gap-4 px-6 py-3 rounded-lg mt-5 md:mt-10 bg-[#E2FAF4] text-[#1EB28F] text-lg md:text-base"
             dir="rtl">
            <img src="small.png" alt=""/>
            مشاهده همه دوره های آموزشی
        </div>
        <div className="text-black text-xl md:text-2xl">مقالات آموزشی</div>
        <img className="mx-auto mb-10" src="gunderline.png" alt=""/>
        <div className="flex md:grid md:grid-cols-4 w-screen md:w-[85%] overflow-auto snap-x " dir="rtl">
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
        </div>
        <div
            className="mb-10 flex gap-4 px-6 py-3 rounded-lg mt-5 md:mt-10 bg-[#E2FAF4] text-[#1EB28F] text-lg md:text-base"
            dir="rtl">
            <img src="small.png" alt=""/>
            مشاهده همه مقالات
        </div>
    </div>
}

export default Packages;