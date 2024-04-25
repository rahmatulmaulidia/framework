const express = require('express');
const app = express();
const user = require('./router/user');
const roti = require('./router/roti')
const permen = require('./router/permen')
const penjual = require('./router/penjual')
const pembeli = require('./router/pembeli')
const minuman = require('./router/minuman')
const makanan = require('./router/makanan')
const harga = require('./router/harga')
const diskon = require('./router/diskon')
const bayar = require('./router/bayar')

//app.use(express.json());

app.use(bayar, diskon, user, roti, permen,penjual,pembeli,minuman,makanan,harga);


app.listen(3000, () => {
    console.log("Server berhasil")
})