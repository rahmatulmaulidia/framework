const router = require ('express').Router();


 router.get('/bayar', (_, res) => {
    res.json({
        status : true,
        message : 'Berhasil diakses'
    });
 });

 router.post ('/bayar', (_, res) => {
    res.json({
        status : true,
        message : ' ini adalah method POST bayar'
    });
 });

 router.put ('/bayar', (_, res) => {
    res.json({
        status : true,
        message : ' ini adalah method POST bayar'
    });
 });

 router.delete ('/bayar', (_, res) => {
    res.json({
        status : true,
        message : ' ini adalah method POST bayar'
    });
 });

 module.exports = router;
 