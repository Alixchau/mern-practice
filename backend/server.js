const express = require('express')
const app = express();
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT
const goalRoutes = require('./routes/goalRoutes');
app.use(express.json());//enable app to pass json
app.use(express.urlencoded({ extended: false }))
app.use('/api/goals', goalRoutes);
app.use(errorHandler) //overwirte the defaule express error handler

app.listen(port, () => console.log(`server started on port ${port}`))