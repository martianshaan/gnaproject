import { Calendar, Compass, MapPin, Search } from "iconoir-react"


const SearchBar = () => {
    return (
        <div className="flex  items-start gap-12 bg-white p-4">
            <section className="flex gap-3 mr-10 justify-center items-start ">
                <MapPin />
                <div>
                    <p className="text-md">Location</p>
                    <p className="text-xs text-gray-400">Where are you going?</p>
                </div>
            </section>
            <section className="flex gap-3 justify-center items-start ">
            <div className="inline-block  w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
                <Calendar />
                <div>
                    <p className="text-md">Check in - Check out</p>
                    <p className="text-xs text-gray-400">
                        October 15 - November 15
                    </p>
                </div>
            </section>
            <section className="flex gap-3 justify-center items-start ">
            <div className="inline-block  w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>    
                <Compass />
                <div>
                    <p className="text-md">Tour </p>
                    <p className="text-xs text-gray-400">
                        2 adults- 1 children- 1 room
                    </p>
                </div>
            </section>

            <button className="bg-blue-700 p-4 px-8 flex items-center justify-center gap-2">
                <Search className="text-white text-xs" />
                <p className="text-white text-md">Search</p>
            </button>

        </div>
    )
}

export default SearchBar