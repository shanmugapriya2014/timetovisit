import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../components/Styles/Chennai.css"

const Hogenakkal = () => {
  return (
    <section id='hogenakkal'>
        <div className='row'>
            <div className='col' >
                <div className='leftside'>
                <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.Hogenakkal</h2>
                <div className= "img1">
                <img src={require("../img/Hogenakkal.jpeg")} className="img-fluid"
                alt="Theni"
                style={{maxWidth: 'auto', height: '389px'}}/>
                </div>
                </div>
            </div>
            <div className='col'>
                <div className='rightside'>
                    <h6>“The one that will take your breath away"</h6>
                    
                    <p className=''>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hogenakkal Tourism Hogenakkal is a waterfall located in Dharmapuri
                        district of Tamil Nadu where the Kaveri river splits into multiple streams of waterfalls, Located at a distance of 180 km from Bangalore, Hogenakkal has water throughout the year. The carbonite rocks, the coracle (basket boat) tides, freshwater fish, oil massages by locals make it a perfect one day trip or a weekend getaway from Bangalore.
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sometimes referred to as the “Niagara Falls of India," it is also known
                        for the medicinal baths. Also known at Marikottayam, Hoge actually means
                        smoke and Kal means rock. Recently, the place has been found to be littered with plastic bags and garbage and the fish market outside the waterfall might stink. Weekends can be crowded. Keep all these points in mind before visiting.
                    </p>
                </div>
            </div>
      </div>
      <div className='container'>
        <h3>Must Visit Place In Hogenakkal</h3>
        <div className='row gy-3'>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/hogenakkal1.jpeg")} class="card-img-top" alt="Theerthamalai Temple" />
                    <div class="card-body">
                        <h5 class="card-title">Theerthamalai Temple</h5>
                        <p class="card-text">
                            Theerthamalai Temple Theerthamalai is a popular pilgrim centre close to
                            Hogenakkal. One of its most popular destinations is the...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/hogenakkal2..jpeg")} class="card-img-top" alt="Hogenakkal Falls" />
                    <div class="card-body">
                        <h5 class="card-title">Hogenakkal Falls</h5>
                        <p class="card-text">
                             Hogenakkal Falls is a scintillating waterfall that is located on river Kaveri in the Dharmapuri district of...<span className='z'>This is the most importent </span>
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/hogenakkal3.jpeg")} class="card-img-top" alt="Pennagram Village" />
                    <div class="card-body">
                        <h5 class="card-title">Pennagram Village</h5>
                        <p class="card-text">
                            The village is located about 20 km away from Hogenakkal and is famous for its weekly fair that it holds every...<span className='z'>This is the most importent </span>
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/hokenakkal4..jpeg")} class="card-img-top" alt="Mettur Dam" />
                    <div class="card-body">
                        <h5 class="card-title">Mettur Dam</h5>
                        <p class="card-text">
                            Mettur Dam, situated 30 miles from Salem in a small Mettur Village, is one of the largest dams in India. Built...<span className='z'>This is the most importent </span>
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

export default Hogenakkal