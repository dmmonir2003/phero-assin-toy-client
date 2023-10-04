import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToy = () => {

    const { user } = useContext(AuthContext);
    const { id } = useParams();


    const toy = useLoaderData();


    const handleUpdateToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const pric = form.price.value;
        const quantit = form.quantity.value;
        const descriptio = form.description.value;

        const toyData = {
            price: pric,
            quantity: quantit,
            description: descriptio,
        };

        fetch(`http://localhost:5000/alltoys/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(toyData),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Server returned an error: ' + response.status);
                }
            })
            .then(data => {
                if (data.error) {
                    console.error(data.error);
                } else {
                    console.log(data.message === 'Document updated successfully');
                    alert('document updeted')
                }
            })
            .catch(error => {
                console.error(error);
            });


    }


    return (
        <div>
            <form onSubmit={handleUpdateToy} className="hero-content flex-col md:w-full p-20 ">

                <h2 className="text-5xl text-center pt-5 font-bold mb-14">update the Toy information !!!</h2>


                <div className="w-3/4">
                    <div className="flex ">
                        <div className="form-control  w-1/2">

                            <label className="input-group ">
                                <span className="label-text">Available quantity </span>
                                <input name='quantity' defaultValue={toy.quantity} type="text" placeholder="Available quantity" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control w-1/2">

                            <label className="input-group ">
                                <span className="label-text">Price </span>
                                <input name='price' type="text" placeholder="Price" defaultValue={toy.price} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form-control ">

                    <label className="input-group ">
                        <span className="label-text">Detail description </span>
                        <input type='textarea' defaultValue={toy.description} name='description' placeholder="Input Detail description" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></input>
                    </label>
                </div>

                <button className="btn w-3/4 btn-success"><input type="submit" value="Update Now" /></button>
            </form>
        </div>
    );
};

export default UpdateToy;