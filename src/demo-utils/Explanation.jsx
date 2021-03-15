import { useRef, useEffect } from 'react'

const Explanation = ({ isUsingHook }) => {
  const hideableRef = useRef()

  useEffect(() => {
    if (hideableRef && hideableRef.current) {
      hideableRef.current.style.display = 'inline-block'
    }
  }, [isUsingHook])

  const onDeleteHandle = () => {
    if (hideableRef && hideableRef.current) {
      hideableRef.current.style.display = 'none'
    }
  }

  const hideableText = isUsingHook ? (
    <>
      <hr />
      <p>
        The wrapping of the <strong> custom hook </strong>{' '}
        <code>useAnotherThread</code>, registers the function on a generic{' '}
        <strong>web worker</strong> and returns different values ​​and methods
        to be able to interact with it.
      </p>
      <p>
        By pressing the <b>Exec</b> button you will notice that the UI does not
        freeze. The loop runs in the background and as soon as it is completed
        the output is emitted.
      </p>
      <p>
        The possibility to terminate the web worker manually is also made
        available.
      </p>
      <div className='is-flex is-justify-content-flex-end'>
        <button className='delete' onClick={onDeleteHandle}></button>
      </div>
    </>
  ) : (
    <>
      <hr />
      <p>
        Its executes without using my <code>useAnotherThread</code> hook
        therefore happens on the main thread.
      </p>
      <p>
        By pressing the <b>exec</b> button you will see the UI (represented by
        the moving balls) <i>freeze</i> until the execution of the loop is
        complete. The same thing happens to everything that runs on the{' '}
        <b>main-thread</b>.
      </p>
      <hr />
      <p>
        Given that the diversity of devices and their relative power, I have
        made available the possibility to reduce or increase the number of
        iterations.
        <br />I recommend starting from the lowest to the highest until you see
        the UI <i>freeze</i> for a few seconds.
      </p>
      <p>
        To get the same result but without blocking the main-thread,{' '}
        <b>click on the checkbox below</b>.
      </p>
      <div className='is-flex is-justify-content-flex-end'>
        <button className='delete' onClick={onDeleteHandle}></button>
      </div>
    </>
  )

  return (
    <div className='content box'>
      <p>
        Author: <a href='https://twitter.com/did0f'>didof</a> |{' '}
        <a href='https://www.linkedin.com/in/francesco-di-donato-2a9836183/'>
          Francesco Di Donato
        </a>
      </p>
      <p>
        Dig the Repo <a href='https://github.com/didof/useAnotherThread'>⛏️</a>
      </p>
      <hr />
      <p>
        Below is <code>heavyJob</code> which is nothing more than a loop, a
        function repeated several times.
      </p>

      <span ref={hideableRef}>{hideableText}</span>
    </div>
  )
}

export default Explanation
