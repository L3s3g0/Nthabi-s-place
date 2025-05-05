
import"./aboutstyle.css"
import Image from "next/image"
import showcase from "../about/imgs/showcase.jpg";
import { Great_Vibes, Poppins } from "next/font/google"

const Head = Great_Vibes({
    weight: "400",
    subsets: ["latin"]
})

const about = Poppins({
    subsets: ["latin"],
    weight: "300"
})

export default function AboutPage(){
    return(
        <div className="page bg-gray-100 h-screen w-full">
            <div className="flex justify-center items-center">
                <h1 className={`${Head.className} text-4xl border-b border-black px-4 py-[0.2rem]`}>About Us</h1>
            </div>
            <div className="aboutCont px-[6rem] py-[0.4rem] gap-[0.2rem]">
                <div className="Image">
                    <Image src={showcase} alt="show" className="w-[100%] h-[100%] rounded-lg"/>
                </div>
                <div className="text py-3 px-3 h-[fit]">
                    <h1 className={`${Head.className} text-3xl`}>Fascinating Facts About Us</h1>
                    <h1 className={`${Head.className} text-2xl mt-2`}>Did You Know???</h1>
                    <p className={`${about.className} text w-[75%] pt-2 text-[0.8rem]`}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Explicabo saepe magnam officia aut perferendis praesentium, 
                        quos soluta consequuntur maiores veniam rem nam earum. 
                        Fuga adipisci ea consequuntur vero minima sit?
                        <br/>
                        <br/>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Explicabo saepe magnam officia aut perferendis praesentium, 
                        quos soluta consequuntur maiores veniam rem nam earum. 
                        Fuga adipisci ea consequuntur vero minima sit?
                        <br/>
                        <br/>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Explicabo saepe magnam officia aut perferendis praesentium,
                    </p>
                </div>
            </div>
        </div>
    )
}