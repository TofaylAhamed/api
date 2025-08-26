import React from 'react'

const Badge = ({badgeText,className}) => {
  return (
    <div className={`px-[10px] py-[10px] bg-black text-white w-[90px] text-center font-bold ${className}`}>{badgeText}</div>
  )
}

export default Badge