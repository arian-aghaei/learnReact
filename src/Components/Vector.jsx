function Vector(){
    return <div className="font-body">
        <div className="md:relative -z-10">
            <img className="md:h-60 md:mb-2" src="VectorTop.png" alt=""/>
            <div className="bg-[url('Rectangle.png')] md:absolute w-screen top-24">
                <div className="flex flex-col items-center">
                    <div className="text-[#0052CC] text-xl md:text-2xl">
                        نقاط قوت و وجه تمایز ما
                    </div>
                    <img src="gunderline.png" alt=""/>
                </div>
                <div className=" mx-auto flex gap-3 p-5">
                    <img className="my-auto" src="left2.png" alt=""/>
                    <div className="container mx-auto flex p-5 justify-center gap-5 ">
                        <img className="hidden lg:flex" src="4.png" alt=""/>
                        <img className="md:flex" src="3.png" alt=""/>
                        <img className="hidden md:flex" src="2.png" alt=""/>
                        <img className="hidden md:flex" src="1.png" alt=""/>
                    </div>
                    <img className="my-auto" src="right2.png" alt=""/>
                </div>
            </div>
            <img className="md:h-60 md:mt-4" src="VectorBot.png" alt=""/>
        </div>
    </div>
}

export default Vector;