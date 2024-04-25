const router = require ('express').Router();

router.get('/harga', (_, res )=> {
    res.json({
        status : true,
        message : ' Berhasil Diakses'
    });
});

router.post('/harga', (_, res )=> {
    res.json({
        status : true,
        message : ' ini adalah method POST dari harga '
    });
});

router.put('/harga', (_, res )=> {
    res.json({
        status : true,
        message : ' ini adalah method POST dari harga'
    });
});

router.delete('/harga', (_, res )=> {
    res.json({
        status : true,
        message : ' ini adalah method POST dari harga'
    });
});

module.exports = router;