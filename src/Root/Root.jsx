import Header from './../Component/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './../Component/Footer/Footer';

const Root = () => {
    return (
        <div className='bg-slate-100 '>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;