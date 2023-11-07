import SearchBar from "../components/SearchBar"


const Categories = () => {
    return (
        <div className="mt-[102px]">
            <section className="flex  flex-col justify-center items-center">
                <h1 className="text-4xl font-semibold mt-3 mb-4">Tours in London</h1>
                <SearchBar />
            </section>
        </div>
    )
}

export default Categories