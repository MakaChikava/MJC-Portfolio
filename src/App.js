import './App.css';
import mazpic from './assets/maz.jpg'
import aboutMePic from './assets/mazaboutme.png'

function App() {
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
          <p className='text-center text-[18px]'>Get to know more</p>
          <h1 className='text-center text-[50px] font-bold'>About Me</h1>
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
      <section id='experience' className='flex h-screen'>
        
      </section>
      <section id='contact-me'>

      </section>
    
    </div>
  );
}

export default App;
