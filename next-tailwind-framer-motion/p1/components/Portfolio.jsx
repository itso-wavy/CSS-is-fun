import Navbar from './Navbar';
import ProjectPreview from './ProjectPreview';
import SocialButton from './SocialButton';
import Dribbble from '../public/dribbble.svg';
import Instagram from '../public/instagram.svg';
import Twitter from '../public/twitter.svg';
import Linkedin from '../public/linkedin.svg';

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <section className='grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4'>
        <div className='bg-zinc-200 h-[30rem] rounded-3xl p-10 flex flex-col gap-16 bg-[url("/gradient-bg.jpg")] bg-cover'>
          <h2 className='text-4xl font-semibold'>
            Hello, I'm a Product Designer with 7 years of experience.
          </h2>
          <p className='flex-1'>
            I care a lot about using design for positive impact and enjoy
            creating user-centric, delightful, and human experiences.
          </p>
          <div className='flex flex-col lg:flex-row items-center gap-4 justify-self-end '>
            <button className='bg-black text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto'>
              Contact me
            </button>
            <div className='flex items-center gap-4'>
              <SocialButton bgColor='dribbble'>
                <Dribbble className='w-5 h-5' />
              </SocialButton>
              <SocialButton bgColor='instagram'>
                <Instagram className='w-5 h-5' />
              </SocialButton>
              <SocialButton bgColor='twitter'>
                <Twitter className='w-5 h-5' />
              </SocialButton>
              <SocialButton bgColor='linkedin'>
                <Linkedin className='w-5 h-5' />
              </SocialButton>
            </div>
          </div>
        </div>
        <div className='h-[30rem] rounded-3xl p-8 bg-[url("/profile.jpg")] bg-cover bg-center'></div>
      </section>

      <section className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-4 '>
        <ProjectPreview
          name='Flip App'
          description='Next-gen social media'
          imgUrl='/project-1.png'
          bgColor='#685cdd'
          dark
        />
        <ProjectPreview
          name='Moneyscape'
          description='Lend and borrow dashboard'
          imgUrl='/project-2.png'
          bgColor='#313442'
          dark
        />
        <ProjectPreview
          name='Admin Onboarding'
          description='Increase user engagement'
          imgUrl='/project-3.png'
          bgColor=''
          dark
        />
        <ProjectPreview
          name='Project Dashboard'
          description='Project management app'
          bgColor='#4e4e56'
          dark
        />
        <ProjectPreview
          name='Newsy App'
          description='News aggregator app'
          imgUrl='/project-2.png'
          bgColor='#171717'
          dark
        />
        <ProjectPreview
          name='Krypto'
          description='Analyze crypto currency'
          imgUrl='/project-3.png'
        />
      </section>
    </>
  );
};

export default Portfolio;
