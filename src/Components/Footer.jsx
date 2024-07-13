function Footer() {
    return <div className="font-body bg-white overflow-hidden rounded-t-3xl">
        <div className="text-white bg-gradient-to-b from-[#0052CC] to-[#23D0A6] flex justify-center" dir="rtl">
            <div className="grid grid-cols-1 md:grid-cols-3 md:w-[85%] my-8">
                <div className="flex justify-center">
                    <img src="ic3.png" alt=""/>
                    <div className="flex flex-col my-auto">
                        <div>با کیفیت ترین دوره ها و بسته ها</div>
                        <div className="text-sm">بر اساس جدیدترین مباحث</div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src="ic1.png" alt=""/>
                    <div className="flex flex-col my-auto">
                        <div>پشتیبانی حرفه ای با کارشناسان مجرب</div>
                        <div className="text-sm">سیستم ارسال تیکت پیشرفته</div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src="ic2.png" alt=""/>
                    <div className="flex flex-col my-auto">
                        <div>خرید آسان و امن در کمترین زمان</div>
                        <div className="text-sm">قابلیت اعمال کد تخفیف</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-10 mt-6 mb-6" dir="rtl">
            <div className="my-auto flex flex-col items-center md:items-start">
                <img className="w-[30%] md:w-[15%] pb-3" src="logo2.png" alt=""/>
                <div>
                    آکادمی زبان آنلاین اسپیکاپ با بهره گیری از مربیان با تجربه سیستم آموزشی به روز و ارتباط مستمر با
                    مراکز اصلی آموزش زبان در دنیا، موفقیت های چشمگیری را در طول فعالیت خود به دست آورده است.
                    <div className="flex text-[#0052CC] " dir="ltr">
                        <img src="phoneFooter.png" alt=""/>
                        <div className="my-auto">
                            ۰۳۱ ۳۳۹۳ ۲۳۶6
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex my-auto">
                <div className="basis-1/3">
                    <ul>
                        <span>دسترسی سریع</span>
                        <li className="text-sm mt-3">○ صفحه اصلی</li>
                        <li className="text-sm mt-2">○ دوره ها</li>
                        <li className="text-sm mt-2">○ بسته ها</li>
                        <li className="text-sm mt-2">○ کارگاه های آموزشی</li>
                        <li className="text-sm mt-2">○ روش ثبت نام</li>
                        <li className="text-sm mt-2">○ مقالات</li>
                        <li className="text-sm mt-2">○ شرایط و ضوابط</li>
                    </ul>
                </div>
                <div className="basis-2/3">
                    <span>نمادها</span>
                    <img src="Frame.png" alt=""/>
                </div>
            </div>
        </div>
        <div className="bg-[#E2FAF4]">
            <div className="flex flex-col md:flex-row w-[90%] mx-auto justify-center md:gap-80" dir="rtl">
                <div className="p-5 order-2 md:order-1 text-center md:text-right">
                    تمامی حقوق مادی و معنوی این سایت برای آکادمی زبان آنلاین اسپیکاپ محفوظ میباشد.
                </div>
                <div className="flex my-auto justify-center order-1 md:order-2 pt-5 md:pt-0">
                    <img className="w-[50%] md:w-[60%]" src="socials.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;