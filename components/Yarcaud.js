import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Styles/Chennai.css"


const Yarcaud = () => {
  return (
    <section id='yarcaud'>
        <div className='row'>
            <div className='col' >
                <div className='leftside'>
                <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;08.Yarcaud</h2>
                <div className= "img1">
                <img src={require("../img/Yarcaud.jpeg")} className="img-fluid"
                alt="Yarcaud"
                style={{maxWidth: 'auto', height: '350px' }} />
                </div>
                </div>
            </div>
            <div className='col'>
                <div className='rightside'>
                    <h6>"The Land of Seven Forests."</h6>
                    
                    <p className=''>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Yercaud Tourism Nestled in the Shivaroy Hills of Tamil Nadu, Yercaud is a hill station in the Eastern Ghats steeped in abundant greenery. Commonly called 'Ooty of the Poor', this region has a history dating back to the time of the British. Located at an altitude of 4970 feet, Yercaud is known for its vast expanses of coffee plantations and great weather.
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Yercaud lake is the main point of attraction of the region.One of the many highlights is the summer festival that takes place in May. It is dedicated to Lord Servarayan, the supreme god of the ranges and gives visitors a glimpse into the rich heritage of this region.
                    </p>
                </div>
            </div>
      </div>
      <div className='container'>
        <h3>Must Visit Place In Yercaud</h3>
        <div className='row gy-3'>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/Yarcaud.jpeg")} class="card-img-top" alt="Pagoda Point" />
                    <div class="card-body">
                        <h5 class="card-title">Pagoda Point</h5>
                        <p class="card-text">
                            Located in the eastern part of the Yercaud Hills, Pagoda point is a beautiful viewpoint where one is treated ...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/yercaud1 (2).jpeg")} class="card-img-top" alt="Botanical Garden" />
                    <div class="card-body">
                        <h5 class="card-title">Botanical Garden</h5>
                        <p class="card-text">
                            Any tourist who is interested in gods gift to this planet, the wondrous flora, and in knowing about various...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/yercaud1.(3).jpeg")} class="card-img-top" alt="Emerald Lake" />
                    <div class="card-body">
                        <h5 class="card-title">Emerald Lake</h5>
                        <p class="card-text">
                            The most alluring aspect of Yercaud is its big yet natural lake very popularly known as the Emerald Lake...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/yercaud1 (4).jpeg")} class="card-img-top" alt="Lady,s Seat" />
                    <div class="card-body">
                        <h5 class="card-title">Lady,s Seat</h5>
                        <p class="card-text">
                            Lady's Seat is a viewpoint that overlooks the winding ghat road and offers a spectacular view of Mettur Dam...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Yarcaud
