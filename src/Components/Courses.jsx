import Card from "./Card";
import Heading from "./Heading";

function Courses() {
    return <div className="container mx-auto items-center flex flex-col font-body m-10 mt-20">
        <div className="mx-auto hidden flex-col justify-center items-center p-5 md:flex text-2xl">
            <Heading title="دوره های آموزشی آنلاین اسپیکاپ"/>

            <div className="mt-5 grid grid-cols-4" dir="rtl">
                <button
                    className="bg-[#1EB28F] border-[0.08rem] border-[#1EB28F] text-white px-2 py-1 text-lg rounded-s-lg">همه
                </button>

                <button
                    className="bg-[#E2FAF4] border-[0.08rem] border-[#1EB28F] text-[#1EB28F] px-2 py-1 text-lg">کودکان 6
                    تا 12 سال
                </button>

                <button
                    className="bg-[#E2FAF4] border-[0.08rem] border-[#1EB28F] text-[#1EB28F] px-2 py-1 text-lg">نوجوانان
                </button>

                <button
                    className="bg-[#E2FAF4] border-[0.08rem] border-[#1EB28F] text-[#1EB28F] px-2 py-1 text-lg rounded-e-lg">بزرگسالان
                </button>
            </div>

            <div className="grid grid-cols-3">
                <Card img="alpha-plus.png" title="دوره آموزشی Alphaplus" tag="ویژه کودکان"/>

                <Card img="alpha-plus.png" title="دوره آموزشی Alphaplus" tag="ویژه کودکان"/>

                <Card img="alpha-plus.png" title="دوره آموزشی Alphaplus" tag="ویژه کودکان"/>
            </div>

            <div className="flex gap-4 px-6 py-3 rounded-lg mt-10 bg-[#E2FAF4] text-[#1EB28F] text-base" dir="rtl">
                <img src="small.png" alt=""/>
                مشاهده همه دوره های آموزشی
            </div>
        </div>
        <div className="mx-auto flex flex-col justify-center items-center p-5 md:hidden text-xl">
            <div>دوره های آموزشی</div>
            <img className="mx-auto" src="gunderline.png" alt=""/>
            <div className="mt-5 grid grid-cols-3 mx-auto" dir="rtl">
                <button
                    className="bg-[#1EB28F] border-[0.08rem] border-[#1EB28F] text-white px-2 py-1 text-xs rounded-s-lg">کودکان
                    6
                    تا 12 سال
                </button>
                <button
                    className="bg-[#E2FAF4] text-xs border-[0.08rem] border-[#1EB28F] text-[#1EB28F] px-2 py-1 text-lg">نوجوانان
                </button>
                <button
                    className="bg-[#E2FAF4] text-xs border-[0.08rem] border-[#1EB28F] text-[#1EB28F] px-2 py-1 text-lg rounded-e-lg">بزرگسالان
                </button>
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
            <div className="flex gap-4 px-6 py-3 rounded-lg mt-10 bg-[#E2FAF4] text-[#1EB28F]" dir="rtl">
                <img src="small.png" alt=""/>
                مشاهده همه دوره های آموزشی
            </div>
        </div>
    </div>
}

export default Courses;