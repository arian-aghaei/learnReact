function Header() {
    return <>
        <div className="hidden md:block my-3 bg-gradient-to-r from-[#0052CC] via-[#5FD4AF] to-[#0052CC] text-center p-4 font-body text-white">درس خوندن به راهه | بسته های آموزشی با بهترین قیمت</div>
        <div className="sticky top-0 bg-white ">
            <div className="flex justify-center font-body container mx-auto py-3" dir="rtl">
                <img className="basis-1/4 my-auto object-contain h-8" src={'logo.png'} alt="logo"/>

                <div className="grid grid-cols-5 gap-3 basis-1/2 my-auto">
                    <div className="text-center hover:text-[#1EB28F]"><a href="#">صفحه اصلی</a></div>
                    <div className="text-center hover:text-[#1EB28F]"><a href="#">محتوا و محصولات</a></div>
                    <div className="text-center hover:text-[#1EB28F]"><a href="#">درباره ما</a></div>
                    <div className="text-center hover:text-[#1EB28F]"><a href="#">سوالات متداول</a></div>
                    <div className="text-center hover:text-[#1EB28F]"><a href="#">تماس با ما</a></div>
                </div>

                <div className="p-2 px-3 bg-blue-700 gap-16 text-white rounded flex justify-center mx-auto">
                    <button>ورود و ثبت نام</button>
                </div>
            </div>
        </div>
    </>
}

export default Header;