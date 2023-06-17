import Image from 'next/image'
import PImg1 from "../public/assests/img1.png"
import{FaLinkedinIn ,FaGithub,FaMessage} from 'react-icons/fa';
import{SiHackerrank} from 'react-icons/si';
import{BsFileEarmarkArrowDownFill} from 'react-icons/bs';

const Main = ()=>{
  return (
    <div>
      <section>
      <Image
          src={PImg1}
          alt="img"
          width='400'
          height='400'
          className="mx-24 inline-block relative bottom-28"
        />
        <div className='relative left-16 inline-block my-14 mx-14'>

          <h1 className='font-ubuntu font-medium text-5xl  my-6'>Hi I'm Hansika Perera</h1>
          <h1 className='font-geologica font-semibold text-6xl my-6'>FrontEnd Developer</h1>
          <h1 className='font-ysabeau font-medium text-xl'>I'm focused on elevating user experiences with intuitive interfaces and flawless <br/>frontend execution.</h1>
       
          <div className='mx-8 my-12 '>
            <div className='bg-blue-400 inline-block text-2xl mx-4 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'><FaLinkedinIn/></div>
            <div className='bg-blue-400 inline-block text-2xl mx-4 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'><FaGithub/></div>
            <div className='bg-blue-400 inline-block text-2xl mx-4 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'><SiHackerrank/></div>
            <div className='bg-blue-400 inline-block text-2xl mx-4 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'><BsFileEarmarkArrowDownFill/></div>       
           
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default Main
