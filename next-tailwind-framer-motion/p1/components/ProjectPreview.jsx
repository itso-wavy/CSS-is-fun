import React from 'react';
import Arrow from '../public/arrow.svg';
import { motion } from 'framer-motion';

const ProjectPreview = ({
  name = 'Block name',
  description = 'Block Description',
  imgUrl = '/project-1.png',
  bgColor = '#e4e4e7',
  dark = false,
}) => {
  const PreviewAnimation = {
    initial: {
      y: 30,
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className={`h-[30rem] rounded-3xl overflow-hidden ${dark ? 'dark' : ''}`}
      style={{ background: `${bgColor}` }}
      initial='initial'
      whileInView='animate'
      variants={PreviewAnimation}
    >
      <div
        className='h-full w-full px-10 py-6 bg-cover bg-no-repeat bg-center hover:scale-105 duration-[500ms] transition-all ease-in-out '
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className='flex justify-between'>
          <div>
            <h2 className='font-medium text-lg dark:text-white'>{name}</h2>
            <p className='font-sm text-zinc-500 dark:text-zinc-300'>
              {description}
            </p>
          </div>
          <div className='h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer'>
            <Arrow className='w-6 h-6' />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPreview;
