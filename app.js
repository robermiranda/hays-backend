var express = require('express');
var logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
const tiendasRouter = require('./routes/tiendas');
const tiendaRouter = require('./routes/tienda');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', cors(), indexRouter);
app.use('/tiendas', cors(), tiendasRouter);
app.use("/tienda", cors(), tiendaRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.send({status:"error", msg:"404. Resource Not Found"});
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.error('ERROR 500.',err.message);

  // render the error page
  res.status(err.status || 500);
  res.send({status:"error", msg:"ERROR 500."});
});

module.exports = app;
