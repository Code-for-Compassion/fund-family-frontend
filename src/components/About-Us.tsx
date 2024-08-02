import instagram from '../assets/socials/instagram.svg';
import tiktok from '../assets/socials/tiktok.svg';
import facebook from '../assets/socials/facebook.svg';

// import triSlice from './assets/triSlice.svg';

function About() {


  return (
<div>
    <p>
We are a diverse and intercultural group gathered around a common desire for reparations. We are a collective that operates on transparent, horizontal leadership and we will support synergies with other groups sharing similar goals.

We contribute our skills, energy, love and network to fundraise for Palestinian and Sudanese refugees located in Cairo & countries of origin to rebuild their lives.

Through our on the ground team of trusted volunteers we support families with urgent needs whether living, medical, or emotional.  
  </p>

  <div className='socials'>
    <a href="https://www.instagram.com/slice_ofhope/"><img src={instagram}></img></a>
    <a href="http://www.facebook.com"><img src={facebook}></img></a>
    <a href="https://www.tiktok.com/@slice_ofhope"><img src={tiktok}></img></a>
  </div>
  </div>
    )}

export default About