import React from 'react'
import useWelcome from '../../hooks/useWelcome'

const Input = () => {
  const { inputRef } = useWelcome();
  return (
    <input type="text" ref={inputRef} placeholder="Enter your name" />
  )
}

export default Input