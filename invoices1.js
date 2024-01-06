
const express = require("express");
const router = express.Router();
const invoices = require("../data/invoices");

router.get("/", (req, res) => {
  res.json({ invoices: invoices.getAll() });
});

router.get("/:id", (req, res) => {
  const invoice = invoices.getById(req.params.id);
  if (!invoice) {
    return res.status(404).json({ error: "Invoice not found" });
  }
  res.json({ invoice: invoice });
});

router.post("/", (req, res) => {
  const { comp_code, amt } = req.body;
  const invoice = invoices.add(comp_code, amt);
  res.status(201).json({ invoice: invoice });
});

router.put("/:id", (req, res) => {
  const { amt } = req.body;
  const invoice = invoices.update(req.params.id, amt);
  if (!invoice) {
    return res.status(404).json({ error: "Invoice not found" });
  }
  res.json({ invoice: invoice });
});

router.delete("/:id", (req, res) => {
  const invoice = invoices.delete(req.params.id);
  if (!invoice) {
    return res.status(404).json({ error: "Invoice not found" });
  }
  res.json({ status: "deleted" });
});

module.exports = router;