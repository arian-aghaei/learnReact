function Vector(){
    return <div className="font-body">
        <div className="relative -z-10">
            <img className="h-60" src="VectorTop.png" alt=""/>
            <div className="bg-[url('Rectangle.png')] absolute w-screen top-24">
                <div className="flex flex-col items-center">
                    <div className="text-[#0052CC] text-xl">
                        نقاط قوت و وجه تمایز ما
                    </div>
                    <img src="gunderline.png" alt=""/>
                </div>
                <div className="w-[80rem] mx-auto flex gap-3 p-5">
                    <img className="my-auto" src="left2.png" alt=""/>
                    <div className="container mx-auto flex p-5 justify-center gap-5 w-[18rem]">
                        <img src="4.png" alt=""/>
                        <img src="3.png" alt=""/>
                        <img src="2.png" alt=""/>
                        <img src="1.png" alt=""/>
                    </div>
                    <img className="my-auto" src="right2.png" alt=""/>
                </div>
            </div>
            <img className="h-60" src="VectorBot.png" alt=""/>
        </div>
    </div>
}

export default Vector;