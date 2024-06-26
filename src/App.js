import './App.css';
import mazpic from './assets/maz.jpg'
import aboutMePic from './assets/mazaboutme.png'
import emailIcon from './assets/email-icon.png'
import linkedInIcon from './assets/linkedIn.png'
import instagramIcon from './assets/instrgam.webp'
import { useState } from 'react';

function App() {
  const [exp1, setExp1] = useState(true)
  const [exp2, setExp2] = useState(false)
  const [exp3, setExp3] = useState(false)

  const toggleExp1 = ()=>{
    if(exp1 === false){
      setExp1(!exp1)
      setExp2(false);
      setExp3(false);
    }
  }

  const toggleExp2 = ()=>{
    if(exp2 === false){
      setExp2(!exp2)
      setExp1(false);
      setExp3(false);
    }
  }

  const toggleExp3 = ()=>{
    if(exp3 === false){
      setExp3(!exp3)
      setExp1(false);
      setExp2(false);
    }
  }

  return (
    <div id='body' className='bg-bgGrain'>
        <nav className='sticky top-0 flex justify-between h-[100px] bg-black bg-opacity-25 '>
          <div id='logo-container' className='flex items-center ml-20'>
            <span id='logo' className='font-shadows font-semibold text-4xl text-white'>MC</span>
          </div>

          <div id='nav-links-container' className='flex items-center justify-between mr-20 w-[400px]'>
            <a href='#profile'><h1 id='nav-links' className='text-white text-lg font-exo'>PROFILE</h1></a>
            <a href='#about'><h1 id='nav-links' className='text-white text-lg font-exo'>ABOUT</h1></a>
            <a href='#experience'><h1 id='nav-links' className='text-white text-lg font-exo'>EXPERIENCE</h1></a>
            <a href='#contact-me'><h1 id='nav-links' className='text-white text-lg font-exo'>CONTACT</h1></a>
          </div>
        </nav>

      <section id='profile' className='bg-bgGrain flex justify-center h-screen'>
        
          <div id='profile-pic-container' className='flex justify-center items-center w-1/3'>
            <img src={mazpic} alt='' className='rounded-[100px]'/>
          </div>

          <div id='headline-container' className='flex flex-col justify-center items-center w-1/2'>
            <p className='font-exo text-[18px] text-white'>Hello, I'm</p>
            <h1 id='name' className='font-bold font-josefin text-[55px] text-sand '>Mazvita Chikava</h1>
            <h1 id='title' className='font-exo font-semibold text-[28px] text-seashell'>Social Media Marketing</h1>

            <div id='profile-btn-container' className='flex w-[350px] justify-around mt-5'>
              <button id='resume-btn' className=' bg-transparent border text-sand border-terracota hover:bg-terracota  duration-500 rounded-full p-4 font-bold font-exo'>Download CV</button>
              <button id='contact-btn' className='bg-terracota border border-orange-700 hover:bg-orange-700 duration-500 rounded-full p-4 text-sand font-bold font-exo'>Contact Info</button>
            </div>
          </div>

        
      </section>

      <section id='about' className='flex flex-col h-screen'>
        <div className='flex flex-col items-center'>
          <p id='section-preheader' className='font-exo text-seashell text-center text-[18px]'>Get to know more</p>
          <h1 id='section-header' className='font-josefin text-sand text-center text-[55px] font-bold'>About Me</h1>
        </div>

        <div className='flex justify-center items-center h-full'>
          <div id='about-pic' className='flex mr-8'>
            <img src={aboutMePic} alt='' className='h-[450px] w-[600px] rounded-full'/>
          </div>
          <div id='aboutme-content-container' className='flex flex-col h-[450px] w-1/2 ml-8'>
            <p className='m-3 text-seashell font-exo text-[18px]'>I'm Mazvita , but most people in my life call me Maz! I am a plant obsessed, puzzle loving social marketer who bases her life's philosophy on nurturing creativity, positive interactions and growth.
            </p>

            <p className='m-3 text-seashell font-shadows text-[22px]'>I received my undergraduate degree  in Psychology from Seattle Pacific University and I’m a self-taught creative who hails from the Sunshine City, Harare, in Zimbabwe. I’m heavily influenced by the delicate yet profound nuances that are embedded within different
            </p>

            <p className='m-3 text-seashell font-marker text-[18px]'>cultures like patterns, historic writings, graphic symbols and colour as a form of visual and global communication.
            </p>

          </div>
        </div>

      </section>

      <section id='experience' className='flex flex-col h-screen'>
        <div className='flex flex-col items-center'>
          <p id='section-preheader' className='font-expo text-seashell text-center text-[18px]'>Explore my</p>
          <h1 id='section-header' className='font-josefin text-sand text-center text-[50px] font-bold'>Experience</h1>
        </div>

        <div id='experience-slides' className='flex flex-col h-full'>
        <div id='experience-links-container' className='flex justify-center'>
            <h1 className={exp1 ? 'text-terracota font-exo  mx-12 text-[25px]' : 'font-exo mx-12 text-[25px] text-seashell cursor-pointer hover:text-terracota hover:decoration-terracota hover:underline , underline-offset-[15px] duration-500'}
                onClick={e => toggleExp1()}
            >Content Creation</h1>
            <h1 className={exp2 ? 'text-terracota font-exo underline underline-offset-[15px] mx-12 text-[25px]' : 'font-exo mx-12 text-[25px] text-seashell cursor-pointer hover:underline hover:underline-offset-[15px] hover:decoration-terracota'}
                onClick={e => toggleExp2()}
            >Social Media Management & Growth</h1>
            <h1 className={exp3 ? 'text-seashell font-exo underline decoration-terracota underline-offset-[15px] mx-12 text-[25px]' : 'font-exo mx-12 text-[25px] text-seashell cursor-pointer hover:text-terracota'}
                onClick={e => toggleExp3()}
            >Design</h1>
        </div>
        <div className='flex w-full justify-center'>
          <div id='content-creation-experience' className='flex flex-wrap w-[850px] mt-[40px]'>
            <p id='exp1' className={exp1 ? 'text-seashell text-[18px]' : 'hidden'}>
              End-to-End Magic: Mastering the Full Content Creation Process
              From the initial spark of an idea to its final polished release, I excel in every stage of the content creation journey. My hands-on approach ensures a deep connection to the work, fostering creativity and attention to detail.

              I have a proven track record of producing quality still and video assets, coupled with the strategic development of social media calendars and scheduling. This combination guarantees a consistent and engaging brand presence across all platforms. My holistic involvement in content creation not only enhances the quality of the output but also drives impactful marketing results.
            </p>

            <p id='exp1' className={exp2 ? 'text-seashell text-[18px]' : 'hidden'}>
              For Tansy, a Black woman-owned plant nursery and gift shop, I developed and executed social media strategies that boosted engagement, reach, and conversions. This approach significantly enhanced Tansy's online presence, driving greater visibility and sales.
            </p>

            <p id='exp1' className={exp3 ? 'text-seashell text-[18px]' : 'hidden'}>
              I've created compelling graphic and video content for various clients, as well as some exciting personal projects. This work showcases my versatility and creativity in visual storytelling.
            </p>
          </div>
        </div>
        </div>
      </section>

      <section id='contact-me' className='flex flex-col h-[60vh]'>
        <div className='flex flex-col items-center'>
          <p id='section-preheader' className='font-exo text-seashell text-center text-[18px]'>Get in Touch</p>
          <h1 id='section-header' className='font-josefin text-sand text-center text-[50px] font-bold'>Contact Me</h1>
        </div>
        <div id='contact-container' className='flex justify-center'>
          <div id='contact-links-container' className='flex flex-col justify-center items-center h-[30vh] border border-terracota rounded-2xl w-[60vh]'>

            <div id='border-container' className='flex flex-col items-start w1/2'>
              <div id='email' className='flex flex-row m-[10px]'>
                <img src={emailIcon} alt='' className='flex h-[30px] mr-[10px]'/>
                <p className='flex font-exo text-seashell hover:text-terracota hover:underline hover:underline-offset-[15px] duration-500 text-2xl'><a href="mailto:Chikavamazvita@gmail.com">Chikavamazvita@gmail.com</a> </p>
              </div>

              <div id='linkedIn' className='flex flex-row m-[10px]'>
                  <img src={linkedInIcon} alt='' className='flex h-[30px] mr-[10px]'/>
                  <p className='flex font-exo text-seashell hover:text-terracota hover:underline hover:underline-offset-[15px] duration-500 text-2xl'><a href='https://www.linkedin.com/in/mazvitachikava/'>LinkedIn</a></p>
              </div>

              <div id='Instagram' className='flex flex-row m-[10px]'>
                  <img src={instagramIcon} alt='' className='flex h-[30px] mr-[10px]'/>
                  <p className='flex font-exo text-seashell hover:text-terracota hover:underline hover:underline-offset-[15px] duration-500 text-2xl'><a href='https://www.instagram.com/mazvitajoy_/'>Instagram</a> </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <p className='text-center text-seashell'>Copyright © 2024 Mazvita Chikava. All Rights Reserved.</p>
    </div>
  );
}

export default App;
