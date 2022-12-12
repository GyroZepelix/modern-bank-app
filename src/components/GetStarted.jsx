import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer group`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full group-hover:bg-inherit transition-all duration-150`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium mr-2 text-[18px] leading-[23px] '>
          <span className='text-gradient group-hover:hidden transition-all duration-150'>Get</span>
          <span className='group-hover:inline text-primary hidden transition-all duration-150'>Get</span>
        </p>
        <img src={arrowUp} alt="arrow up" className='w-[23px] h-[23px] object-contain '/>
      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient group-hover:hidden transition-all duration-150'>Started</span>
          <span className='group-hover:inline text-primary hidden transition-all duration-150'>Started</span>
        </p>
    </div>
  </div>
)


export default GetStarted