import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Styles/Chennai.css";

const Chennai = () => {
  return (
    <section id='chennai'>
        <div className='row'>
            <div className='col' >
                <div className='leftside'>
                <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;01.Chennai</h2>
                <div className= "img1">
                <img src={require("../img/Chennai.jpeg")}  className="img-fluid"
                alt="Chennai"
                style={{ maxWidth: 'auto', height: 'auto' }} />
                </div>
                </div>
            </div>
            <div className='col'>
                <div className='rightside'>
                    <h6>"The Detroit Of India”</h6>
                    
                    <p className=''>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Formerly known as Madras, Chennai is the capital city of the state of
                    Tamil Nadu, in the southern part of India. Located on the Coromandel coast
                    of Bay of Bengal, Chennai is as dynamic as it is immersed in tradition. This
                    “capital of the south’, is one among the four metropolitan siblings of India,
                    having a rich cultural history which it perfectly balances with its metropolis
                    lifestyle.
                    </p>
                    <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Amid its chaos of traffic and sweltering humid climate, Chennai is
                        worth visiting for its temples steeped in south-Indian culture, British-era
                        museums and monuments, culinary delights and Marina Beach (Second
                        largest urban beach in the world). Chennai's skyline is famous for its towering
                        skyscrapers, but the heart of Chennai has an old-world charm to it that
                        refuses to be overshadowed.
                    </p>
                </div>
            </div>
      </div>
      <div className='container'>
        <h3>Must Visit Place In Chennai</h3>
        <div className='row gy-3'>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/chennai1.jpeg")} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Marina Beach</h5>
                        <p class="card-text">
                            Situated in the city of Chennai
                            in Tamil Nadu, Marina Beach is
                            a natural urban beach along the
                            Bay of Bengal...<span className='z'>This is the most importent </span>
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/chennai2.jpeg")} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">MGR Flim City</h5>
                        <p class="card-text">
                                Having been established in the
                                year 1994, a considerably new
                                structure, the MGR Film ity is
                                managed...<span className='z'>This is the most importent </span>
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/chennai3...jpeg")} class="card-img-top" alt="Marundeeswarar Temple" />
                    <div class="card-body">
                        <h5 class="card-title">Marundeeswarar Temple</h5>
                        <p class="card-text">
                            The magnificent of the 
                            Marundeeswarar Temple, in
                            Tiruvanmiyur, near Chennai has
                            the temple deity Shiva...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/chennai4.jpeg")} class="card-img-top" alt="Breezy Beach" />
                    <div class="card-body">
                        <h5 class="card-title">Breezy Beach</h5>
                        <p class="card-text">
                            Breezy Beach lays in the remote
                            and serene neighbourhood of
                            Valmiki Nagar in Chennai. Being
                            smaller and less polluted...
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

export default Chennai