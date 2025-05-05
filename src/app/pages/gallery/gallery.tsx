import"./gallerystyle.css"
import Image from "next/image"
import { Great_Vibes, Poppins } from "next/font/google"
import image1 from "../gallery/Imgs/dining.jpg"
import image2 from "../gallery/Imgs/massage.jpg"
import image3 from "../gallery/Imgs/topview.jpg"
import image4 from "../gallery/Imgs/massage2.jpg"
import image5 from "../gallery/Imgs/waiting.jpg"
import image6 from "../gallery/Imgs/bathtab.jpg"
import image7 from "../gallery/Imgs/crew.jpg"
import image8 from "../gallery/Imgs/glass.jpg"
import image9 from "../gallery/Imgs/laptop.jpg"

const Head = Great_Vibes({
    weight: "400",
    subsets: ["latin"]
})


export default function Gallery(){
    return(
        <div className="gallery py-2">
            <div className="flex items-center justify-center">
                <h1 className={`${Head.className} text-4xl border-b border-black px-4 py-[0.2rem]`}>Check Our Gallery</h1>
            </div>
            <div className="gallerycont px-[6rem] gap-[0.2rem]">
                <div className="imagesection bg-blue-400">
                <Image src={image1} alt="" className="w-[100%] h-[100%]"/>
                </div>
                <div className="gall shadow-2xl h-[100%] px-[0.1rem] py-[0.1rem]">
                    <div className="Images h-[100%] w-[100%] gap-[0.3rem] justify-center">
                        <Image src={image1} alt="" className="w-[8.5rem] h-[8.5rem]"/>
                        <Image src={image2} alt="" className="w-[8.5rem] h-[8.5rem]"/>
                        <Image src={image3} alt="" className="w-[8.5rem] h-[8.5rem]"/>
                        <Image src={image4} alt="" className="w-[8.5rem] h-[8.5rem]"/>
                        <Image src={image5} alt="" className="w-[8.5rem] h-[8.5rem]"/>
                        <Image src={image6} alt="" className="w-[8.5rem] h-[8.5rem]"/>
                        <Image src={image7} alt="" className="w-[8.5rem] h-[8.5rem]"/>
                        <Image src={image8} alt="" className="w-[8.5rem] h-[8.5rem]"/>
                        <Image src={image9} alt="" className="w-[8.5rem] h-[8.5rem]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}