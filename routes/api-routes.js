// Requiring our model
const db = require("../models");


module.exports = function (app) {

    // Gets All Workouts From DB
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .sort({ "day": 1 }).then(function (response) {
                res.json(response);
            }).catch(err => {
                res.json(err);
            });
    });

    // Get workout data
    app.get("api/workouts/range", (req, res) => {
        console.log(`Range: ${req}`)
        db.Workout.find({}).then(function (response) {
            req.json(response);
        }).catch(err => {
            res.json(err);
        });
    });

    // Get single workout by id.
    app.get("/api/workouts/:id", function (req, res) {
        const id = req.params.id;
        db.Workout.findById(id, function (err, response) {
            if (err) {
                console.error(err)
            }
            res.json(response);
        })
    })

    // Posts New Workouts to DB
    app.put("/api/workouts/:id", (req, res) => {
        console.log(`New Workout: ${req.body}`);
        const wrkt = { _id: req.params.id };
        db.Workout.findOneAndUpdate({ _id: req.params.id },
            {
                $push: { exercises: req.body }
            }).then(function (response) {
                res.json(response);
            })
    });


    app.post("/api/workouts", (req, res) => {
        // const id = req.params.id;
        db.Workout.create({ exercise: req.body }).then(function (response) {
            res.json(response);
        }).catch(err => {
            res.json(err);
        })
    });

};

