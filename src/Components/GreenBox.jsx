function GreenBox() {
    return <div className="bg-gradient-to-b from-[#00E7A1] to-[#13B58E] font-body rounded-b-2xl md:rounded-b-none">
        <div className="container mx-auto text-center">
            <div className="flex flex-col">
                <div className="text-center text-white p-10 md:p-5 pb-0 text-lg md:text-xl">برای شروع اصولی یادگیری، دوس داری نقشه راهمون رو
                    بدونی؟
                </div>
                <img className="mx-auto" src="underline.png" alt=""/>
            </div>
            <div className="flex justify-center gap-5" dir="rtl">
                <div className="my-auto flex items-center text-center text-white">
                    <img src="root1.png" alt=""/>

                </div>
                <div className="my-auto flex items-center text-center text-white">
                    <img src="large.png" alt=""/>

                </div>
                <div className="my-auto flex items-center text-center text-white flex-col">
                    <img src="root2.svg" alt=""/>
                    <div className="enter">ثبت نام در سایت اسپیکاپ</div>
                </div>
                <div className="my-auto flex items-center text-center text-white">
                    <img src="large.png" alt=""/>

                </div>
                <div className="my-auto flex items-center text-center text-white flex-col">
                    <img src="root3.svg" alt=""/>
                    <div className="enter">انتخـاب روز و ساعت
                        برای مشــــاوره رایگان
                    </div>
                </div>
                <div className="my-auto flex items-center text-center text-white">
                    <img src="large.png" alt=""/>

                </div>
                <div className="my-auto flex items-center text-center text-white flex-col">
                    <img src="root4.svg" alt=""/>
                    <div className="enter">تماس مشاوران و تعییــن سطح</div>
                </div>
                <div className="my-auto flex items-center text-center text-white">
                    <img src="large.png" alt=""/>

                </div>
                <div className="my-auto flex items-center text-center text-white flex-col">
                    <img src="root5.svg" alt=""/>
                    <div className="enter">ثــبت نــام در دوره هــا و خرید بسته های آموزشی</div>
                </div>
            </div>
        </div>
        <div className="p-0 flex  justify-center p-5 text-xs " dir="rtl">
            <span className="bg-white rounded flex items-center">
                <img className="p-2" src="phone.png" alt=""/>
                <span className="p-2 ps-0 text-[#1EB28F]">
                    برای کسب اطلاعات بیشتر و دریافت راهنمایی با ما تماس بگیرید.
                </span>
            </span>
        </div>
    </div>
}

export default GreenBox;