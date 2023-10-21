import React from 'react'

import { BiTimeFive } from 'react-icons/bi'

import logo1 from '../assets/Janoob.png'
import logo2 from '../assets/Zain.jpg'
import logo3 from '../assets/TBI.jpg'
import logo4 from '../assets/Iraqi.jpg'
import logo5 from '../assets/Ameen.jpg'
import logo6 from '../assets/kurd.jpg'
import logo7 from '../assets/IDB.jpg'
import logo8 from '../assets/Noor.png'
import { NavLink } from 'react-router-dom'

const Data = [
  {
    id: 1,
    image: logo1,
    title: 'Explore Bank',
    // time: 'Now', 
    location: 'Sulaymaniyah',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
    company: 'AL Janoob Islamic Bank'
  },
  {
    id: 2,
    image: logo2,
    title: 'Explore Bank',
    // time: '14Hrs', 
    location: 'Arbil',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
    company: 'Zain Iraq Islamic Bank'
  },

  {
    id: 3,
    image: logo3,
    title: 'Explore Bank',
    // time: '10Hrs', 
    location: 'Baghdad',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
    company: 'TBI Bank'
  },

  {
    id: 4,
    image: logo4,
    title: 'Explore Bank',
    // time: '10H',
    location: 'Arbil',
    desc: 'This is a job description to edit in the admin dashboard section if you are posting a new job.',
    company: 'Iraqi Islami Bank',
  },

  {
    id: 5,
    image: logo5,
    title: 'Explore Bank',
    // time: 'Now',
    location: 'Basra',
    desc: 'This is a job description to edit in the admin dashboard section if you are posting a new job.',
    company: 'Ameen AL Iraq Bank',
  },


  {
    id: 6,
    image: logo6,
    title: 'Explore Bank',
    // time: '5H',
    location: 'Baghdad',
    desc: 'This is a job description to edit in the admin dashboard section if you are posting a new job.',
    company: 'Kurdistan Bank',
  },

  {
    id: 7,
    image: logo7,
    title: 'Explore Bank',
    // time: '14H',
    location: 'Baghdad',
    desc: 'This is a job description to edit in the admin dashboard section if you are posting a new job.',
    company: 'IDB Bank',
  },


  {
    id: 8,
    image: logo8,
    title: 'Explore Bank',
    // time: '2 Days',
    location: 'Baghdad',
    desc: 'This is a job description to edit in the admin dashboard section if you are posting a new job.',
    company: 'Noor Iraq Bank',
  },

  {
    id: 8,
    image: logo8,
    title: 'Explore Bank',
    // time: '2 Days',
    location: 'Baghdad',
    desc: 'This is a job description to edit in the admin dashboard section if you are posting a new job.',
    company: 'Abo Dhabi Bank',
  },

  {
    id: 8,
    image: logo8,
    title: 'Explore Bank',
    // time: '2 Days',
    location: 'Baghdad',
    desc: 'This is a job description to edit in the admin dashboard section if you are posting a new job.',
    company: 'ABC Bank',
  }

]

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-20 justify-center flex-wrap items-center py-10 " >

        {
          Data.map(({ id, image, title, time, location, desc, company }) => {
            return (
              <div key={id} className="group group/item singleJob w-[250px] p-[20px] rounded-[10px] shadow-greyIsh-400/700 hover:shadow-lg">

                <span className='flex justify-between items-center gap-4'>
                  <h1 className='text-[16px] font-semibold text-textColor group-hover:darkslategrey'>{title}</h1>

                </span>
                <h6 className='text-[#ccc]'>{location}</h6>

                <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:darkslategrey'>
                  {desc}
                </p>

                <div className='company flex items-center gap-2'>
                  <img src={image} alt="Company Logo" className='w-[10%]' />
                  <span className='text-[14px] py-[1rem] block group-hover:darkslategrey'>{company}</span>
                </div>

                <NavLink to={'/services'}>


                  <div className="Bb">
                    <input type="button"
                      className='Bb -[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor group-hover/item:text-textColor group-hover:darkslategrey'
                      value="Services" />
                  </div>

                </NavLink>

              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Jobs