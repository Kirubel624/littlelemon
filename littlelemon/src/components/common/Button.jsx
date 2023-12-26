import React from 'react'

const Button = ({buttonText="Button",onClick,style="bg-[#F4CE14] text-black px-4 py-2 rounded"}) => {
  return (
    <button className={style} onClick={onClick}>
      {buttonText}
    </button>
  )
}

export default Button
