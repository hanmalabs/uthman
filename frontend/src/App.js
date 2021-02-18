import './App.css';
import './index.css';

function App() {
  return (
  <div className='App'>
  <section className='h-lx bg-homecover bg-cover font-cereal p-12 '>
    <h1 className='text-8xl text-center text-white mt-10'>Medi Search</h1>
  <div className="">
  <div className="bg-white mt-10 flex items-center rounded-full shadow-xl">
    <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search"></input>
    
    <div className="p-4">
      <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
        Go
      </button>
      </div>
    </div>
  </div>
  </section>
      <div className='bg-blue-300 h-screen'>
      </div>
      <div className='bg-blue-200 h-screen'>
      </div>
      <div className='bg-blue-100 h-screen'>
      </div>
    </div>
  );
}

export default App;
