import { Poppins } from "next/font/google"

const det = Poppins({
    weight: "300",
    subsets: ["latin"]
})

export default function FOOTER(){
    return(
        <div className="h-[3rem] bg-gray-600 flex justify-center items-center">
            <p className={`${det.className} text-lg text-white text-center`}>Copyright @Nthabi's Place, All Rights Reserved. Developed by the folks.</p>
        </div>
    )
}
