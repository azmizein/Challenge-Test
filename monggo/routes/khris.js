const router = require("express").Router();
const Skills = require("../models/Skills")
const Contact = require("../models/Contact")

router.post("/newContact", async (req,res) => {
    try {
        const newContact = new Contact({
                name: req.body.name,
                email: req.body.email,
                project: req.body.project
        });
        const contact = await newContact.save();
        res.status(200).json(contact);
    } catch (err) {
        res.status(500).json(err)
    }

})

router.get("/getAll", async (req, res) => {
    try {
        const getContact = await Contact.find();
        res.status(200).send(getContact);
      } catch (err) {
        res.status(400).send(err);
      }  
})

router.get("/getSkills/:id", async (req, res) => {
    try {
      const post = await Skills.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;