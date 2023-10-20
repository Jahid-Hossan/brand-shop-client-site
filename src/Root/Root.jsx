import Header from './../Component/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './../Component/Footer/Footer';

const Root = () => {
    return (
        <div className=' '>
            <Header />
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default Root;