const calculatePoints = (receipt) => {
    let points = 0;
  
    // Alphanumeric characters in retailer name
    points += (receipt.retailer.match(/[a-zA-Z0-9]/g) || []).length;
  
    // Round dollar amount
    if (Number(receipt.total) % 1 === 0) points += 50;
  
    // Multiple of 0.25
    if (Number(receipt.total) % 0.25 === 0) points += 25;
  
    // Points for every two items
    points += Math.floor(receipt.items.length / 2) * 5;
  
    // Points for item descriptions
    receipt.items.forEach((item) => {
      const trimmedLength = item.shortDescription.trim().length;
      if (trimmedLength % 3 === 0) {
        points += Math.ceil(Number(item.price) * 0.2);
      }
    });
  
    // Day is odd
    const day = new Date(receipt.purchaseDate).getDate();
    if (day % 2 !== 0) points += 6;
  
    // Time between 2:00 PM and 4:00 PM
    const [hours, minutes] = receipt.purchaseTime.split(":").map(Number);
    if (hours === 14 || (hours === 15 && minutes === 0)) points += 10;
  
    return points;
  };
  
  module.exports = calculatePoints;
  