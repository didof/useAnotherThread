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
      You are trying to run a number of iterations directly on the{' '}
      <b>single-thread</b>. This, depending on your device, could lead to
      browser <i>freezing</i> or even <i>crashing</i>.
    </div>
  )
}

export default Alert
