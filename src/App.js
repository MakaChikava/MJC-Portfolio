import './App.css';
import mazpic from './assets/maz.jpg'
import aboutMePic from './assets/mazaboutme.png'
import { useEffect, useState } from 'react';

function App() {
  const [experience, setExperience] = useState()

  const getExperience1 = ()=>{
    return(
      <div id='experience-slides' className='flex flex-col h-full'>
        <div id='experience-links-container' className='flex justify-center'>
          <h1 className='font-bold underline mx-12 text-[25px]'>Content Creation</h1>
          <h1 className='mx-12 text-[25px]'>Social Media Management & Growth</h1>
          <h1 className='mx-12 text-[25px]'>Design</h1>
        </div>
        <div id='content'>
          <h1 className='text-center'>Testing Experience 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor condimentum lacinia quis vel eros donec ac odio. Eget dolor morbi non arcu risus quis. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Pellentesque elit ullamcorper dignissim cras tincidunt. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Sed sed risus pretium quam vulputate dignissim suspendisse in. Dui vivamus arcu felis bibendum ut tristique et egestas. Sit amet nisl purus in mollis nunc sed id.</p>
        </div>
      </div>
    )
  }

  useEffect(()=>{
    getExperience1()
  })
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
              <button id='resume-btn' className='bg-black rounded-full p-4 text-white font-bold'>Download CV</button>
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
            <h1 className='font-bold underline mx-12 text-[25px]'>Content Creation</h1>
            <h1 className='mx-12 text-[25px]'>Social Media Management & Growth</h1>
            <h1 className='mx-12 text-[25px]'>Design</h1>
        </div>
        <div id='content-creation-experience'>
          <h1 className='text-center'>Testing Experience 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor condimentum lacinia quis vel eros donec ac odio. Eget dolor morbi non arcu risus quis. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Pellentesque elit ullamcorper dignissim cras tincidunt. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Sed sed risus pretium quam vulputate dignissim suspendisse in. Dui vivamus arcu felis bibendum ut tristique et egestas. Sit amet nisl purus in mollis nunc sed id.</p>
        </div>
        </div>
      </section>
      <section id='contact-me'>

      </section>
    
    </div>
  );
}

export default App;
