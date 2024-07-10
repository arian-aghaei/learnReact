function Header() {
    return <>
        <div className="hidden md:block my-3 bg-gradient-to-r from-[#0052CC] via-[#5FD4AF] to-[#0052CC] text-center p-4 font-body text-white">درس خوندن به راهه | بسته های آموزشی با بهترین قیمت</div>
        <div className="p-3 md:sticky top-0 bg-white " dir="rtl">
            <div>
                <img className="block md:hidden basis-1/4 my-auto object-contain h-8" src={'logo.png'} alt="logo"/>
            </div>

            <div className="flex justify-between md:justify-center font-body container mx-auto py-3 px-2 md:px-0" dir="rtl">
                <div className="flex md:hidden basis-1/2  rounded ">
                    <img className="my-auto p-3 bg-[#DDEBFF]" src="menu.png" alt=""/>
                </div>
                <img className="hidden md:flex basis-1/4 my-auto object-contain h-8" src={'logo.png'} alt="logo"/>

                <div className="hidden md:grid grid-cols-5 gap-3 basis-1/2 my-auto">
                    <div className="text-center hover:text-[#1EB28F]"><a href="#">صفحه اصلی</a></div>
                    <div className="text-center hover:text-[#1EB28F]"><a href="#">محتوا و محصولات</a></div>
                    <div className="text-center hover:text-[#1EB28F]"><a href="#">درباره ما</a></div>
                    <div className="text-center hover:text-[#1EB28F]"><a href="#">سوالات متداول</a></div>
                    <div className="text-center hover:text-[#1EB28F]"><a href="#">تماس با ما</a></div>
                </div>

                <div className="p-2 px-3 bg-blue-700 gap-16 text-white rounded flex justify-center md:mx-auto">
                    <button>ورود و ثبت نام</button>
                </div>
            </div>
        </div>
    </>
}

export default Header;