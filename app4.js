
const express = require("express");
const router = express.Router();
const companies = require("../data/companies");


router.get("/", (req, res) => {
  res.json({ companies: companies.getAll() });
});


router.get("/:code", (req, res) => {
  const company = companies.getByCode(req.params.code);
  if (!company) {
    return res.status(404).json({ error: "Company not found" });
  }
  res.json({ company: company });
});


router.post("/", (req, res) => {
  const { code, name, description } = req.body;
  const company = companies.add(code, name, description);
  res.status(201).json({ company: company });
});


router.put("/:code", (req, res) => {
  const { name, description } = req.body;
  const company = companies.update(req.params.code, name, description);
  if (!company) {
    return res.status(404).json({ error: "Company not found" });
  }
  res.json({ company: company });
});


router.delete("/:code", (req, res) => {
  const company = companies.delete(req.params.code);
  if (!company) {
    return res.status(404).json({ error: "Company not found" });
  }
  res.json({ status: "delete" });
});

module.exports = router;