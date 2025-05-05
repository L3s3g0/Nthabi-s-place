import"./roompagestyle.css"
import Image from "next/image";
import show1 from "../room/imgs/show1.jpg"
import show2 from "../room/imgs/show2.jpg"
import show3 from "../room/imgs/show4.jpg"
import { Great_Vibes, Poppins } from "next/font/google"

const Head = Great_Vibes({
    weight: "400",
    subsets: ["latin"]
})

export default function RoomsPage(){
    return(
        <div className="main relative">
            <div className="
            flex
            justify-center
            items-center">
                <h1 className={`${Head.className} text-4xl border-b border-black px-4 py-[0.4rem]`}>Check Our Rooms</h1>
            </div>
            <div className="px-[8rem]">
                <div className="rooms w-[100%] h-[100%] p-2 gap-2">
                    <div className="w-[20rem] shadow-2xl h-[100%] rounded-2xl">
                        <div className="w-[20rem] h-[15rem] rounded-2xl">
                            <Image src={show1} alt="show1" className="w-[100%] h-[100%] rounded-t-2xl"/>
                        </div>
                        <div className="w-[20rem] h-[3.5rem] rounded-b-2xl px-[0.4rem] flex justify-between items-center">
                            <h1 className={`${Head.className} text-2xl`}>Bridget Room</h1>
                            <h1 className={`${Head.className} text-2xl`}>R350/<span className="text-sm text-red-300">Per Hour</span></h1>
                        </div>
                    </div>
                    <div className="w-[20rem] shadow-2xl h-[100%] rounded-2xl">
                        <div className="w-[20rem] h-[15rem] rounded-2xl">
                            <Image src={show2} alt="show1" className="w-[100%] h-[100%] rounded-t-2xl"/>
                        </div>
                        <div className="w-[20rem] h-[3.5rem] rounded-b-2xl px-[0.4rem] flex justify-between items-center">
                            <h1 className={`${Head.className} text-2xl`}>Mason Room</h1>
                            <h1 className={`${Head.className} text-2xl`}>R300/<span className="text-sm text-red-300">Per Hour</span></h1>
                        </div>
                    </div>
                    <div className="w-[20rem] h-[100%] rounded-2xl shadow-2xl">
                        <div className="w-[20rem] h-[15rem] rounded-2xl">
                            <Image src={show3} alt="show1" className="w-[100%] h-[100%] rounded-t-2xl"/>
                        </div>
                        <div className="w-[20rem] h-[3.5rem] rounded-b-2xl px-[0.4rem] flex justify-between items-center">
                            <h1 className={`${Head.className} text-2xl`}>Ruby Room</h1>
                            <h1 className={`${Head.className} text-2xl`}>R350/<span className="text-sm text-red-300">Per Hour</span></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="
            py-6
            flex
            justify-center
            items-center">
                <button className={`
                    border 
                    border-red-400 
                    text-red-400 
                    h-[2rem] 
                    w-[8rem] 
                    rounded-2xl 
                    justify-center 
                    items-center`}>
                        See more...
                </button>
            </div>
        </div>
    )
}