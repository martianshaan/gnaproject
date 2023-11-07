/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ArrowUpRight, Circle, HelpCircleSolid, Star, StarSolid } from 'iconoir-react';
import React from 'react'

const SingleTour = ({ tripData }) => {

    const { duration, type, reviews, location, title, price, safety_measures, cancellation,
        category, durationType, language, other, image } = tripData;
    return (
        <div>
            <div className="grid grid-cols-4 gap-2 mb-3 pr-3 p-2 items-start mt-3 ">
                <figure
                    className="flex items-center justify-center p-1  xs:w-1/2 w-full  "
                >

                    <img
                        src={image}
                        alt=""
                        className="w-full object-cover  rounded-md sm:object-cover h-40"
                    />
                </figure>
                <section className='flex justify-between col-span-3'>
                    <section className=''>
                        <div className='flex  items-center gap-3'>
                            <span className='text-neutral-400'>{duration}</span>
                            <span className='text-neutral-400 text-[6px]'> <Circle />  </span>
                            <span className='text-neutral-400 '>{type}</span>
                        </div>
                        <h2 className='text-lg font-medium  '>{title}</h2>
                        <h2 className='text-lg font-medium'>London with Guided Cathedral Tour</h2>
                        <span className='text-neutral-400'>{location}</span>
                        <p className='mt-3'>Taking Safety Measures</p>
                        <p className='text-green-500'>Free Cancellation</p>
                    </section>
                    <section className='flex flex-col ml-3 items-end'>
                        <div className='flex text-xs gap-1'>
                            {[1, 2, 3, 4, 5].map((item, index) => (
                                <StarSolid className='text-yellow-500 text-[0.6rem]' key={index} />
                            ))}
                        </div>
                        <span>{reviews} reviews</span>
                        <p className='text-neutral-400 mt-6'>From</p>
                        <p className='text-xl font-bold '> {price} </p>
                        <p className='text-neutral-400 mb-3'>per adult</p>
                        <button className='flex gap-2 bg-blue-700 px-4 py-2' style={{ alignItems: 'center' }}>
                            <span className='text-white text-md'>View Detail</span>
                            <ArrowUpRight className='text-white text-xs' />
                        </button>
                    </section>

                </section>
            </div>
            <hr className="my-1 text-gray-900 " />
        </div>
    )
}

export default SingleTour