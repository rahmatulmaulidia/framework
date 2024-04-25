
const router = require('express').Router();

router.get('/makanan', (_, res) => {
    res.json({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post('/makanan', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method POST makanan'
    });
}); 

router.put('/makanan', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah Method PUT makanan'
    });
});

router.delete('/makanan', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method DELETE makanan'
    });
});

module.exports = router;
