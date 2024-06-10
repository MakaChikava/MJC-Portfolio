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
    if(exp1 == false){
      setExp1(!exp1)
      setExp2(false);
      setExp3(false);
    }
  }

  const toggleExp2 = ()=>{
    if(exp2 == false){
      setExp2(!exp2)
      setExp1(false);
      setExp3(false);
    }
  }

  const toggleExp3 = ()=>{
    if(exp3 == false){
      setExp3(!exp3)
      setExp1(false);
      setExp2(false);
    }
  }

  return (
    <div id='body'>
      <nav className='flex justify-between h-[80px] bg-black drop-shadow-xl'>
        <div id='logo-container' className='flex items-center ml-4'>
          <span id='logo' className='font-semibold text-white'>Mazvita Chikava</span>
        </div>

        <div id='nav-links-container' className='flex items-center justify-between mr-4 w-[300px]'>
          <h1 id='nav-links' className='text-white'>Profile</h1>
          <h1 id='nav-links' className='text-white'>About</h1>
          <h1 id='nav-links' className='text-white'>Experience</h1>
          <h1 id='nav-links' className='text-white'>Contact</h1>
        </div>
      </nav>

      <section id='profile' className='flex justify-center h-screen'>
        
          <div id='profile-pic-container' className='flex justify-center items-center w-1/3'>
            <img src={mazpic} className='rounded-[100px]'/>
          </div>

          <div id='headline-container' className='flex flex-col justify-center items-center w-1/3'>
            <p className='font-semibold text-[18px] text-gray-600'>Hello, I'm</p>
            <h1 id='name' className='font-bold text-[50px]'>Mazvita Chikava</h1>
            <h1 id='title' className='font-semibold text-[30px] text-gray-500'>Social Media Marketing</h1>

            <div id='profile-btn-container' className='flex w-[350px] justify-around mt-5'>
              <button id='resume-btn' className='bg-gray-200 hover:bg-black rounded-full p-4 text-white font-bold '>Download CV</button>
              <button id='contact-btn' className='bg-black rounded-full p-4 text-white font-bold'>Contact Info</button>
            </div>
          </div>

        
      </section>
      <section id='about' className='flex flex-col h-screen'>
        <div className='flex flex-col items-center'>
          <p id='section-preheader' className='text-center text-[18px]'>Get to know more</p>
          <h1 id='section-header' className='text-center text-[50px] font-bold'>About Me</h1>
        </div>

        <div className='flex justify-center items-center h-full'>
          <div id='about-pic' className='flex mr-8'>
            <img src={aboutMePic} className='h-[450px] w-[600px] rounded-full'/>
          </div>
          <div id='aboutme-content-container' className='flex flex-col h-[450px] w-[400px] ml-8'>
            <p className='m-3'>I'm Mazvita , but most people in my life call me Maz! I am a plant obsessed, puzzle loving social marketer who bases her life's philosophy on nurturing creativity, positive interactions and growth.
            </p>

            <p className='m-3'>I received my undergraduate degree  in Psychology from Seattle Pacific University and I’m a self-taught creative who hails from the Sunshine City, Harare, in Zimbabwe. I’m heavily influenced by the delicate yet profound nuances that are embedded within different
            </p>

            <p className='m-3'>cultures like patterns, historic writings, graphic symbols and colour as a form of visual and global communication.
            </p>

          </div>
        </div>

      </section>
      <section id='experience' className='flex flex-col h-screen'>
        <div className='flex flex-col items-center'>
          <p id='section-preheader' className='text-center text-[18px]'>Explore my</p>
          <h1 id='section-header' className='text-center text-[50px] font-bold'>Experience</h1>
        </div>

        <div id='experience-slides' className='flex flex-col h-full'>
        <div id='experience-links-container' className='flex justify-center'>
            <h1 className={exp1 ? ' underline mx-12 text-[25px]' : 'mx-12 text-[25px]'}
                onClick={e => toggleExp1()}
            >Content Creation</h1>
            <h1 className={exp2 ? ' underline mx-12 text-[25px]' : 'mx-12 text-[25px]'}
                onClick={e => toggleExp2()}
            >Social Media Management & Growth</h1>
            <h1 className={exp3 ? ' underline mx-12 text-[25px]' : 'mx-12 text-[25px]'}
                onClick={e => toggleExp3()}
            >Design</h1>
        </div>
        <div id='content-creation-experience'>
          <h1 id='exp1' className={exp1 ? 'text-center' : 'hidden'}>Testing Experience 1</h1>
          <p id='exp1' className={exp1 ? '' : 'hidden'}>End-to-End Magic: Mastering the Full Content Creation Process

From the initial spark of an idea to its final polished release, I excel in every stage of the content creation journey. My hands-on approach ensures a deep connection to the work, fostering creativity and attention to detail.

I have a proven track record of producing quality still and video assets, coupled with the strategic development of social media calendars and scheduling. This combination guarantees a consistent and engaging brand presence across all platforms. My holistic involvement in content creation not only enhances the quality of the output but also drives impactful marketing results.</p>
        
          <h1 id='exp1' className={exp2 ? 'text-center' : 'hidden'}>Testing Experience 2</h1>
          <p id='exp1' className={exp2 ? '' : 'hidden'}>For Tansy, a Black woman-owned plant nursery and gift shop, I developed and executed social media strategies that boosted engagement, reach, and conversions. This approach significantly enhanced Tansy's online presence, driving greater visibility and sales.</p>
        
          <h1 id='exp1' className={exp3 ? 'text-center' : 'hidden'}>Testing Experience 3</h1>
          <p id='exp1' className={exp3 ? '' : 'hidden'}>I've created compelling graphic and video content for various clients, as well as some exciting personal projects. This work showcases my versatility and creativity in visual storytelling.</p>
        </div>
        </div>
      </section>
      <section id='contact-me' className='flex flex-col h-screen'>
        <div className='flex flex-col items-center'>
          <p id='section-preheader' className='text-center text-[18px]'>Get in Touch</p>
          <h1 id='section-header' className='text-center text-[50px] font-bold'>Contact Me</h1>
        </div>
        <div id='contact container'>
          <div id='email' className='flex'>
            <img src={emailIcon} className='h-[30px]'/>
            <p><a href="mailto:Chikavamazvita@gmail.com">Chikavamazvita@gmail.com</a> </p>
          </div>

          <div id='linkedIn' className='flex'>
            <a href='https://www.linkedin.com/in/mazvitachikava/'>
              <img src={linkedInIcon} className='h-[30px]'/>
              <p>LinkedIn</p>
            </a>
          </div>

          <div id='Instagram' className='flex'>
            <a href='https://www.instagram.com/mazvitajoy_/'>
              <img src={instagramIcon} className='h-[30px]'/>
              <p>Instagram</p>
            </a> 
          </div>

        </div>
      </section>
    
    </div>
  );
}

export default App;
