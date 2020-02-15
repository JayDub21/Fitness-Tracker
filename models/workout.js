const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WktSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{
        type: { type: String },
        name: { type: String },
        distance: { type: Number },
        duration: { type: Number },
        weight: { type: Number },
        reps: { type: Number },
        sets: { type: Number },
    }],
    // This is where you need : totalDuration: Number
});

const Workout = mongoose.model("Workout", WktSchema);

module.exports = Workout;