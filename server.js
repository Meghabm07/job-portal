const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

//Init middleware
app.use(
    express.json({
        extended: false,
    })
);

app.use('/api/admin', require('./routes/admin/auth'));
app.use('/api/admin/category', require('./routes/admin/category'));
app.use('/api/admin/job', require('./routes/admin/job'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on ${PORT}`));