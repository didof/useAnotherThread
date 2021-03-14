import React from 'react'

const Explanation = ({ isUsingHook }) => {
  return (
    <div className='content'>
      <p>
        <p>
          Below is <code>heavyJob</code> which is nothing more than a loop, a
          function repeated several times.
        </p>
        <p></p>
      </p>
      {isUsingHook ? (
        <>
          <p>
            The wrapping of the <strong> custom hook </strong>{' '}
            <code> useAnotherThread </code>, registers the function on a generic{' '}
            <strong>web worker</strong> and returns different values ​​and
            methods to be able to interact with it.
          </p>
          <p>
            By pressing the <b>Exec</b> button you will notice that the UI does
            not freeze. The loop runs in the background and as soon as it is
            completed the output is emitted.
          </p>
          <p>
            The possibility to terminate the web worker manually is also made
            available.
          </p>
        </>
      ) : (
        <>
          <p>
            Its execution without using my <code>useAnotherThread</code> hook
            therefore happens on the main thread.
          </p>
          <p>
            By pressing the <b>exec</b> button you will see the UI (represented
            by the moving balls) <i>freeze</i> until the execution of the loop
            is complete. The same thing happens to everything that runs on the
            main-thread.
          </p>
          <p>
            Given that the diversity of devices and their relative power, I have
            made available the possibility to reduce or increase the number of
            iterations. I recommend starting from the lowest to the highest.
          </p>
          <p>
            To get the same result but without blocking the main-thread, just
          </p>
        </>
      )}
    </div>
  )
}

export default Explanation
