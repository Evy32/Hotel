

import Productos from './productos/productos';
import './home.css';

const Home = () => {
    return (
        <>
                    <div className='productCard'>
                        <h2 id='productos'>Productos</h2>
                        <div className='productContainer'>
                            <Productos />
                        </div>
                    </div>
        </>
    )
}
export default Home;