import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Styles/Chennai.css"


const Madurai = () => {
  return (
    <section id='madurai'>
        <div className='row'>
            <div className='col' >
                <div className='leftside'>
                <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;07.Madurai</h2>
                <div className= "img1">
                <img src={require("../img/Madurai.jpeg")} height="100px" alt="" className='img-fluid' />
                </div>
                </div>
            </div>
            <div className='col'>
                <div className='rightside'>
                    <h6>"The Lotus City"</h6>
                    
                    <p className=''>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Madurai Tourism Madurai, the cultural capital of Tamil Nadu, is one of the oldest continuously inhabited cities of India. Ruled by Pandya kings for the longest time in its history, it is called as the 'Lotus City' as it was planned and built in the shape of a lotus. Madurai is known for Meenakshi Amman Temple, dedicated to the goddess Meenakshi with a sanctum for her consort, Sundareshwarar.
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; There are many other ancient temples in Madurai, including Thiruparankundram. It is one of the important old temples dedicated to Lord Muruga(Karthikeya) and is located on a hillock approximately 8 km from the city. Having trade ties with ancient Rome, the place holds a great cultural heritage. With bustling bazaars and fantastic street food, Madurai has heritage walks conducted throughout the day.
                    </p>
                </div>
            </div>
      </div>
      <div className='container'>
        <h3>Must Visit Place In Madurai</h3>
        <div className='row gy-3'>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/chennai1.jpeg")} class="card-img-top" alt="Vaigai Dam" />
                    <div class="card-body">
                        <h5 class="card-title">Vaigai Dam</h5>
                        <p class="card-text">
                            Vaigai Dam, a magnificent human-made structure, is constructed over River Vaigai near Andipatti, Then....
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/chennai2.jpeg")} class="card-img-top" alt="Meghamalai" />
                    <div class="card-body">
                        <h5 class="card-title">Meghamalai</h5>
                        <p class="card-text">
                            Often known as the "High Wavy Mountains", Meghamalai is a petit yet beautiful location in the...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/chennai3...jpeg")} class="card-img-top" alt="Marundeeswarar Temple" />
                    <div class="card-body">
                        <h5 class="card-title">Samanar Hills</h5>
                        <p class="card-text">
                            Located in Keelakuyilkudi village near Madurai, Samanar Hills or Samanar Malai is a beautiful hill rock...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/chennai4.jpeg")} class="card-img-top" alt="Thirumalai Nayakar" />
                    <div class="card-body">
                        <h5 class="card-title">Thirumalai Nayakar</h5>
                        <p class="card-text">
                            Thirumalai Nayakar Palace was erected in 1636 AD in the city of Madurai, by King Thirumalai Nayak...
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

export default Madurai