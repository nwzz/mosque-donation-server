import moment from "moment";
import asyncHandler from "express-async-handler";
import Payment from "../models/payment.js";
import { totalAmount } from "../utils/totalAmount.js";
import itemsAmount from "../utils/itemsAmount.js";
import paymentPDF from "../utils/pdf/paymentPdf.js";
import { sentReceipt } from "../sendmail/payment.js";

const allTransactionsSummary = asyncHandler(async (req, res) => {
  try {
    const { mosjidName } = req.params;

    const allQuery = { mosjidName };
    const successQuery = { mosjidName, status: "SUCCESS" };
    const cancelQuery = { mosjidName, status: "CANCELLED" };

    const allTransactions = await Payment.find(allQuery).select("amount");
    const successTransactions = await Payment.find(successQuery).select(
      "amount"
    );
    const cancelTransactions = await Payment.find(cancelQuery).select("amount");

    const allAmount = totalAmount(allTransactions);
    const successAmount = totalAmount(successTransactions);
    const cancelAmount = totalAmount(cancelTransactions);

    res.status(200).send({
      totalTransaction: {
        amount: allAmount,
        length: allTransactions.length,
      },
      successTransaction: {
        amount: successAmount,
        length: successTransactions.length,
      },
      cancelTransaction: {
        amount: cancelAmount,
        length: cancelTransactions.length,
      },
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

const allItemsSummary = asyncHandler(async (req, res) => {
  try {
    const { mosjidName } = req.params;
    const query = { mosjidName, status: "SUCCESS" };

    const transactions = await Payment.find(query).select("items");
    const itemsTransaction = itemsAmount(transactions);

    res.status(200).send(itemsTransaction);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

const dateTransactionsSummary = asyncHandler(async (req, res) => {
  try {
    const { mosjidName } = req.params;
    const { startDate, endDate } = req.query;

    const tempDate =
      startDate && endDate
        ? moment(endDate).endOf("day").toDate()
        : moment(endDate).startOf("day").toDate();

    const date = {
      $gte: moment(startDate).startOf("day").toDate(),
      $lte: tempDate,
    };

    const allQuery = { mosjidName, date };
    const successQuery = { mosjidName, date, status: "SUCCESS" };
    const cancelQuery = { mosjidName, date, status: "CANCELLED" };

    const allTransactions = await Payment.find(allQuery).select("amount");
    const successTransactions = await Payment.find(successQuery).select(
      "amount"
    );
    const cancelTransactions = await Payment.find(cancelQuery).select("amount");

    const allAmount = totalAmount(allTransactions);
    const successAmount = totalAmount(successTransactions);
    const cancelAmount = totalAmount(cancelTransactions);

    res.status(200).send({
      totalTransaction: {
        amount: allAmount,
        length: allTransactions.length,
      },
      successTransaction: {
        amount: successAmount,
        length: successTransactions.length,
      },
      cancelTransaction: {
        amount: cancelAmount,
        length: cancelTransactions.length,
      },
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

const dateItemsSummary = asyncHandler(async (req, res) => {
  try {
    const { mosjidName } = req.params;
    const { startDate, endDate } = req.query;
    const tempDate =
      startDate && endDate
        ? moment(endDate).endOf("day").toDate()
        : moment(endDate).startOf("day").toDate();

    const date = {
      $gte: moment(startDate).startOf("day").toDate(),
      $lte: tempDate,
    };

    const query = { mosjidName, date, status: "SUCCESS" };

    const transactions = await Payment.find(query).select("items");
    const itemsTransaction = itemsAmount(transactions);

    res.status(200).send(itemsTransaction);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

const payemntItemsList = asyncHandler(async (req, res) => {
  try {
    const { mosjidName, itemName } = req.params;
    const { startDate, endDate, status } = req.query;
    const tempDate =
      startDate && endDate
        ? moment(endDate).endOf("day").toDate()
        : moment(endDate).startOf("day").toDate();

    const date = {
      $gte: moment(startDate).startOf("day").toDate(),
      $lte: tempDate,
    };

    let query = {
      mosjidName,
      date,
      "items.name": itemName,
    };
    if (status) query.status = status;
    if (query["items.name"] === "all") delete query["items.name"];

    const payments = await Payment.find(query)
      .select({
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
      })
      .sort({ updatedAt: -1 });

    // const payments = await Payment.find(query, {
    //   "items.$": 1,
    //   mosjidName: 1,
    //   referenceId: 1,
    //   status: 1,
    //   finalMessage: 1,
    //   amount: 1,
    //   cardType: 1,
    //   date: 1,
    //   email: 1,
    //   contactNumber: 1,
    //   receipt: 1,
    // }).sort({ updatedAt: -1 });

    //fake commit

    res.status(202).send(payments);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

const getPaymentById = asyncHandler(async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.paymentId).select({
      createdAt: 0,
      updatedAt: 0,
      __v: 0,
    });
    if (!payment) {
      res.status(404).send({
        message: "Payment Not Found",
      });
    } else {
      res.status(200).send(payment);
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

const getPayment = asyncHandler(async (req, res) => {
  try {
    const { mosjidName } = req.params;
    const { status, date } = req.query;
    let query = {
      mosjidName,
    };
    if (date) {
      const upDate = moment(date).startOf("day");
      query.date = {
        $gte: upDate.toDate(),
        $lte: moment(upDate).endOf("day").toDate(),
      };
    }
    if (status) query.status = status;

    const payments = await Payment.find(query)
      .select({
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
      })
      .sort({ updatedAt: -1 });
    res.status(200).send(payments);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

const addPayment = asyncHandler(async (req, res) => {
  try {
    const { items, payment, mosjidName } = req.body;
    const {
      reference_id,
      result,
      final_message,
      total_amount,
      surcharge_amount,
      card_type,
    } = payment;

    const tempItems = items.map((item) => {
      return { ...item, price: Number(item.price) };
    });
    const createObj = {
      mosjidName: mosjidName,
      referenceId: reference_id,
      status: result,
      finalMessage: final_message,
      amount: total_amount - surcharge_amount,
      cardType: card_type,
      date: new Date(),
      items: tempItems,
    };

    const createPayment = await Payment.create(createObj);

    res.status(201).send({
      paymentId: createPayment._id,
      message: "Payment Successfully Completed",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

const receiptSent = asyncHandler(async (req, res) => {
  try {
    const { mosjidName, paymentId } = req.params;
    const payment = await Payment.findById(paymentId);
    if (!payment) {
      res.status(404).send({
        message: "Payment Not Found",
      });
    } else {
      const { email, contactNumber, pdfHeader } = req.body;

      payment.email = email;
      payment.contactNumber = contactNumber;
      payment.receipt = email ? "sent" : "not sent";

      const allPayments = await Payment.find({ mosjidName });

      paymentPDF(payment, allPayments?.length, pdfHeader);
      await payment.save();
      await sentReceipt(email, payment._id);

      res.status(202).send({
        message: "Receipt successfully sent!",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

const againReceiptSent = asyncHandler(async (req, res) => {
  try {
    const { mosjidName, paymentId } = req.params;
    const payment = await Payment.findById(paymentId);
    if (!payment) {
      res.status(404).send({
        message: "Payment Not Found",
      });
    } else {
      const { email, contactNumber, pdfHeader } = req.body;
      payment.email = email;
      payment.contactNumber = contactNumber;
      payment.receipt = email ? "sent" : "not sent";

      const allPayments = await Payment.find({ mosjidName });

      paymentPDF(payment, allPayments?.length, pdfHeader);
      await payment.save();
      await sentReceipt(email, payment._id);

      res.status(202).send({
        message: "Receipt successfully sent!",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

export {
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
};
