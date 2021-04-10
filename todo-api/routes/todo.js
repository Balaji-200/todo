const express = require("express");
const router = express.Router();
const Todos = require("../models/todo");

router
  .route("/")
  .get((req, res, next) => {
    Todos.find({})
      .then(
        (todos) => {
          if (todos) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(todos);
          } else {
            Todos.create({})
              .then(
                (todos) => {
                  res.statusCode = 200;
                  res.setHeader("Content-Type", "application/json");
                  res.json(todos);
                },
                (err) => next(err)
              )
              .catch((err) => next(err));
          }
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    if (req.body != null)
      Todos.create(req.body)
        .then(
          (todos) => {
            if (todos != null) {
              req.method = "GET";
              res.redirect("/todo");
            }
          },
          (err) => next(err)
        )
        .catch((err) => next(err));
  });

router.route("/:todoId").delete((req, res, next) => {
  Todos.deleteOne({ _id: req.params.todoId })
    .then(
      (response) => {
        if (response != null) {
          res.redirect(303, "/todo");
        }
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});
module.exports = router;
