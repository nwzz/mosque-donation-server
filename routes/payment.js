import express from "express";
import {
  allTransactionsSummary,
  allItemsSummary,
  dateTransactionsSummary,
  dateItemsSummary,
  payemntItemsList,
  getPaymentById,
  getPayment,
  addPayment,
  receiptSent,
  againReceiptSent,
} from "../controllers/payment.js";

const router = express.Router();

router.get(
  "/payment/:mosjidName/all/transaction/summary",
  allTransactionsSummary
); // not use this api
router.get(
  "/payment/:mosjidName/all/transaction/items/summary",
  allItemsSummary
); // not use this api
router.get("/payment/:mosjidName/transaction/summary", dateTransactionsSummary);
router.get("/payment/:mosjidName/transaction/items/summary", dateItemsSummary);
router.get("/payment/:mosjidName/:itemName/list", payemntItemsList);
router.get("/payment/get/:paymentId", getPaymentById);
router.get("/payment/:mosjidName", getPayment); // not use this api

router.post("/add/payment", addPayment);
router.put("/payment/:mosjidName/receipt/sent/:paymentId", receiptSent);
router.put(
  "/payment/:mosjidName/again/receipt/sent/:paymentId",
  againReceiptSent
);

export default router;
