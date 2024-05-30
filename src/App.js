import './App.css';
import mazpic from './assets/maz.jpg'

function App() {
  return (
    <div id='body'>
      <nav className='flex justify-between h-[80px] bg-black drop-shadow-xl'>
        <div id='logo-container' className='flex items-center ml-4'>
          <span id='logo' className='font-semibold text-white'>Mazvita Strohmeyer</span>
        </div>

        <div id='nav-links-container' className='flex items-center justify-between mr-4 w-[300px]'>
          <h1 id='nav-links' className='text-white'>Profile</h1>
          <h1 id='nav-links' className='text-white'>About</h1>
          <h1 id='nav-links' className='text-white'>Experience</h1>
          <h1 id='nav-links' className='text-white'>Contact</h1>
        </div>
      </nav>

      <section id='profile'>
        <div id='profile-container' className='flex justify-around h-[500px]'>
          <div id='profile-pic-container' className='flex justify-center items-center w-1/3'>
            <img src={mazpic} className='rounded-[100px]'/>
          </div>

          <div id='headline-container' className='flex flex-col justify-center items-center w-1/3'>
            <p className='font-semibold text-[15px] text-gray-600'>Hello I'm</p>
            <h1 id='name' className='font-bold text-[35px]'>Mazvita Strohmeyer</h1>
            <h1 id='title' className='font-semibold text-[23px] text-gray-700'>Social Media Marketing</h1>

            <div id='headline-btn-container' className='flex w-2/3 justify-around mt-5'>
              <button id='resume-btn' className='bg-black rounded-full p-4 text-white font-bold'>Download CV</button>
              <button id='contact-btn' className='bg-black rounded-full p-4 text-white font-bold'>Contact Info</button>
            </div>
          </div>

        </div>
      </section>
      <section id='about'>
        <div id=''>

        </div>
      </section>
      <section id='experience'>

      </section>
      <section id='contact-me'>

      </section>
    
    </div>
  );
}

export default App;
