import Image from 'next/image'
import fish from './assets/Fish.svg'

const OpenPage = () => {
  return (
    <div className=' h-screen bg-[#E5F2FF] w-screen flex flex-col justify-center items-center'>
      <Image src={fish} alt="" className='h-[200px]' />
    </div>
  )
}

export default OpenPage
