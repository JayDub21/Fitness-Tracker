// Requiring our model

const Workout = require("../models/workout");
// const db = require("../models");

module.exports = function(app) {
  // Gets All Workouts From DB
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(function(response) {
        res.json(response);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // Get workout data
  app.get("api/workouts/range", (req, res) => {
    Workout.find({})
      .then(function(response) {
        res.json(response);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // Get single workout by id.
  app.get("/api/workouts/:id", function(req, res) {
    const id = req.params.id;
    Workout.findById(id, function(err, response) {
      if (err) {
        console.error(err);
      }
      res.json(response);
    });
  });

  app.post("/api/workouts", (req, res) => {
    // const id = req.params.id;
    Workout.create({ exercise: req.body })
      .then(function(response) {
        res.json(response);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // Posts New Workouts to DB
  app.put("/api/workouts/:id", (req, res) => {
    console.log(`New Workout: ${req.body}`);
    const wrkt = { _id: req.params.id };
    Workout.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: { exercises: req.body }
      }
    ).then(function(response) {
      res.json(response);
    });
  });
};
