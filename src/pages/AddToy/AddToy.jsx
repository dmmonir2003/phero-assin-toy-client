import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from 'sweetalert2'


const AddToy = () => {


    const { user } = useContext(AuthContext);


    const handaleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const toyNam = form.toyName.value;
        const toyPhot = form.toyPhoto.value;
        const sellerNam = form.sellerName.value;
        const email = form.email.value;
        const pric = form.price.value;
        const ratin = form.rating.value;
        const quantit = form.quantity.value;
        const descriptio = form.description.value;
        const subcategor = form.subcategory.value;


        const toyData = {
            toyName: toyNam,
            toyPhoto: toyPhot,
            sellerName: sellerNam,
            sellerEmail: email,
            price: pric,
            rating: ratin,
            quantity: quantit,
            description: descriptio,
            subcategory: subcategor

        }


        fetch('http://localhost:5000/toysData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Toy Added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }

            })
            .catch(error => console.log(error))

    }



    return (
        <div>
            <form onSubmit={handaleAddToy} className="hero-content flex-col md:w-full p-20 ">

                <h2 className="text-5xl text-center pt-5 font-bold mb-14">Add Toy !!!</h2>
                <div className="w-3/4  ">
                    <div className="flex">
                        <div className="form-control mr-3 w-1/2">

                            <label className="input-group  ">
                                <span className="label-text">Picture </span>
                                <input name='toyPhoto' type="text" placeholder="Picture URL of the toy" className="input input-bordered  w-full" />
                            </label>
                        </div>
                        <div className="form-control  w-1/2">

                            <label className="input-group">
                                <span className="label-text">Toy Name </span>
                                <input name='toyName' type="text" placeholder=" Toy name " className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-3/4">
                    <div className="flex ">
                        <div className="form-control  mr-3 w-1/2">

                            <label className="input-group ">
                                <span className="label-text">Seller Name</span>
                                <input name='sellerName' type="text" defaultValue={user.displayName} placeholder="seller name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control  w-1/2">

                            <label className="input-group">
                                <span className="label-text">Seller Email </span>
                                <input name='email' type="email" defaultValue={user.email} placeholder="seller email" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-3/4">
                    <div className="flex ">

                        <div className="form-control  mr-3 w-1/2">
                            <label className="input-group ">
                                <span className="label-text">Sub-Category </span>
                                <select className="select select-bordered join-item w-full" name="subcategory">
                                    <option defaultValue="select-category">select-category</option>
                                    <option value="Paper-Doll">Paper-Doll</option>
                                    <option value="Pottery-Doll">Pottery-Doll</option>
                                    <option value="Voodoo-Doll">Voodoo-Doll</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-control w-1/2">

                            <label className="input-group ">
                                <span className="label-text">Price </span>
                                <input name='price' type="text" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-3/4">
                    <div className="flex ">
                        <div className="form-control  mr-3 w-1/2">

                            <label className="input-group ">
                                <span className="label-text">Rating</span>
                                <input name='rating' type="text" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control  w-1/2">

                            <label className="input-group ">
                                <span className="label-text">Available quantity </span>
                                <input name='quantity' type="text" placeholder="Available quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-control ">

                    <label className="input-group ">
                        <span className="label-text">Detail description </span>
                        <input type='textarea' name='description' placeholder="Input Detail description" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></input>
                    </label>
                </div>

                <button className="btn w-3/4 btn-success"><input type="submit" value="Add Now" /></button>
            </form>
        </div>
    );
};

export default AddToy;