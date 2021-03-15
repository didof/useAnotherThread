# useAnotherThread

## Language/Library/Framework

JavaScript/React

## Type

CustomHook

## Dependecies

It requires two main packages:

- an improved JSON modulator to pass the function to the generic web worker: `json-fn`
- the appropriate loader for the web worker file: `worker-loader`

###### `webpack.config.js`

```js
{
          test: /\.worker\.js$/,
          use: { loader: 'worker-loader' },
        },
```

## How It Works

When the hook is used, an instance of the `generic.worker.js` file is created and saved in the ref `workerRef` to make it accessible to the rest of the script.
Immediately an event of type `INIT` is dispatched which brings with it the function (suitably stringified) and an array containing the possible arguments.
The `generic.worker.js` is instructed to react to the above event by recording its payloads in two variables.

Once all this has happened (synchronization is achieved by a <b>bidirectional exchange of information events</b>) the hook expands an externally callable `exec` function. The execution of this involves sending an event marked with the type `EXEC` which involves the execution of the function previously stored in the web worker.

Once this has generated an output, this is returned by the web worker to the hook, then to the outside.

In each intermediate stage the state is updated so that the user can be informed of the processing status.

Helpers are displayed with the aim of disabling any redundant triggers by the user.
