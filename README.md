# pear-updates

> Pear platform and application update notifications

## Usage

```js
import updates from 'pear-updates'
```

```js
const stream = updates()
stream.on('data', (update) => {
  const { app, version, info, updating, updated } = update
  //...
})
```

```js
updates((update) => {
  const { app, version, info, updating, updated } = update
  //...
})
```

## License

Apache-2.0