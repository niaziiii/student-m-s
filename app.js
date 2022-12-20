const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const AppError = require('./utillties/appError');
const globalErrorHandler = require('./controller/errorController')
const app = express();

const userRouter = require('./routes/userRoute');
const bookRoute = require('./routes/bookRoute');


app.use(express.static(`${__dirname}/public/`));

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }))
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(compression())
app.use(cors())


app.use('/api/users', userRouter);
app.use('/api/books', bookRoute);


app.all('*', (req, res, next) => {
    console.log(req.originalUrl);
    next(new AppError(`Error :: cant find router -> ${req.originalUrl} <-`, 404))
})

app.use(globalErrorHandler)


module.exports = app;




