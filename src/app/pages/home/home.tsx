"use client"
import"../home/homepage.css"
import { Great_Vibes, Poppins } from "next/font/google"
import Image from "next/image"
import Showcase from "../home/Images/showcase1.jpg"

const HeadFont = Great_Vibes({
    weight: "400",
    subsets: ["latin"]
})

const show = Poppins({
    subsets: ["latin"],
    weight:"200"
})

export default function HomePage(){
    return(
        <div className="homepage w-full h-screen">
            <div className="imgContainer
            w-[100%] 
            h-[100%] 
            z-[0]">
                <Image src={Showcase} alt="showcase" 
                className=" img
                contrast-30
                w-[100%] 
                h-[100%]"/>
            </div>
            <div className="homecontent
            bg-[transparent] 
            w-full 
            h-screen 
            absolute
            top-0 
            z-[2]
            flex
            flex-col
            items-center
            justify-center">
                <h1 className={`${HeadFont.className}
                headtext 
                text-center 
                text-[1rem]
                text-white  
                leading-25`}>
                    HOME
                    <br/> 
                    SWEET
                    <br/> 
                    HOME
                </h1>
                <div className="mt-8">
                    <ul className={`${show.className} additionals flex text-3xl text-white`}>
                        <li><a>Affordable</a></li>
                        <li><a>Quality Service</a></li>
                        <li><a>Customer Satisfaction</a></li>
                        <li><a>Security</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}