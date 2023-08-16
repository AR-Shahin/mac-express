const express = require('express')
const address = require('address');
const app = express()
const port = 3000

app.get('/', (req, res) => {
 
  let macAddress = null;
  address.mac(function (err, addr) {
    console.log(addr);
    macAddress = addr
  });

  res.send(`Mac Address ${macAddress} \n IP ${address.ip()}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})