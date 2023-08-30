import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Styles/Chennai.css"


const Kanyakumari = () => {
  return (
    <section id='kanyakumari'>
        <div className='row'>
            <div className='col' >
                <div className='leftside'>
                <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;05.Kanyakumari</h2>
                <div className= "img1">
                <img src={require("../img/Kanyakumari.jpeg")} height="100px" alt="" className='img-fluid' />
                </div>
                </div>
            </div>
            <div className='col'>
                <div className='rightside'>
                    <h6>“Cape Comorin or The Land's End"</h6>
                    
                    <p className=''>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kanyakumari Tourism Bordered by the three seas - Arabian, Indian
                        and the Bay of Bengal, Kanyakumari is the southernmost tip of the Indian
                        Peninsula. A small coastal town in the state of Tamil Nadu, Kanyakumari was earlier known as Cape Comorin.
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kanyakumari offers the marvellous confluence of the Bay of Bengal,
                        the Arabian Sea and the Indian ocean meeting together at a point. But, this isnot a miracle, the miracle lies in the beauty that the water of three seas does not mix, you can clearly distinguish between the turquoise blue, deep blue and sea green waters of the three seas. To enjoy the best view of sunset and sunrise, you can visit the Triveni Sangam point and the famous View tower The town has a mountainous terrain with elevated patches of hills, coconut trees and lined with paddy fields.
                    </p>
                </div>
            </div>
      </div>
      <div className='container'>
        <h3>Must Visit Place In Kanyakumari</h3>
        <div className='row gy-3'>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/kanyakumari1 (1).jpeg")} class="card-img-top" alt="Kanyakumari Beach" />
                    <div class="card-body">
                        <h5 class="card-title">Kanyakumari Beach</h5>
                        <p class="card-text">
                            Located in the southernmost
                            part of India, Kanyakumari
                            beach with ts beautiful hue-
                            changing beaches...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/kanyakumari1.(2).jpeg")} class="card-img-top" alt="Vivekananda Memorial" />
                    <div class="card-body">
                        <h5 class="card-title">Vivekananda Memorial</h5>
                        <p class="card-text">
                            ‘The magnificent Vivekananda
                            Rock Memorial is located on a
                            small island off Kanyakumari. It
                            has the picturesque...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/kanyakumari1.(3).jpeg")} class="card-img-top" alt="Marundeeswarar Temple" />
                    <div class="card-body">
                        <h5 class="card-title">Thiruvalluvar Status</h5>
                        <p class="card-text">
                            Dedicated to the accomplished
                            philosopher and poet
                            Thiruvalluvar, this beautiful
                            statue finds itself...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/kanyakumari1 (4).jpeg")} class="card-img-top" alt="Thirparappu Falls" />
                    <div class="card-body">
                        <h5 class="card-title">Thirparappu Falls</h5>
                        <p class="card-text">
                            Located at a distance of about
                            55 kilometers from
                            Kanyakumari, the cascading
                            waters of the Thirparappu..
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

export default Kanyakumari
