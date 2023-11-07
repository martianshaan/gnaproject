import { AppleMac, SendMail } from "iconoir-react"


const Footer = () => {
    return (
        <div className='w-full left-0 bottom-0 right-0'>
            <div className="w-full  bg-sky-800 flex items-center justify-center  gap-40 py-7">
                <div className="flex gap-3 text-white items-center">
                    <SendMail className="text-3xl" />
                    <div className="">
                        <p className="font-semibold text-lg  mb-[-6px]">Your travel Journey starts Here</p>
                        <span className="text-[0.65rem] font-thin ">Sign up and we will send the best deals to you</span>
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                    <input type="text" className="p-2 pr-20" placeholder="Your email" />
                    <button type="submit" className="bg-blue-700 text-white p-2" >
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="bg-white px-20 grid grid-cols-5 pt-10 gap-6 justify-between ">
                <div>
                    <h3 className="text-sm font-normal mb-4 ">Contact US</h3>
                    <p className="text-xs font-thin">Toll free customer care</p>
                </div>
                <div>
                    <h3 className="text-sm font-normal mb-4 ">Company</h3>
                    <p className="text-xs font-thin">About us</p>
                    <p className="text-xs font-thin">Career</p>
                </div>
                <div>
                    <h3 className="text-sm font-normal mb-4 ">Support</h3>
                    <p className="text-xs font-thin">Contact</p>
                    <p className="text-xs font-thin">Legal Notice</p>
                </div>
                <div>
                    <h3 className="text-sm font-normal mb-4 ">Other Services</h3>
                    <p className="text-xs font-thin">Car hire</p>
                    <p className="text-xs font-thin">Activity Finder</p>
                </div>
                <div>
                    <h3 className="text-sm font-normal mb-4 ">Mobile</h3>
                    <div className="flex gap-2">
                        <AppleMac className="text-black" />
                        <p className="text-xs font-thin">Download on the Mobile</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer