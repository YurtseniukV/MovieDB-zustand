import {Link} from "react-router-dom";


const MenuComponent = () => {
    return (
        <div>
            <ul className="bg-blue-500 text-white p-4">
                <li><Link to={'/'}>Home Page</Link></li>
                <li><Link to={'/cart'}>Cart Page</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;