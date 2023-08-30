import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Styles/Rameshwaram.css"


const Rameswaram = () => {
  return (
    <section id='rameswaram'>
        <div className='row'>
            <div className='col' >
                <div className='leftside'>
                <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;02.Rameswaram</h2>
                <div className= "img1">
                <img src={require("../img/Rameshwaran.jpeg")} alt="" className='img-fluid' />
                </div>
                </div>
            </div>
            <div className='col'>
                <div className='rightside'>
                    <h6>“The Bridge on the Indian Ocean"</h6>
                    
                    <p className=''>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rameshwaram is located on a beautiful island in the South Indian
                    state of Tamil Nadu. It is separated by a small Pamban channel from Sri
                    Lanka. According to Hindu mythology, this is the place where Lord Rama
                    created a bridge across the sea to Sri Lanka
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Renowned for its magnificent prakaras with massive sculptured
                        pillars on either side, The Ramanathaswamy Temple houses the longest
                        corridor in the world. Agniteertham is famous for its sacred waters and
                        Pilgrims perform poojas in honour of their ancestors at this seashore. The
                        five-faced Hanuman Temple holds the floating stone which was used to build
                        the bridge between India and Sri Lanka. Rameshwaram has the first sea
                        bridge connecting the town of Mandapam with Pamban Island, and
                        Rameswaram.
                    </p>
                </div>
            </div>
      </div>
      <div className='container'>
        <h3>Must Visit Place In Rameshwaram</h3>
        <div className='row gy-3'>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/rameshwarem1.jpeg")} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Dhanushkodi Temple</h5>
                        <p class="card-text">
                            Dhanushkodi was until a few years ago a wonderful temple on the southern tip of India.However, due to a...
                            <span className='z'>This is the most importent </span>
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/rameshwarem1 (5).jpeg")} class="card-img-top" alt="Lakshmana Temple" />
                    <div class="card-body">
                        <h5 class="card-title">Lakshmana Temple</h5>
                        <p class="card-text">
                            Lakshmana Tirtham had been constructed in the loving memory Lord Lakshman, brother of Lord Rama. In order...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/Rameshwaram3..jpeg")} class="card-img-top" alt="Rameshwaram Temple" />
                    <div class="card-body">
                        <h5 class="card-title">Rameshwaram Temple</h5>
                        <p class="card-text">
                            A perfect blend of mind-boggling architecture and spiritual significance,Rameshwaram Temple, also...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/rameshwarem1 (6).jpeg")} class="card-img-top" alt="Villoondi Tirtham" />
                    <div class="card-body">
                        <h5 class="card-title">Villoondi Tirtham</h5>
                        <p class="card-text">
                            Villoondi Tirtham is a beach
                            which is also considered a
                            sacred natural water body and a
                            favourite amongst tourists...
                            <span className='z'>Most Visited </span>
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

export default Rameswaram
