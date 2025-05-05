import LOGO from "../logo/logo"
import"../nav/navBarStyle.css"
import Image from "next/image"
import Menu from "../nav/icon/menu-svgrepo-com.svg"
import { Poppins } from "next/font/google"

const menu = Poppins({
    subsets: ["latin"],
    weight:"500"
})

export default function NavBar(){
    return(
        <div className="nav 
        w-[100%] 
        flex 
        justify-between 
        items-center 
        px-[6rem] 
        h-[4rem] 
        fixed 
        z-[10]">
            <div className="w-[fit]">
                <LOGO/>
            </div>
            <Image src={Menu} alt="" className="menubar w-[2.5rem] h-[2.5rem]"/>
            <ul className={`${menu.className} menu flex text-white text-base`}>
                <li><a>Home</a></li>
                <li><a>Rooms</a></li>
                <li><a>About</a></li>
                <li><a>Gallery</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
    )
}