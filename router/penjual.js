const router = require('express').Router();

router.get('/makanan', (_, res) => {
    res.json({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post ('/penjual', (_,res) => {
    res.json({
        status : true,
        message : 'ini adalah method POST penjual'

    });

});

router.put ('/penjual', (_,res) => {
    res.json({
        status : true,
        message : 'ini adalah method POST penjual'

    });

});

router.delete ('/penjual', (_,res) => {
    res.json({
        status : true,
        message : 'ini adalah method POST penjual'

    });

});

module.exports = router;

