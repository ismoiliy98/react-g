import React from 'react'
import classes from './Header.module.scss'

const Header = () => {
  return (
    <div
      className={`${classes.fixedHeader} shadow-lg flex w-full h-16 bg-white items-center px-4`}
    >
      <span className="text-green-600 font-bold text-2xl select-none">
        React-G
      </span>
    </div>
  )
}

export default Header
