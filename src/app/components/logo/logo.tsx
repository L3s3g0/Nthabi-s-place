import { Yellowtail } from "next/font/google"
import Image from "next/image"
import building from "../logo/icon/building-svgrepo-com.svg"

const LogoFont = Yellowtail({
    weight: "400",
    subsets: ["latin"]
})

export default function LOGO(){
    return(
        <div className="flex">
            <h1 className={`${LogoFont.className} text-3xl text-red-300`}>Nthabi&apos;s Place</h1>
            <Image src={building} alt="" className="w-[2.2rem] h-[2.2rem] opacity-[0.8] mx-[0.2rem]"/>
        </div>
    )
}
