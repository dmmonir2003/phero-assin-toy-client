import { Link, useLoaderData } from "react-router-dom";


const AllToy = () => {

    const allToys = useLoaderData();

    const toyRows = allToys.map((toy, index) => <tr key={toy._id}>
        <th>{index + 1}</th>
        <td>{toy.sellerName}</td>
        <td>{toy.toyName}</td>
        <td>{toy.subcategory}</td>
        <td>{toy.price}</td>
        <td>{toy.quantity}</td>
        <td>

            <Link className="btn btn-secondary bg-green-500" to={`/toy-details/${toy._id}`}>View Details</Link>
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
                        <th>View Details</th>

                    </tr>
                </thead>
                <tbody>

                    {toyRows}


                </tbody>

            </table>
        </div>
    );
};

export default AllToy;