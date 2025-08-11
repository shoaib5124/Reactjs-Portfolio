import React from 'react'

const container = ({children, className=""}) => {
  return (
    <div className={`max-w-6xl w-full mx-auto px-10 ${className}`}>
      {children}
    </div>
  )
}

export default container
