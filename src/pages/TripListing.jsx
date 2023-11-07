import Filters from "../components/Filters"
import Listing from "./Listing"


const TripListing = () => {
    return (
        <div className="flex bg-white mt-10 gap-3 pl-8 pr-5 justify-center w-full">
            <Filters  />
            <Listing />
        </div>

    )
}

export default TripListing