const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('server runs on port 3000')
});

module.exports = router;
const brandRouter = require('./routes/brands');
app.use('/brands', brandRouter);