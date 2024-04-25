const router = require ('express').Router();


 router.get('/diskon', (_, res) => {
    res.json({
        status : true,
        message : 'Berhasil diakses'
    });
 });


 router.post('/diskon', (_, res) => {
    res.json({
        status : true,
        message : 'ini adalah method POST diskon'
    });
 });


 router.put('/diskon', (_, res) => {
    res.json({
        status : true,
        message : 'ini adalah method POST diskon'
    });
 });


 router.delete('/diskon', (_, res) => {
    res.json({
        status : true,
        message : 'ini adalah method POST diskon'
    });
 });

module.exports = router;