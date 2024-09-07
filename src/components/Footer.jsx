import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsLinkedin, BsEnvelope } from 'react-icons/bs';



export default function FooterCom() {
  return (
    <Footer container className='bg-gray-800 text-white border-t-4 border-purple-800'>
      <div className='w-full max-w-6xl mx-auto px-4 py-6'>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:gap-12'>
          <div className='flex flex-col items-center mb-6 lg:mb-0'>
            <Link
              to='/'
              className='text-xl font-bold text-teal-400 hover:text-teal-300'
            >
              <img src="/logoo.png" alt="mylogo" className="rounded-2xl w-[150px] h-[70px]"/>
            </Link>
          </div>
          <div className='flex flex-col lg:flex-row lg:gap-8 lg:items-start'>
            <div className='mb-6 lg:mb-0'>
              <Footer.Title title='Explore' className='text-white' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href=''
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white hover:text-purple-400'
                >
                  Know More
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  className='text-white hover:text-purple-400'
                >
                  About Vivek
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className='mb-6 lg:mb-0'>
              <Footer.Title title='Connect' className='text-white' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/Vivekkm077'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white hover:text-purple-400'
                >
                  GitHub
                </Footer.Link>
                <Footer.Link
                  href='https://www.linkedin.com/in/vivek-kumar-5859631b6/'
                  target='_blank'
                  className='text-white hover:text-purple-400'
                >
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' className='text-white' />
              <Footer.LinkGroup col>
                <Footer.Link href='#' className='text-white  hover:text-purple-400'>Privacy Policy</Footer.Link>
                <Footer.Link href='#' className='text-white  hover:text-purple-400'>Terms of Service</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className='bg-white' />
        <div className='flex flex-col items-center mt-6'>
          <Footer.Copyright
            href='#'
            by="  Vivek's Blog"
            year={new Date().getFullYear()}
            className='text-sm text-gray-400'
          />
          <div className='flex gap-6 mt-4'>
            
            <Footer.Icon href='https://www.linkedin.com/in/vivek-kumar-5859631b6/' target='_blank' icon={BsLinkedin} className='text-white hover:text-purple-400'/>
            <Footer.Icon href='https://www.instagram.com/vivek6143kumar/' target='_blank' icon={BsInstagram} className='text-white hover:text-purple-400'/>
            <Footer.Icon href='https://x.com/vivekabhiraj456' target='_blank' icon={BsTwitter} className='text-white hover:text-purple-400'/>
            <Footer.Icon href='https://github.com/Vivekkm077' target='_blank' icon={BsGithub} className='text-white hover:text-purple-400'/>
            <Footer.Icon href='mailto:vivekabhiraj456@gmail.com' target='_blank' icon={BsEnvelope} className='text-white hover:text-purple-400'/>
            </div>
        </div>
      </div>
    </Footer>
  );
}
