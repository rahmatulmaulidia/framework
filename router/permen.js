const router = require ('express').Router();


 router.get('/permen', (_, res) => {
    res.json({
        status : true,
        message : 'Berhasil diakses'
    });
 });

 router.post ('/permen', (_, res) => {
    res.json({
        status : true,
        message : ' ini adalah method POST permen'
    });
 });

 router.put ('/permen', (_, res) => {
    res.json({
        status : true,
        message : ' ini adalah method POST permen'
    });
 });

 router.delete ('/permen', (_, res) => {
    res.json({
        status : true,
        message : ' ini adalah method POST permen'
    });
 });

 module.exports = router;
 