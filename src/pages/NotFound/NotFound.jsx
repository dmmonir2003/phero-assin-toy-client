import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div>
            <h3 className=" font-extrabold text-center text-7xl mt-40">Page Not Found</h3>
            <Link to='/'><button className="btn btn-link">Back Home Page</button></Link>
        </div>
    );
};

export default NotFound;