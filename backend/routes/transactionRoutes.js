const express = require("express");
const router = express.Router();
const {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
  getSummary
} = require("../controllers/transactionController");

const authMiddleware = require("../middleware/authMiddleware");

[" ==========For Create Purpose=============="]
router.post("/", authMiddleware, createTransaction); 

[" ===========For Read Purpose============="]             
router.get("/", authMiddleware, getTransactions); 

[" ====================For Update Purpose==========="]
router.put("/:id", authMiddleware, updateTransaction); 

[" ===========For Delete Purpose==============="]         
router.delete("/:id", authMiddleware, deleteTransaction); 
 
[" ===================Overview=================="]     
router.get("/summary/data", authMiddleware, getSummary);     

module.exports = router;
