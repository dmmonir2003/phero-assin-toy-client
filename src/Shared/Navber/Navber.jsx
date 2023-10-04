import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';

const Navber = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
    }

    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/alltoys'>All Toys</Link></li>
        <li><Link to='/blog'>Blogs</Link></li>
        {
            user?.email ? <>
                <li><Link to='/myToys'>My Toys</Link></li>
                <li><Link to='/addtoys'>Add A Toys</Link></li>
                <li><Link onClick={handleLogout}>LogOut</Link></li>
            </> :
                <li><Link to='/login'>Login</Link></li>
        }

    </>



    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Arts&Crafts</a>
            </div>
            <div className='navbar-end'>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="m-4">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navber;