import React from 'react'

interface props {
  label: string;
}
const TechButton = ({ label }: props) => {
  return (
    <button key={label} className='bg-primary text-white px-[10px] py-[6px] rounded-[10px] text-[14px]'>{label}</button>
  )
}

export default TechButton