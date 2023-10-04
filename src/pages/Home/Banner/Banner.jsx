import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Banner = () => {
    const [images, setImages] = useState([]);

    // Assuming useLoaderData returns an array of image URLs
    const loaderData = useLoaderData();

    useEffect(() => {
        setImages(loaderData);
    }, [loaderData]);

    return (
        <div>
            <div className="grid grid-flow-row-dense lg:grid-cols-6 lg:grid-rows-3 gap-3 bg-gray-100 mb-20 pb-3" >
                <div className="lg:col-span-2  lg:row-span-2 border border-red-300 gap-2 bg-opacity-80 bg-black text-white text-2xl font-semibold rounded-md p-4">
                    The Arts and Crafts movement originated in the UK in the early 19th century primarily as a result of the emergence of new thoughts, ideas, and perceptions about art, society, and labor.
                </div>

                {
                    images.map((image, index) => (
                        <div key={index} className="group m-2 group-hover:blur-sm hover:!blur-none shadow-2xl p-2 h-[160px] w-40 rounded-md">
                            <img className="hover:translate-y-2 transition-transform duration-300 ease-in-out transform rounded-sm h-[144px] w-[144px]" src={image.pictureUrl} alt={`Image ${index}`} />
                        </div>))
                }


                {/* Add other grid items here */}
            </div>

            <h3 className='text-center text-5xl font-extrabold mb-20'>OUR SHOP CATEGORY !!!</h3>

        </div>
    );
};

export default Banner;
