import React from 'react'
import useWelcome from '../../hooks/useWelcome'

const Button = () => {
  const { action } = useWelcome();
  return (
    <button type="button" onClick={action}>Take Me In!</button>
  )
}

export default Button