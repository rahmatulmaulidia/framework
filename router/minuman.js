const router = require('express').Router();

router.get('/minuman', (_, res) => {
    res.json({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post('/minuman', (_,res)=>{
    res.json({
        satatus : true,
        message : 'ini adalah method POST minuman'
    });
});

router.put('/minuman', (_,res)=>{
    res.json({
        satatus : true,
        message : 'ini adalah method POST minuman'
    });
});

router.delete('/minuman', (_,res)=>{
    res.json({
        satatus : true,
        message : 'ini adalah method POST minuman'
    });
});



module.exports = router;

