var createError = require('http-errors');
var express = require('express');
var path = require('path');
const layouts = require("express-ejs-layouts")
var homeController = require('./controllers/homeController')

// Initialize app
var app = express();

// Set-up port and connection
const port = 8080
app.listen(port)
console.log(`The server is listening on port number: ${port}`)

// Set-up static layout (header + footer)
app.use(layouts)

// Use assets from public directory
app.use(express.static("public"))

// Set-up view engine (ejs)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up all routes

app.get("/", homeController.respondWithHome)

app.get("/resources", homeController.respondWithAbout);

app.get("/contact", homeController.respondWithContact);

app.get("/home", homeController.respondWithHome);

app.get("/groups", homeController.respondWithMembership);

app.get("/SM", homeController.respondWithSM);

app.get("/BW", homeController.respondWithBW);

app.get("/WE", homeController.respondWithWE);

app.get("/DA", homeController.respondWithDA);

app.get("/BI", homeController.respondWithBI);

app.get("/CB", homeController.respondWithCB);

app.get("/CF", homeController.respondWithCF);

app.get("/CR", homeController.respondWithCR);

app.get("/AX", homeController.respondWithAX);

app.get("/DS", homeController.respondWithDS);

app.get("/DN", homeController.respondWithDN);

app.get("/IH", homeController.respondWithIH);

app.get("/JP", homeController.respondWithJP);

app.get("/LV", homeController.respondWithLV);

app.get("/MT", homeController.respondWithMT);

app.get("/SJ", homeController.respondWithSJ);

app.get("/SN", homeController.respondWithSN);

app.get("/YG", homeController.respondWithYG);

app.get("/YS", homeController.respondWithYS);

app.get("/CD", homeController.respondWithCD);

app.get("/GN", homeController.respondWithGN);

app.get("/SC", homeController.respondWithSC);

app.post("/contact", homeController.postedContactForm);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
