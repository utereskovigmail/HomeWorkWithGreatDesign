import { Outlet, NavLink } from "react-router-dom";

export default function MainLayout() {
    return (
        <div>
            <nav className="flex flex-row w-full px-4 justify-center items-center bg-blue-400 text-white py-8 gap-4 rounded-b-xl sticky top-0 z-10">
                <NavLink to="/" className={({isActive}) => isActive ? "text-xl underline font-bold" : "text-xl hover:underline"}>Головна</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? "text-xl underline font-bold" : "text-xl hover:underline"}>Про нас</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? "text-xl underline font-bold" : "text-xl hover:underline"}>Контакти</NavLink>
            </nav>

            <Outlet />
        </div>
    );
}
