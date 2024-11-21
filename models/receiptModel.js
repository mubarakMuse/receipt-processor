const { v4: uuidv4 } = require("uuid");

const receipts = {}; // In-memory data store

const generateId = () => uuidv4();

const saveReceipt = (id, receiptData) => {
  receipts[id] = receiptData;
};

const getReceipt = (id) => receipts[id];

module.exports = { generateId, saveReceipt, getReceipt };
