/* eslint-disable react/prop-types */


import { CategoriesTypes, Other, Duration, Languages } from "../utils/constants";
import CancellationCheckbox from "./Filters/CancellationCheckbox";
import Checkbox from "./Filters/Checkbox";
import DurationCheckbox from "./Filters/DurationCheckbox";
import InputRange from "./Filters/InputRange";
import LangaugesCheckbox from "./Filters/LanguagesCheckbox";

export function FilterHeading({ text }) {
    return <h2 className="text-lg mb-3 ml-1">{text}</h2>;
}

const Filters = () => {
    return (
        <div className="mt-12 ml-10">
            <section>
                <FilterHeading text="Category Types" />
                {CategoriesTypes.map((data, index) => (
                    <Checkbox data={data} key={index} />
                ))}
            </section>
            <hr className="my-4 text-gray-900 " />
            <section>
                <FilterHeading text="Others" />
                {Other.map((data, index) => (
                    <CancellationCheckbox data={data} key={index} />
                ))}
            </section>
            <hr className="my-4 text-gray-900 " />
            <section className="py-3">
                <FilterHeading text="Price Range" />
                <InputRange />
            </section>
            <hr className="my-4 text-gray-900 " />
            <section>
                <FilterHeading text="Duration" />
                {Duration.map((data, index) => (
                    <DurationCheckbox data={data} key={index} />
                ))}
            </section>
            <hr className="my-4 text-gray-900 " />
            <section>
                <FilterHeading text="Languages" />
                {Languages.map((data, index) => (
                    <LangaugesCheckbox data={data} key={index} />
                ))}
            </section>
            <hr className="my-4 text-gray-900 " />
        </div>
    )
}
export default Filters