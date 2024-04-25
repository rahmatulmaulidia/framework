const router = require ('express').Router();


 router.get('/pembeli', (_, res) => {
    res.json({
        status : true,
        message : 'Berhasil diakses'
    });
 });


 router.post('/pembeli', (_, res) => {
    res.json({
        status : true,
        message : 'ini adalah method POST pembeli'
    });
 });


 router.put('/pembeli', (_, res) => {
    res.json({
        status : true,
        message : 'ini adalah method POST pembeli'
    });
 });


 router.delete('/pembeli', (_, res) => {
    res.json({
        status : true,
        message : 'ini adalah method POST pembeli'
    });
 });

module.exports = router;