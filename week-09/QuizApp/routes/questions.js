const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'questions'
    })
})

module.exports = router;