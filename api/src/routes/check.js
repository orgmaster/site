const router = require('express').Router();

router.get('/',(req, res)=>{
    res.send('hola desde check')
})

module.exports = router;