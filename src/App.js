import './App.css';

function App() {
  return (
    <div>
      <nav className='flex justify-between h-[80px] bg-black drop-shadow-xl'>
        <div className='flex items-center ml-4'>
          <span className='font-semibold text-white'>Mazvita Strohmeyer</span>
        </div>

        <div className='flex items-center justify-between mr-4 w-[300px]'>
          <h1 className='text-white'>Profile</h1>
          <h1 className='text-white'>About</h1>
          <h1 className='text-white'>Experience</h1>
          <h1 className='text-white'>Contact</h1>
        </div>
      </nav>

      <section id='profile'>

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
