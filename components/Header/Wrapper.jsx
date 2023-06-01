import React from 'react'

const WrapperHeader = ({children, className}) => {
  return (
    <div className={`w-full max-w=[1280px] px-5 md:px10 ${className || ""}`}>
        {children}
    </div>
  )
}

export default WrapperHeader