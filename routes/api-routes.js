// Requiring our model
const db = require("../models");


module.exports = function (app) {

    // Gets All Workouts From DB
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(function (response) {
            req.json(response);
        }).catch(err => {
            res.json(err);
        });
    });

    // Get workout data
    app.get("api/workouts/range", (req, res) => {
        db.Workout.find({}).populate(function (response) {
            req.json(response);
        }).catch(err => {
            res.json(err);
        });
    });

    // Get single workout by id.
    app.get("/api/workouts/:id", function (req, res) {
        const id = req.params.id;
        db.Workout.findById(id, function (err, dbWorkout) {
            if (err) {
                console.error(err)
            }
            res.json(dbWorkout);
        })
    })

    // Posts New Workouts to DB
    app.post("/api/workouts/:id", (req, res) => {
        const wrkt = { _id: req.params.id };
        db.Workout.findOneAndUpdate(wrkt, {
            $push: { exercises: [req.body] }
        }, (err, response) => {
            if (err) {
                res.json(err);
            } else {
                res.json(response);
            }
        });
    });

    // Get  Workout By ID
    app.post("/api/workouts", (req, res) => {
        // const id = req.params.id;
        db.Workout.create({ exercise: req.body }).then(function (response) {
            res.json(response);
        }).catch(err => {
            res.json(err);
        })
    });

};

