import React from 'react'

const Textbox = ({name, type, placeholder, onChange, error, errorMsg}) => {

  return (
    
    <div className='relative w-full'>
      <input type={type} id={name} name={name} placeholder=' ' onChange={onChange} 
      className='bg-white peer w-full placeholder-transparent border-b-2 text-lg
      rounded-sm py-1 px-2 shadow-sm focus:outline-none focus:border-red-500'
      />
      <span onClick={() => {
        document.getElementById(name).focus()
      }} className="text-xs px-1 italic absolute -top-2 left-2 text-gray-700
      peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
      peer-placeholder-shown:top-1 peer-placeholder-shown:left-1
      transition-all">{placeholder}</span>
      {
        error ? (
          <span className="text-sm text-red-500 font-semibold">
           {errorMsg}
          </span>
        ) : null
      }
      
     </div>
  )
}

export default Textbox