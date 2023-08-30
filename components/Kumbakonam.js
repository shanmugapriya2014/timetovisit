import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Styles/Kodaikanal.css"


const Kodaikanal = () => {
  return (
    <section id='kodaikanal'>
        <div className='row'>
            <div className='col'>
                <div className='leftside'>
                <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;03.Kodaikanal</h2>
                <div className= "img1">
                <img src={require("../img/Kodaikanal.jpeg")}  className="img-fluid"
                alt="Kodaikanal"
                style={{ maxWidth: 'auto', height: '430px' }} />
                </div>
                </div>
            </div>
            <div className='col'>
                <div className='rightside'>
                    <h6>“The Princess of Hill Stations”</h6>
                    
                    <p className=''>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kodaikanal Tourism Located in the state of Tamil Nadu, Kodaikanal is
                        one of the most famous honeymoon destinations in India. A Lakeside resort
                        town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered
                        manicured cliffs and waterfall that come together to create the ideal setting
                        for a perfect getaway. Kodaikanal means ‘the gift of the forests’.
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nestled amidst the rolling slopes of the Palani Hills, Kodaikanal
                        stands at an altitude of 7200 feet above sea level, and once you visit this hill
                        station, you will find that every bit of what you have imagined it to be is real.
                        Kodaikanal is a place you can go to take a break from the rigours of daily city
                        life, and this hill station lets you sit back and connect with nature as you head
                        out on biking or trekking trails or take a stroll through the vast forests
                        surrounding the town.
                    </p>
                </div>
            </div>
      </div>
      <div className='container'>
        <h3>Must Visit Place In Kodaikanal</h3>
        <div className='row gy-3'>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/kodaikanal1....jpeg")} class="card-img-top" alt="Green Valley View" />
                    <div class="card-body">
                        <h5 class="card-title">Green Valley View</h5>
                        <p class="card-text">
                            Formerly known as Suicide
                            point, the Green Valley View
                            offers a breathtaking view of
                            the plains, deep...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/kodaikanal2.jpeg")} class="card-img-top" alt="Kodai Lake" />
                    <div class="card-body">
                        <h5 class="card-title">Kodai Lake</h5>
                        <p class="card-text">
                            Kodaikanal Lake is a manmade
                            lake in the Kodaikanal city
                            which is also known as Kodai
                            Lake. Vera...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/kodaikanal3..jpeg")} class="card-img-top" alt="Bear Shola Falls" />
                    <div class="card-body">
                        <h5 class="card-title">Bear Shola Falls</h5>
                        <p class="card-text">
                            Located at a mere distance of 2
                            kilometres from the Kodaikanal
                            Lake, the Bear Shola Falls is a
                            popular...
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div class="card">
                    <img src={require("../img/kodaikanal4.jpeg")} class="card-img-top" alt="Breezy Beach" />
                    <div class="card-body">
                        <h5 class="card-title">Pillar Rocks</h5>
                        <p class="card-text">
                            Situated in the ‘Princess of Hill
                            stations’, Kodaikanal, the Pillar
                            Rocks have become a lovely
                            picnic...
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

export default Kodaikanal
