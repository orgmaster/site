const { Router } = require("express");
const { route } = require("../app");

// import all routers;

const checkRouter = require('./check');

const router = Router();

router.get('/',(req,res) => {
    res.send('todo ok')
});
router.use('/check', checkRouter);

module.exports = router;