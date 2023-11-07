import { NavArrowDown } from "iconoir-react"

const Navbar = () => {
    return (
        <div className="w-full fixed left-0 top-0 right-0 bg-sky-800 flex items-center justify-between p-4">
            <h3 className="text-3xl text-white">TripWeb</h3>
            <ul className="flex gap-6 text-white">
                <li className="flex justify-center items-center gap-1  hover:text-blue-600">Home
                    <NavArrowDown className="text-white text-xs  hover:text-blue-600" /></li>
                <li className="flex justify-center items-center gap-1 hover:text-blue-600">Categories  <NavArrowDown className="text-white text-xs  hover:text-blue-600" /> </li>
                <li className="flex justify-center items-center gap-1  hover:text-blue-600">Destinations  <NavArrowDown className="text-white text-xs  hover:text-blue-600" /></li>
                <li className="flex justify-center items-center gap-1  hover:text-blue-600">Blog  <NavArrowDown className="text-white text-xs  hover:text-blue-600" /></li>
                <li className="flex justify-center items-center gap-1  hover:text-blue-600">Pages  <NavArrowDown className="text-white text-xs  hover:text-blue-600" /></li>
                <li className="flex justify-center items-center gap-1  hover:text-blue-600">Dashboard  <NavArrowDown className="text-white text-xs  hover:text-blue-600" /></li>
                <li className="flex justify-center items-center gap-1  hover:text-blue-600">Contact  <NavArrowDown className="text-white text-xs  hover:text-blue-600" /></li>
            </ul>
            <button className="btn-primary">Become An Expert</button>
            <button className="btn-secondary text-white">Sign In / Register</button>
        </div>
    )
}

export default Navbar