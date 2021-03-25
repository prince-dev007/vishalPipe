import Header from '../Header/Header'
import Tube from '../assests/img/Steel-Tubes-Pipes.jpeg';
import Tubular from '../assests/img/Tubular-Steel.jpeg';
import Polymers from '../assests/img/Polymers-Pipes.jpeg'
import './order.css'
function NewOrder(){
    return(
        <>
            <Header/>
            <div class="container-fluid mt-5" id="order1">
        <div class="container">
            <h1>OUR <span>PRODUCTS RANGE</span></h1>
            <p class="mt-3">No wonder they are the soul of any constructions and industrial infrastructure! Think about aforesaid sectors; think of <span>VISHAL PIPES LTD.</span></p>
            <div class="row mt-4">
                <div class="col-lg-4">
                    <div class="card ">
                        <img src={Tube} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">STELLS TUBES</h5>
                            <p class="card-text">Stells tubes for use in water,gas and air lines.
                                of the card's content.</p>
                            <a href="#Vishal" class="btn ">View Products</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <img src={Tubular} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">STELLS POLES</h5>
                            <p class="card-text">Stells tubes for use in water and sewages.
                                of the card's content.</p>
                                <a href="#Vishal" class="btn ">View Products</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <img src={Polymers} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">POLYMER PIPES</h5>
                            <p class="card-text">Stells tubes for use in water wells
                                of the card's content.</p>
                                <a href="#Vishal" class="btn ">View Products</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
        </>
    )
}
export default NewOrder;