const express = require('express');
const app = express();
const userController = require('../controllers/userController');

const router = express.Router();

app.use('/', router);

router.get('/', (req, res)=>{
    res.send('Welcome To the BajajFinserv');
})
router.get('/bfhl', userController.getUsers);
router.post('/bfhl', userController.createUser);

module.exports = router;

