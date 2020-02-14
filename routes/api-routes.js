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
        db.Workout.find({}).then(function (response) {
            req.json(response);
        }).catch(err => {
            res.json(err);
        });
    });

    // Posts New Workouts to DB
    app.put("/api/workouts/:id", (req, res) => {
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
    app.get("/api/workouts/:id", (req, res) => {
        const id = req.params.id;
        db.Workout.findById(id, (err, response) => {
            if (err) {
                console.error(err)
            }
            res.json(response);
        });
    });

};