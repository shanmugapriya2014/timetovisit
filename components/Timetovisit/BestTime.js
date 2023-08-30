import React from 'react'
import BestTimeToVisit from '../../img/Climate.jpeg'
import PillarRocksofKodaikanalSource from '../../img/image1.jpeg'
import ARainyDayinChennaiSource from '../../img/image2.jpeg'
import PechiparaiReservoirinKanyakumariDistrictSource from '../../img/image.jpeg'
import { Row,Col } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import '../../components/Styles/Timetovisit/BestTime.css'


const BestTime = () => {
  return (
        
       <div className='container'>
            <h1 className='primary-heading mt-5'>TAMILNADU TOURISM</h1>
            <br />
            <h2>Best Time To Visit</h2>
            <br />
            
            <Row className="">
                <Col md={6}  className="text-right">
                    <img
                    src={BestTimeToVisit}
                    alt="BestTimeToVisit"
                    className="myImage"  
                    /* style={{ height: '340px' ,width:'550px'}} */
                    />
                    <p className='text-center'>Best Time To Visit</p>
                </Col> 
                <Col md={5} className='ms-5'> 
                    <br />
                    <h1 className='season-heading'>
                    More about Best Time to Travel to Tamil Nadu
                    </h1> 
                    <Accordion defaultActiveKey="0">
                       <Accordion.Item eventKey="0">
                          <Accordion.Header>Tamil Nadu in Summer (March-May)</Accordion.Header>
                          <Accordion.Body className='season-text'>
                             This season begins in March and lasts until May. The temperatures are high, ranging between 35°C and 40°C and so is the humidity especially in the coastal regions. Sightseeing during this time is not very convenient because of the improper temperature. The season, however, is visited to witness the festival of Chithirai held in the Madurai temple in the month of March-April. Puthandu, another important festival that marks the Tamil New year falls in mid-April and Mahamahan Festival is celebrated in March (celebrated once in 12 years). If visiting during summer, it is a good idea to visit the attractions on higher attitudes. Hill stations like Ooty, Kodaikanal and Yelagiri hills are the best where the temperature is pleasant and has scenic views that tourists can witness.
                             <img 
                                 src={PillarRocksofKodaikanalSource} 
                                 alt="Pillar Rocks of Kodaikanal Source" 
                                 className='season-img'
                             />
                             <p className='me-5'>
                                 Pillar Rocks of KodaikanalSource
                             </p>
                          </Accordion.Body>
                       </Accordion.Item>
                       <Accordion.Item eventKey="1">
                          <Accordion.Header>Tamil Nadu in Monsoon (june-September)</Accordion.Header>
                          <Accordion.Body className='season-text'>
                             This southern state sees monsoon two times a year - once between June to September and the retreating monsoon in November and December. The temperature is slightly less than what it is in the summer season. It ranges between 25°C and 30°C. The rains often occur in long spells and the humidity during this time is high especially in coastal regions. Some of the hilly areas see massive rainfall and venturing out during this time around is not a great idea. The Eastern seaboard of Tamil Nadu sometimes experiences cyclones during the late monsoon, making it an unsafe place to visit.
                             <img 
                                 src={ARainyDayinChennaiSource} 
                                 alt="Pillar Rocks of KodaikanalSource" 
                                 className='season-img'
                             />
                             <p className=''>
                                 A Rainy Day in Chennai Source
                             </p>
                          </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                          <Accordion.Header>Tamil Nadu in Winter (October-February)</Accordion.Header>
                          <Accordion.Body className='season-text'>
                             Winter in Tamil Nadu begins in October and lasts until February. November and December have intermittent rainfall because of the retreating monsoon, but otherwise, the temperature remains between 10°C and 15°C. The humidity is low, and it is the best climate for sightseeing and touring the cities. Most of the tourist attractions are bustling with activities during this season. The beaches call the beach lovers, and adventure seekers for bathing in the sun, swimming and water sports as the temperature remains moderate all through the day.
                             <img 
                                 src={PechiparaiReservoirinKanyakumariDistrictSource} 
                                 alt="Pechiparai Reservoir in Kanyakumari District Source" 
                                 className='season-img'
                             />
                             <p className='fix'>
                                 Pechiparai Reservoir in Kanyakumari District Source
                             </p>
                          </Accordion.Body>
                      </Accordion.Item>
                   </Accordion>
                </Col> 
          </Row>
          <p className='season-text'>
            The best time to visit Tamil Nadu is during the winter season, Le from November to February when the temperature is relatively low and pleasant to explore the attractions in the state. Monsoons bring torrential downpour which makes it an inappropriate time to travel through Tamil Nadia Summer however, is perfect for exploring the hills stations. Tourists can pick the region they wish to see according to the season because offseason visits could be extremely inconvenient for some.
          </p>
        </div>
        
    )
}

export default BestTime
