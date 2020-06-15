import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/bba-image.jpg';

import Footer from '../components/Footer';



const Home = () => {
    return (
        <div className='content'>
            <h1>HOME</h1>

            <section className='dayCount'>
                <p>  days since BBA 2019-2020 Season</p>
            </section>

            <div className='announcements'>
                <h2>Recent Announcements</h2>

                <div>
                <h3>BBA 2019-20 Season Begins 10/13/19 </h3>
                On 10/13/19, the 2019-20 BBA season will begin. 
                Everyone needs to be at MMTSC at 4:45pm. Commissioner James Hong will be going over the 
                league expectations and the purpose of BBA. Please let your captain know ASAP if you cannot attend. 
                Games this season will be at 5pm and 6pm. Location:The MMTSC14522 Myford RdIrvine, CA 92606
                </div>

                <div>
                <h3>BBA 2019-20 Sign Ups</h3>
                If you haven't signed up, please email jameshong@bereancc.com before 
                Wednesday 10/1. Sign Ups so far (Updated 9/30/19) 1 Michael Chang 2 Matthew Chen 3 Sean Chen 
                4 Alex Chiang 5 Andy Chiu 6 Sam Cho 7 Chris Choi 8 Jason Choi 9 Andrew Chong 10 Matt Chong 11 
                Bryon Chu 12 Michael Chu 13 Joshua Chun 14 Isaac Chung 15 Garrett Cliser 16 Mathew Esporas 17 
                Eric Fang 18 Chris Fangre 19 Dustin Fong 20 Tyson Fong 21 Victor Fu 22 Aaron Go 23 Caleb Guan 
                24 Timothy Huang 25 Timothy Iwamoto 26 Joe Jun 27 Brian Kim 28 Hubert Kim 29 Jeremy Kim 30 
                Jonathan Kim 31 Matt Kim 32 Mitchell Kim 33 ...
                </div>

                <div>
                <h3>10/7/18 - BBA Games delayed 1 hour </h3>
                MMTSC scheduled a tournament for 10/7 so BBA games 
                will be at 5pm and 6pm (instead of 4 and 5).Please be there 15 minutes before the start 
                of your game to pray with a brother from the opposing team.
                </div>

                <div><Link to='/news'>View More</Link></div>
            </div>

            <div className='location'>
                <div>
                    <div style={{width: "45%"}}><iframe width="100%" height="400" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=14522%20Myford%20RdIrvine%2C%20CA%2092606+(Your%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" 
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.mapsdirections.info/en/measure-map-radius/">Map radius measure</a></iframe></div>
                    <br />
                </div>

                <div>
                    <img src={image1} alt='image of basketball location' width='400' height='400'></img>
                </div>
            </div>


            <div className='video'>
            </div>


            <Footer/>
      </div>
    );
}

export default Home;
