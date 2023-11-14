const express = require('express');


const router = express.Router();

router.get('/', (req, res) => {
    const users = ['human', 'elf', 'dwarf', 'gnome', 'halfling'];
    res.status(200).json(users);
});

router.post("/register", (req, res) => {
    const { username, password } = req.body;
    const newUser = {
        id: Date.now(), 
        username,
        password
    };
    res.status(201).json(newUser);
});




module.exports = router;