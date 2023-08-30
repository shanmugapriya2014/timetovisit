import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Styles/Chennai.css"


const Theni = () => {
  return (
    <section id='theni'>
        <div className='row'>
            <div className='col' >
                <div className='leftside'>
                <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09.Theni</h2>
                <div className= "img1">
                <img src={require("../img/Theni.jpeg")} className="img-fluid"
                alt="Theni"
                style={{maxWidth: 'auto', height: '410px' }} />
                </div>
                </div>
            </div>
            <div className='col'>
                <div className='rightside'>
                    <h6>"A little hamlet in Tamil Nadu”</h6>
                    
                    <p className=''>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Theni Tourism Dotted by luscious patches of greenery and beautiful
                        waterfalls, Theni is a little hamlet on the Western Ghats. The topography of Theni mainly consists of hills and ranges. It has plenty of rivers and dams and is an abode to 27 forests hence filled with unparalleled greenery.
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; There temples like Kamatchi Amman Temple, Vellappar Temple, and
                        Balasubramanya Temple which are brimming with devotees from all around
                        the country throughout the year. The vibrant local markets of Theni are
                        shoppers’ paradise. The local handloom products and agricultural products
                        are the best buys at these markets. The aroma filled tea estates in Theni are a paradise. The Kolukkamalai Tea estate is often deemed to be the world's highest organic tea estate. The Suruli Falls and the Kumbakarai Falls are the crown jewels of Theni.
                    </p>
                </div>
            </div>
      </div>
      <div className='container'>
        <h3>Must Visit Place In Theni</h3>
        <div className='row gy-3'>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/theni1.(1).jpeg")} class="card-img-top" alt="Chinna Suruli Falls" />
                    <div class="card-body">
                        <h5 class="card-title">Chinna Suruli Falls</h5>
                        <p class="card-text">
                            Located in the lap of wild, green
                            forests, Chinna Suruli Falls is a
                            destination to visit
                            from Theni...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/theni1 (2).jpeg")} class="card-img-top" alt="Kumbakkarai Falls" />
                    <div class="card-body">
                        <h5 class="card-title">Kumbakkarai Falls</h5>
                        <p class="card-text">
                            Located in Dindigul district near
                            Theni in Tamil Nadu,
                            Kumbakkarai Falls is a
                            mesmerising waterfall that...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/theni1.(3).jpeg")} class="card-img-top" alt="Meghamalai" />
                    <div class="card-body">
                        <h5 class="card-title">Meghamalai</h5>
                        <p class="card-text">
                            Tucked within the Western
                            Ghats of Tamil Nadu,
                            Meghamalai in Theni district is
                            the kind of hidden paradise...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/theni1.(4).jpeg")} class="card-img-top" alt="Suruli Falls" />
                    <div class="card-body">
                        <h5 class="card-title">Suruli Falls</h5>
                        <p class="card-text">
                            Suruli Falls is a beautiful
                            waterfall in the Theni district of
                            Tamil Nadu and one of the
                            major tourist attractions of...
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

export default Theni
