import { useRef } from 'react'

const Alert = ({ iterationsAmount }) => {
  const notificationRef = useRef()

  const onHideHandler = () => {
    if (notificationRef && notificationRef.current)
      notificationRef.current.style.display = 'none'
  }

  const literal = {
    10000000: 'ten million',
    100000000: 'one hundred millions',
    1000000000: 'one billion',
    10000000000: 'one hundred billion',
  }

  console.log(literal[iterationsAmount])

  return (
    <div className='notification is-warning' ref={notificationRef}>
      <button className='delete' onClick={onHideHandler}></button>
      You are trying to run <b>{literal[iterationsAmount]}</b> of iterations
      directly on the <b>single-thread</b>. This, depending on your device,
      could lead to browser <i>freezing</i> or even <i>crashing</i>.
    </div>
  )
}

export default Alert
