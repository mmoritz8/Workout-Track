const router = require("express").Router();
const Workout = require("models/fitnessModels.js");
const path = require("path");

router.get("/exercise", (req, res) => {
    res
        .status(200)
        .sendFile(path.join("/Users/nanaem808moritz/Desktop/Homeworks/Workout-Track/public/exercise.html"));
});

router.get("/stats", (req, res) => {
    res
        .status(200)
        .sendFile(path.join("/Users/nanaem808moritz/Desktop/Homeworks/Workout-Track/public/stats.html"));
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("api/workouts/:id", (req, res) => {
    let query = req.params.id;
    Workout.find({
        request: query
    });
});

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;