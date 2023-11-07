import SearchBar from "../components/SearchBar"


const Categories = () => {
    return (
        <div className="mt-[102px]">
            <section className="flex  flex-col justify-center items-center">
                <h1 className="text-4xl font-semibold">Tours in London</h1>
                <SearchBar />
            </section>
        </div>
    )
}

export default Categories