import Typed from 'react-typed';
const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Growing with data</h1>
        <div className='flex justify-center items-center'>
          <p className="md:text-4xl py-2 sm:text-3xl text-xl font-bold">Fast, flexibale financing for</p>
          <Typed
            className='md:text-5xl sm:text-3xl text-xl font-bold pl-3 md:pl-4'
            strings={['BTB', 'BTC', 'SASS']} 
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'> Nulla pretium odio ipsum, in venenatis est consequat a. Nunc dictum urna erat, non pretium metus ultricies ut</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-xl text-black'>Get started</button>
      </div>
    </div>
  )
}
export default Hero