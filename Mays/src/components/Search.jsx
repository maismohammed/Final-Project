import React from 'react'

import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsHouseDoor } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'

const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>

      <form action="">

        <div className='firstDiv rounded-[8px] gap-[10px]  '>
          <ul>
            <li>
              <div className='flex gap-2 items-center'>

                <input type="text" className='bg-transparent focus:outline-none w-[100%]' placeholder='Search Bank Here....' />

              </div>
            </li>

            <li>
              <button className=' px-10 rounded-[10px] cursor-pointer'>Search</button>
            </li>
          </ul>


        </div>

      </form>

    </div>
  )
}

export default Search