import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FF0000]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-t from-red-200 to-red-600" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`} >Hi, I'm <span className="text-[#af0000]">Arianit</span></h1>
          <p className={`${styles.heroSubText} mt-2 textwhite-100`}>
            I develop many things, from websites to backend software, <br className="sm:blockand" /> I'm always looking for new challenges.
          </p>
        </div>
      </div>   
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev 
              animate = {{
                y: [0,24,0]
              }}
              transition = {{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-2 rounded-full bg-secondary mb-1"
            />

          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero