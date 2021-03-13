import { useRef } from 'react'

const Alert = () => {
  const notificationRef = useRef()

  const onHideHandler = () => {
    if (notificationRef && notificationRef.current)
      notificationRef.current.style.display = 'none'
  }

  return (
    <div className='notification is-warning' ref={notificationRef}>
      <button className='delete' onClick={onHideHandler}></button>
      You are trying to run a number of iterations directly on the
      single-thread. This, depending on your devise, could lead to browser
      freezing or even crashing.
    </div>
  )
}

export default Alert
