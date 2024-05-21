import './App.css';

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
        <div id='profile-container'>
          <div id='profile-pic-container'>
            <img src='blah.jpeg'/>
          </div>

          <div id='headline-container'>
            <p>Hello I'm</p>
            <h1 id='name'>Mazvita Strohmeyer</h1>
            <h1 id='title'>Talent Acquisitionist</h1>

            <div id='headline -btn-container'>
              <button id='resume-btn'>Download CV</button>
              <button id='contact-btn'>Contact Info</button>
            </div>
          </div>

        </div>
      </section>
      <section id='about'>

      </section>
      <section id='experience'>

      </section>
      <section id='contact-me'>

      </section>
    
    </div>
  );
}

export default App;
