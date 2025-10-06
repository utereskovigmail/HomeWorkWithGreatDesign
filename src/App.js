import {Routes, Route, Link, NavLink} from "react-router-dom";
import './App.css';
// import {NavLink} from "react-router-dom"
import MainLayout from "./pages/Layouts/MainLayout";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contacts';
import AdminMain from './pages/AdminMain';
import AdminMenu from './pages/Layouts/AdminMenu';

function App() {
    return (
        <Routes>
            {/* Усі звичайні сторінки під Layout з хедером */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
            </Route>

            {/* Сторінка(и) без хедера */}
            <Route element={<AdminMenu />}>
                <Route path="/admin" element={<AdminMain />} />
            </Route>


            {/*/!* 404 *!/*/}
            {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
    );
}

export default App;
