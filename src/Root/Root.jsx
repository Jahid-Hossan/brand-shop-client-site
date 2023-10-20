import Header from './../Component/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './../Component/Footer/Footer';
import Header2 from '../Component/Header/Header2';

const Root = () => {
    return (
        <div className=' '>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;