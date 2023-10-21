import Header from './../Component/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './../Component/Footer/Footer';
import Footer2 from './../Component/Footer/Footer2';

const Root = () => {
    return (
        <div className=' '>
            <Header />
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
            {/* <Footer /> */}
            <Footer2 />
        </div>
    );
};

export default Root;