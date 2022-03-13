import { Link } from 'react-router-dom'
import React from 'react'

const menuItem = ({ text, linkTo }) => {
  return (
    <Link component={Link} to={linkTo} className="text-lg font-medium text-gray-500 hover:text-gray-900 hover:border-t-2 hover:border-t-red-200">
        {text}
    </Link>
  )
}

export default menuItem