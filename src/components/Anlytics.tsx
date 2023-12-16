import Laptop from '../assets/laptop.jpg'
function Anlytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="laptop" className='w-[500px] mx-auto my-4'/>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Class aptent taciti sociosqu ad litora</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et aut molestiae 
            provident ipsam necessitatibus amet magnam debitis optio corporis aperiam, odit 
            veniam. Vero similique esse neque consequatur id vitae placeat.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-xl'>Get started</button>
        </div>
      </div>
    </div>
  )
}

export default Anlytics