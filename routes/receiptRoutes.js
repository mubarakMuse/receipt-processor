const express = require("express");
const router = express.Router();
const receiptService = require("../services/receiptService");

// POST /receipts/process
router.post("/process", async (req, res) => {
  try {
    const receipt = req.body;
    const id = await receiptService.processReceipt(receipt);
    res.json({ id });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
});

// GET /receipts/:id/points
router.get("/:id/points", async (req, res) => {
  try {
    const { id } = req.params;
    const points = await receiptService.getPoints(id);
    res.json({ points });
  } catch (error) {
    console.error(error.message);
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
