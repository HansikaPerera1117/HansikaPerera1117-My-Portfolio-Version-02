import Logo from "../public/assests/logo.png"
import Image from 'next/image'

const NavBar = ()=>{
return(
    <div>
        <nav className='flex justify-between h-24'>
        <Image
          src={Logo}
          alt="logo"
          width='85'
          height='10'
          className="mx-12 my-2 inline-block"
        />
        <ul className='font-raleway font-semibold  flex justify-end mx-16 my-9'>
          <li className='mx-8'>HOME</li>
          <li className='mx-8'>ABOUT ME</li>
          <li className='mx-8'>SKILS</li>
          <li className='mx-8'>PROJECTS</li>
          <li className='mx-8'>CONTACT</li>
        </ul>
       </nav>
    </div>
);
}


export default NavBar