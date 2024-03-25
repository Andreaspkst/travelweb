import React from 'react'

import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';
import KeyWest from '../assets/keywest.jpg';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
        <div className="py-16">
          <h1>Where to next?</h1>
          <p className='py-2'>Explore our rich places to visit</p>
        </div>
        
        <div className="max-w-[1240px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SelectsCard bg={BoraBora} text='Bora Bora'/>
        <SelectsCard bg={BoraBora2} text='Maldives'/>
        <SelectsCard bg={Maldives} text='Antigua'/>
        <SelectsCard bg={Maldives2} text='Cozumel'/>
        <SelectsCard bg={Maldives3} text='Jamaica'/>
        <SelectsCard bg={KeyWest} text='Key West'/>
    </div>
    </div>
  )
}

export default Selects