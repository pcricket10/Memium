const createError = require('http-errors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./db/models');
const session = require('express-session');
const { sessionSecret } = require('./config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const indexRouter = require('./routes/index');
const { restoreUser } = require('./auth');
const usersRouter = require('./routes/users');
const memeRouter = require('./routes/meme');


const app = express();

const store = new SequelizeStore({ db: sequelize });
app.use(session({
    secret: sessionSecret,
    store,
    saveUninitialized: false,
    resave: false,
  })
);
store.sync()
app.use(restoreUser);

app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(sessionSecret));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

app.use(usersRouter);

// set up session middleware
// app.use('/users', usersRouter);
app.use(memeRouter);
// app.use('/meme', memeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
