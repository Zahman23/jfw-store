import React from 'react'

const WrapperMain = ({children, className}) => {
  return (
    <div className={`w-full max-w=[1280px] px-5 md:px10 mx-auto ${className || ""}`}>
        {children}
    </div>
  )
}

export default WrapperMain