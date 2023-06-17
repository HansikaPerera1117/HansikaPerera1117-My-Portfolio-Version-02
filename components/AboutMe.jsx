import Image from 'next/image'
import MImg from "@/public/assests/img2.jpg"

import{SiGmail} from 'react-icons/si';
import{BsTelephoneFill} from 'react-icons/bs';
import{ImLocation2} from 'react-icons/im';






const AboutMe = ()=>{
    return(
        <div>
            <div className='w-full md:h-screen p-2 flex items-center py-16'>
                <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                  
                    <div className="col-span-2">
                    <p className='font-raleway text-blue-400 font-medium text-3xl my-8'>About Me</p>
                    <p className='font-geologica font-semibold text-3xl my-8'>Who I Am</p>
                    <p className='font-ubuntu text-gray-500'>My name is Hansika Perera. I’am final year student at IJSE-Institute of Software Engineering. I’ve mostly professionally with Java and JavaScript . I’m currently learning more about web development , software development and mobile application development.I like to work as Software Developer and Web Developer.</p>
                        <br/>
                    <p className='font-ubuntu text-gray-500'>As an undergraduate of Information Technology, I am willing to gain more practical knowledge where I can apply my ongoing academic competencies, skills, and strengths to uplift the company operations in a more serious way. Through my internship, I can learn how employees solve industrial problems.</p>
                
                    <div className=' my-12 '>
                        <div className=' inline-block text-2xl mx-4 rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'><BsTelephoneFill/></div>
                        <div className=' inline-block text-2xl mx-4 rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'><SiGmail/></div>
                        <div className=' inline-block text-2xl mx-4 rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'><ImLocation2/></div>                    
                    </div>

                </div>

                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                     <Image src={MImg} className='rounded-xl' alt='/'/>
                </div>
             </div>
           </div>

        </div>
    );
}
export default AboutMe