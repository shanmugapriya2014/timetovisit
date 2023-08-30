import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Styles/Chennai.css"


const Ooty = () => {
  return (
    <section id='ooty'>
        <div className='row'>
            <div className='col' >
                <div className='leftside'>
                <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;04.Ooty</h2>
                <div className= "img1">
                <img src={require("../img/Ooty.jpeg")} className="img-fluid"
                alt="Ooty"
                style={{maxWidth: 'auto', height: '390px' }}/>
                </div>
                </div>
            </div>
            <div className='col'>
                <div className='rightside'>
                    <h6>“Queen of the Nilgi"</h6>
                    
                    <p className=''>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is
                        a hill station in Tamil Nadu which serves as a top-rated tourist destination.
                        Once regarded as the summer headquarters of the East India Company, the
                        Queen of the hills is a picturesque getaway.
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Nilgiri mountain railway is the steepest track in all of Asia
                        Remember the hit song ‘Chaiyya Chaiyya' where Shahrukh Khan and Malaika
                        Arora matching steps on top of a train? Remember the breathtaking locales
                        as the train chugged its way across lush greenery? Yes, that was the Nilgiri Mountain Railways, and the Nilgiri Mountains all along Dotted with teagardens, serene waterfalls, winding country lanes, and charming colonialarchitecture, Ooty is the perfect respite everyone.
                    </p>
                </div>
            </div>
      </div>
      <div className='container'>
        <h3>Must Visit Place In Ooty</h3>
        <div className='row gy-3'>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/ooty1 (1).jpeg")} class="card-img-top" alt="Nilgiri Mountain Railway" />
                    <div class="card-body">
                        <h5 class="card-title">Nilgiri Mountain Railway</h5>
                        <p class="card-text">
                            Nilgiri Mountain Railway, also
                            known as Toy Train in Ooty, is
                            one of the key attractions of the
                            popular hill..
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/ooty1 (2).jpeg")} class="card-img-top" alt="Ooty Botanical Garden" />
                    <div class="card-body">
                        <h5 class="card-title">Ooty BotanicalGarden</h5>
                        <p class="card-text">
                            Ooty Botanical Gardens lie on
                            the lower slopes of the
                            Doddabetta peak, the
                            Government Botanical...<span className='z'>This is the most importent </span>
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/ooty1 (3).jpeg")} class="card-img-top" alt="Emerald Lake" />
                    <div class="card-body">
                        <h5 class="card-title">Emerald Lake</h5>
                        <p class="card-text">
                            Emerald Lake is situated in
                            Emerald Village, around 20-22
                            kilometres from the main city of
                            Ooty and...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/ooty1 (4).jpeg")} class="card-img-top" alt="Breezy Beach" />
                    <div class="card-body">
                        <h5 class="card-title">Dolphin’s Nose</h5>
                        <p class="card-text">
                            Located about 12 km away
                            from Coonoor is the Dolphins
                            Nose about 1,500 meters above
                            sea level. The tip...
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

export default Ooty