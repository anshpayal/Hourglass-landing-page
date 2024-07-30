import './App.css'
import { Menu, Search, Calendar, MessageSquare, ChevronDown } from 'lucide-react';
import Logo from "../Logo.png"

function App() {
  return (
    <div className="bg-[#53389E] min-h-screen text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-[40px]">
          <img className='w-[163px] h-[43px]' src={Logo} alt='Logo' />
          <nav className="hidden md:flex space-x-6">
            <a href="#">Home</a>
            <a href="#" className="flex items-center justify-center gap-x-2 ">Products <span><ChevronDown size={20} /></span></a>
            <a href="#" className="flex items-center justify-center gap-x-2">Resources <span><ChevronDown size={20} /></span> </a>
          </nav>
        </div>
        <button className="text-white bg-[#7F56D9] px-[18px] py-2 rounded-md">Talk to sales</button>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl">
          We design physical experiences that create more happy in the world
        </h1>
        <p className="text-lg mb-8 max-w-xl">
          Our team of expert interior designers create beautiful and functional spaces for commercial and residential properties.
        </p>
        <div className="flex space-x-4">
          <button className="bg-white text-purple-700 px-6 py-3 rounded-md font-semibold">Get started</button>
          <button className="border border-white px-6 py-3 rounded-md font-semibold">Let's explore</button>
        </div>

        <div className="flex justify-between mt-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <Menu size={20} />
            </div>
            <span>Layers</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <Search size={20} />
            </div>
            <span>Sisyphus</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <Calendar size={20} />
            </div>
            <span>Circulate</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <MessageSquare size={20} />
            </div>
            <span>Questient</span>
          </div>
        </div>
      </main>

      <section className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Commercial interior designers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="w-6 h-6 bg-purple-700 rounded-full mr-2"></span>
                Shop team fitness
              </h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="w-6 h-6 bg-purple-700 rounded-full mr-2"></span>
                Deliver natural streams
              </h3>
              <p className="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div className="mt-8">
            <img src="/api/placeholder/800/400" alt="Office interior" className="w-full h-64 object-cover rounded-lg" />
          </div>
        </div>
      </section>

      <footer className="bg-purple-800 py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-md"></div>
            <span className="font-bold text-xl">Hourglass</span>
          </div>
          <button className="bg-purple-700 text-white px-4 py-2 rounded-md font-semibold">Sign up for free</button>
        </div>
      </footer>
    </div>
  );
}

export default App
