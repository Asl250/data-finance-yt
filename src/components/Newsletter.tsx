
function Newsletter() {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'> 
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum?</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black lg:mr-2' type="email" placeholder='Enter Email'/>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-xl text-black'>Get started</button>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur
                    <span className="text-[#00df9a] block">adipisicing elit. Cum!</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter