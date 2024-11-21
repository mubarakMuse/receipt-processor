const receiptModel = require("../models/receiptModel");
const calculatePoints = require("../utils/pointCalculator");

const processReceipt = async (receipt) => {
  if (!receipt || !receipt.retailer || !receipt.total || !receipt.items || !receipt.purchaseDate || !receipt.purchaseTime) {
    throw new Error("Invalid receipt data");
  }

  const id = receiptModel.generateId();
  const points = calculatePoints(receipt);
  receiptModel.saveReceipt(id, { receipt, points });
  return id;
};

const getPoints = async (id) => {
  const receipt = receiptModel.getReceipt(id);
  if (!receipt) {
    throw new Error("Receipt not found");
  }
  return receipt.points;
};

module.exports = { processReceipt, getPoints };
