import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [selectedSubCategory, setSelectedSubCategory] = useState('Voodoo-Doll');
    const [activeTab, setActiveTab] = useState('Voodoo-Doll');
    useEffect(() => {
        fetch('http://localhost:5000/tabCetagory') // Adjust the path to the JSON file as needed
            .then(res => res.json())
            .then(data => {
                setCategories(data);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleTabSelect = (title) => {
        setSelectedSubCategory(title);
        setActiveTab(title);

    };

    return (
        <div className='grid lg:grid-cols-3 gap-4 mb-20 '>

            <div className=''>
                {
                    categories
                        .filter(category => category.SubCategory === selectedSubCategory)
                        .slice(0, 1)
                        .map(filteredCategory => (
                            <div className="card w-96 h-full bg-base-50 bg-opacity-10 shadow-xl image-full" key={filteredCategory._id}>
                                <figure><img src={filteredCategory.Picture} alt={filteredCategory.name} /></figure>
                                <div className="card-body card-title ">

                                    <h2 className=" p-6 font-bold text-2xl ">
                                        Our Special Product
                                    </h2>

                                    <h2 >{filteredCategory.SubCategory
                                    }</h2>
                                    <p className='mt-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque facere illo delectus. Incidunt sit vel error corrupti porro nulla, doloremque ab ex. Quam quia dolores blanditiis sapiente, repudiandae aliquam vitae.</p>
                                    <div className="card-actions justify-end">


                                    </div>
                                </div>
                            </div>
                        ))
                }
            </div>

            <div className='lg:col-span-2 gap-3 '>
                <Tabs>
                    <TabList className='flex  p-3 space-x-14 mb-10 '>
                        <div className='font-extrabold'>
                            <h4>Shop Category</h4>
                        </div>
                        <Tab className={`font-bold p-2 rounded  ${activeTab === 'Voodoo-Doll' ? 'bg-red-100' : ''
                            }`} onClick={() => handleTabSelect('Voodoo-Doll')}>Voodoo-Doll</Tab>
                        <Tab className={`font-bold p-2 rounded  ${activeTab === 'Paper-Doll' ? 'bg-red-100' : ''
                            }`} onClick={() => handleTabSelect('Paper-Doll')}>Paper-Doll</Tab>
                        <Tab className={`font-bold p-2 rounded  ${activeTab === 'Pottery-Doll' ? 'bg-red-100' : ''
                            }`} onClick={() => handleTabSelect('Pottery-Doll')}>Pottery-Doll</Tab>
                    </TabList>

                    <TabPanel className='grid lg:grid-cols-3 gap-3'>

                        {

                            categories
                                .filter(category => category.SubCategory === selectedSubCategory)
                                .map((category) => (

                                    <div key={category._id} className="card   w-auto bg-base-100 shadow-xl">

                                        <figure className="px-5 pt-5">
                                            <img src={category.Picture} alt="Shoes" className="rounded-xl h-[144px] w-[144px]" />
                                        </figure>
                                        <div className="card-body  ">
                                            <h2 className="card-title ">{category.Name}</h2>
                                            <p>Price: ${category.Price}</p>
                                            <p>Ratings: {category.Rating}</p>
                                            <div className="card-actions text-right">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>


                                ))

                        }
                    </TabPanel>
                    <TabPanel className='grid lg:grid-cols-3 gap-5'>

                        {

                            categories
                                .filter(category => category.SubCategory === selectedSubCategory)
                                .map((category) => (
                                    <div key={category._id} className="card w-auto bg-base-100 shadow-xl">
                                        <figure className="px-5 pt-5">
                                            <img src={category.Picture} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body  ">
                                            <h2 className="card-title">{category.Name}</h2>
                                            <p>Price: ${category.Price}</p>
                                            <p>Ratings: {category.Rating}</p>
                                            <div className="card-actions text-right">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                ))

                        }
                    </TabPanel>
                    <TabPanel className='grid lg:grid-cols-3 gap-5'>

                        {

                            categories
                                .filter(category => category.SubCategory === selectedSubCategory)
                                .map((category) => (
                                    <div key={category._id} className="card w-auto bg-base-100 shadow-xl">
                                        <figure className="px-5 pt-5">
                                            <img src={category.Picture} alt="Shoes" className="rounded-xl" />
                                        </figure>
                                        <div className="card-body  ">
                                            <h2 className="card-title">{category.Name}</h2>
                                            <p>Price: ${category.Price}</p>
                                            <p>Ratings: {category.Rating}</p>
                                            <div className="card-actions text-right">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                ))

                        }
                    </TabPanel>


                </Tabs>
            </div>
        </div >
    );
};

export default Category;




