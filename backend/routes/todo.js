const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    res.json({"GET": "all todo"})
});

router.get("/:id", (req, res) => {
    res.json({"GET": "a specific todo"})
});

router.post("/", (req, res) => {
    res.json({"POST": "a todo"})
});

router.delete("/:id", (req, res) => {
    res.json({"DELETE": "a single todo"})
});

router.patch("/:id", (req, res) => {
    res.json({"PATCH": "a single todo"})
});

module.exports = router;