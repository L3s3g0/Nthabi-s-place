import"./contactstyle.css"
import { Great_Vibes, Poppins } from "next/font/google"
import Image from "next/image"
import phone from "../contact/img/phone-svgrepo-com.svg"
import email from "../contact/img/envelope-svgrepo-com.svg"
import location from "../contact/img/location-pin-svgrepo-com.svg"
import LOGO from "../../components/logo/logo"

const Head = Great_Vibes({
    weight: "400",
    subsets: ["latin"]
})

const det = Poppins({
    weight: "300",
    subsets: ["latin"]
})

export default function ContactPage(){
    return(
        <div className="contactPage bg-gray-200">
            <div className="flex justify-center items-end">
                <h1 className={`${Head.className} border-b border-black px-4 text-4xl`}>Reach Out To Us</h1>
            </div>
            <div className="contact px-[6rem] py-2 gap-1">
                <div className="contactDetails px-2 py-4">
                    <h1 className={`${Head.className} text-3xl`}>Contact Details:</h1>
                    <ul className="mt-3">
                        <li>
                            <div className="flex items-center">
                                <Image src={phone} alt="" className="w-[1.5rem] h-[1.5rem]"/>
                                <a className={`${det.className} text-lg mx-[0.4rem]`}>078 *** ****</a>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <Image src={email} alt="" className="w-[1.5rem] h-[1.5rem]"/>
                                <a className={`${det.className} text-lg mx-[0.4rem]`}>test444Hotel@gmail.com</a>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-start">
                                <Image src={location} alt="" className="w-[1.5rem] h-[1.5rem]"/>
                                <a className={`${det.className} text-lg mx-[0.4rem]`}>1234 Anywhere, Johannesburg, Doornkop, 1723</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="px-2 py-4">
                    <h1 className={`${Head.className} text-3xl`}>References:</h1>
                    <ul className="mt-3">
                        <li><a className={`${det.className} text-base`}>About</a></li>
                        <li><a className={`${det.className} text-base`}>Bookings</a></li>
                        <li><a className={`${det.className} text-base`}>Careers</a></li>
                        <li><a className={`${det.className} text-base`}>Tenders</a></li>
                        <li><a className={`${det.className} text-base`}>Report</a></li>
                    </ul>
                </div>
                <div className="flex justify-center items-center">
                    <LOGO/>
                </div>
            </div>
        </div>
    )
}