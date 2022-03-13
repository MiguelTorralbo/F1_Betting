import React from 'react'

import  f1logo from '../../images/F1.svg'

import { Link } from "react-router-dom";

const icon = () => {
  return (
    <div className="flex justify-start lg:w-0 lg:flex-1">
        <Link to="/" >
        <span className="sr-only">F1 Logo</span>
        <img
            className="h-8 w-auto sm:h-10"
            src={f1logo}
            alt=""
        />
        </Link>
    </div>
  )
}

export default icon