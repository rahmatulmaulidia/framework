const router = require ('express').Router();


 router.get('/roti', (_, res) => {
    res.json({
        status : true,
        message : 'Berhasil diakses'
    });
 });

 router.post ('/roti', (_, res) => {
    res.json({
        status : true,
        message : ' ini adalah method POST roti'
    });
 });

 router.put ('/roti', (_, res) => {
    res.json({
        status : true,
        message : ' ini adalah method POST roti'
    });
 });

 router.delete ('/roti', (_, res) => {
    res.json({
        status : true,
        message : ' ini adalah method POST roti'
    });
 });

 module.exports = router;
 