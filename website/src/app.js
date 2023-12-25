//****************** Require's ******************/
const express = require("express");
const path = require("path");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const methodOverride = require("method-override");
const session = require("express-session");
const logueadoMiddleware = require("./middleware/logueadoMiddleware");
const cors = require("cors");

//****************** Express() ******************/
const app = express();

//****************** Middlewares ******************/
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride("_method"));
app.use(
  session({ secret: "por noxus!", resave: false, saveUninitialized: false })
);
app.use(logueadoMiddleware);

//****************** Templates Engine ******************/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// ************ Route System require and use() ************
const mainRouter = require("./routers/main");
app.use("/", mainRouter);
const apiProductsRouter = require("./routers/api/products-router");

app.use("/api/products", apiProductsRouter);

const apiUsersRouter = require("./routers/api/user-router");

app.use("/api/users", apiUsersRouter);

// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
//****************** React ******************/
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PATCH,POST",
  credentials: true,
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
//****************** Export App ******************/
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Servidor Funcionando en el puerto ${PORT}`);
});
