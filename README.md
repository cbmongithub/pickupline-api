## Pickupline API

A simple api for getting a pickup lines

### Usage

Just one example using needle with node js

```

const needle = require('needle')

needle('get', 'https://pickupline-api.herokuapp.com/')
  .then((res) => {
    console.log('Got a pickup line!', res.body.pickup_line)
  })
  .catch((err) => {
    console.error(err)
  })
}
```
