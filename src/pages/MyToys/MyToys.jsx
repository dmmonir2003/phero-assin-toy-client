import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyToys = () => {

    const { user } = useContext(AuthContext);

    const [toys, setToys] = useState([]);


    const url = `http://localhost:5000/alltoys?sellerEmail=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
            .catch(error => console.log(error))
    }, [])


    const handaleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/alltoys/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remainning = toys.filter(toy => toy._id !== id);
                            setToys(remainning)
                        }


                    })






            }
        })

    }






    const toyRows = toys.map((toy) => <tr key={toy._id}>
        <th onClick={() => handaleDelete(toy._id)} className="btn btn-sm mt-3 btn-square btn-outline">X</th>
        <td>{toy.sellerName}</td>
        <td>{toy.toyName}</td>
        <td>{toy.subcategory}</td>
        <td>{toy.price}</td>
        <td>{toy.quantity}</td>
        <td>

            <Link className="btn btn-secondary bg-green-500" to={`/alltoys/${toy._id}`}>Update</Link>
        </td>
    </tr>);

    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th></th>
                        <th>Seller</th>
                        <th> Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Update Details</th>

                    </tr>
                </thead>
                <tbody>

                    {toyRows}


                </tbody>

            </table>
        </div>
    );
};

export default MyToys;