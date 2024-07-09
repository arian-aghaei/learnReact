function Main1(){
    return <div className="container mx-auto items-center flex flex-col font-body m-10">
        <div className="mx-auto flex flex-col justify-center p-5 text-3xl">
            <div className="text-[#0052CC]">چرا اسپیکاپ؟</div>
            <img className="mx-auto" src="gunderline.png" alt=""/>
        </div>
        <div className="p-5 flex flex-col justify-center text-center w-[70%]" dir="rtl">
            <h1 className="text-2xl mb-4">ایجاد یک محیط 100 درصد انگلیسی و یادگیری زبان به طبیعی ترین روش</h1>
            <p>سیستم آموزشی آکادمی اسپیکاپ با روشی خلاقانه، منعطف و موثر این امکان را برای شما ایجاد کرده تا بدون ایجاد اخلال در زندگی شخصی و شغلیتان بتوانید سریع تر به اهداف خود در یادگیری زبان دست یابید.</p>
        </div>
        <div className="flex flex-col justify-center p-5 ">
            <div>
                {/*<img className="h-[33rem] " src="boyBack.png" alt=""/>*/}
                <img className="h-[33rem] " src="Group162.png" alt=""/>
            </div>


        </div>
        <div className="flex gap-3 w-[80%]" dir="rtl">
            <img src="Group165.png" alt=""/>
            <div className="my-auto flex flex-col items-center">
                <div className=" text-center">
                    اساس آموزش ما در <span className="text-xl underline">کلاس های آنلاین</span> است اما <span
                    className="text-xl">زبان آموزان تهرانی</span> می‌توانند در صورت تمایل در کلاس های حضوری نیز ثبت نام
                    کنند
                </div>
                <div className="flex gap-3 mt-5">
                    <button className="rounded bg-[#1EB28F] text-white p-2">
                        کلاس های حضوری
                    </button>
                    <button className="text-[#1EB28F] bg-[#E2FAF4] rounded p-2">
                        کلاس های آنلاین
                    </button>
                </div>
            </div>
        </div>

    </div>
}

export default Main1;