function Courses() {
    return <div className="container mx-auto items-center flex flex-col font-body m-10 mt-20">
        <div className="mx-auto hidden flex-col justify-center items-center p-5 md:flex text-2xl">
            <div className="text-black">دوره های آموزشی آنلاین اسپیکاپ</div>
            <img className="mx-auto" src="gunderline.png" alt=""/>
            <div className="mt-5 grid grid-cols-4" dir="rtl">
                <button className="bg-[#1EB28F] border-[0.08rem] border-[#1EB28F] text-white px-2 py-1 text-lg rounded-s-lg">همه</button>

                <button className="bg-[#E2FAF4] border-[0.08rem] border-[#1EB28F] text-[#1EB28F] px-2 py-1 text-lg">کودکان 6 تا 12 سال</button>
                <button className="bg-[#E2FAF4] border-[0.08rem] border-[#1EB28F] text-[#1EB28F] px-2 py-1 text-lg">نوجوانان</button>
                <button className="bg-[#E2FAF4] border-[0.08rem] border-[#1EB28F] text-[#1EB28F] px-2 py-1 text-lg rounded-e-lg">بزرگسالان</button>
            </div>
        </div>
        <div className="mx-auto flex flex-col justify-center items-center p-5 md:hidden text-xl">
            <div>دوره های آموزشی</div>
            <img className="mx-auto" src="gunderline.png" alt=""/>
            <div className="mt-5 grid grid-cols-3 mx-auto" dir="rtl">
                <button
                    className="bg-[#E2FAF4] text-xs border-[0.08rem] border-[#1EB28F] text-[#1EB28F] px-2 py-1 text-lg rounded-s-lg">کودکان 6
                    تا 12 سال
                </button>
                <button
                    className="bg-[#E2FAF4] text-xs border-[0.08rem] border-[#1EB28F] text-[#1EB28F] px-2 py-1 text-lg">نوجوانان
                </button>
                <button
                    className="bg-[#E2FAF4] text-xs border-[0.08rem] border-[#1EB28F] text-[#1EB28F] px-2 py-1 text-lg rounded-e-lg">بزرگسالان
                </button>
            </div>
        </div>
    </div>
}

export default Courses;