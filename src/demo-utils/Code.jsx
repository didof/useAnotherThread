import React from 'react'

const Code = ({ isUsingHook, iterationsAmount }) => {
  return (
    <div className='box'>
      <code>{`const heavyJob = end => {`}</code>
      <br />
      <code style={{ paddingLeft: 40 }}>{`let a = 0`}</code>
      <br />
      <code
        style={{ paddingLeft: 40 }}
      >{`for (let i = 0; i < end; i++) {`}</code>
      <br />
      <code style={{ paddingLeft: 60 }}>{`a += i`}</code>
      <br />
      <code style={{ paddingLeft: 40 }}>{`}`}</code>
      <br />
      <code style={{ paddingLeft: 40 }}>{`return a`}</code>
      <br />
      <code>{`}`}</code>
      <br />
      <br />
      {isUsingHook ? (
        <>
          <code>{`const {`}</code>
          <br />
          {[
            'state,',
            'exec,',
            'output,',
            'kill,',
            'isExecutable,',
            'isKillable,',
          ].map(arg => (
            <div key={arg}>
              <code style={{ paddingLeft: 40 }}>{arg}</code>
              <br />
            </div>
          ))}
          <code>{`} = useAnotherThread(`}</code>
          <br />
          <code style={{ paddingLeft: 40 }}>{`heavyJob,`}</code>
          <br />
          <code style={{ paddingLeft: 40 }}>{iterationsAmount}</code>
          <br />
          <code style={{ paddingLeft: 40 }}>{`)`}</code>
        </>
      ) : (
        <code>{`outputNode.innerText = heavyJob(${iterationsAmount})`}</code>
      )}
    </div>
  )
}

export default Code
