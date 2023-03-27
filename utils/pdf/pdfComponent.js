import { itemsTotalAmount } from "../totalAmount.js";

const generateHeader = (doc, name, detailsName, address, email, contact) => {
  doc
    .image(`./others/allLogo/${name}.png`, 50, 65, { width: 40 })
    .fontSize(16)
    .text(detailsName, 200, 65, { align: "right" })
    .fontSize(9)
    .text(address, 200, 85, {
      align: "right",
    })
    .text("Email: ", 241, 98, {
      align: "left",
    })
    .fillColor("#0000FF")
    .text(email, 268, 98, { align: "left" })
    .fillColor("#000")
    .text(`Contact Number: ${contact}`, 330, 98, { align: "right" })
    .moveDown();
};

const receiptNumber = (doc, receiptId, tId, date, time) => {
  generateHr(doc, 140);

  doc
    .fillColor("#000")
    .fontSize(10)
    .font("Helvetica")
    .text("Receipt Number:", 50, 155)
    .font("Helvetica-Bold")
    .text(receiptId, 130, 155)
    .font("Helvetica")
    .text("Transaction ID: ", 390, 155, {
      align: "left",
    })
    .font("Helvetica-Bold")
    .text(tId, 390, 155, { align: "right" })
    .font("Helvetica")
    .text("Transaction Date: ", 390, 167, {
      align: "left",
    })
    .text(date, 390, 167, { align: "right" })
    .text("Transaction Time: ", 390, 179, {
      align: "left",
    })
    .text(time, 390, 179, { align: "right" });

  generateHr(doc, 200);
};

const customerInformation = (doc, email, contactNumber) => {
  doc
    .fillColor("#000")
    .fontSize(12)
    .font("Helvetica-Bold")
    .text("Donor Information", 50, 260);

  generateHr(doc, 282);

  doc
    .fontSize(10)
    .font("Helvetica")
    .text("Email-address:", 50, 292)
    .text(`${email}`, 150, 292)
    .font("Helvetica")
    .text("Contact Number:", 50, 307)
    .text(`${contactNumber ? contactNumber : ""}`, 150, 307);

  generateHr(doc, 327);
};

const generateTable = (doc, items) => {
  doc
    .fillColor("#000")
    .fontSize(12)
    .font("Helvetica-Bold")
    .text("Donation Detail", 50, 370);
  generateHr(doc, 392);

  let i;
  const invoiceTableTop = 402;
  doc.font("Helvetica-Bold");

  generateTableRow(
    doc,
    invoiceTableTop,
    "Particulars",
    "Quantity",
    "Rate",
    "Amount"
  );
  doc.font("Helvetica");

  let position;
  for (i = 0; i < items.length; i++) {
    const item = items[i];
    position = invoiceTableTop + (i + 1) * 30;
    generateTableRow(
      doc,
      position,
      item.name,
      item.qty,
      item.qty ? `$ ${item.price / item.qty}` : `$ ${item.price}`,
      `$ ${item.price}`
    );
  }

  generateHr(doc, position + 20);

  const subtotalPosition = invoiceTableTop + (i + 1) * 30;
  const totalAmount = itemsTotalAmount(items);
  doc.font("Helvetica-Bold");
  generateTableRow(doc, subtotalPosition, "", "", "Total", `$ ${totalAmount}`);
};

const generateTableRow = (doc, y, name, quantity, price, subTotal) => {
  doc
    .fontSize(10)
    .text(name, 50, y)
    .text(quantity, 200, y)
    .text(price, 350, y)
    .text(subTotal, 450, y, { width: 90, align: "right" });
};

const thankYouComponent = (doc) => {
  doc
    .fillColor("#9751A4")
    .fontSize(12)
    .font("Helvetica")
    .text("Thank you for your kind, Donation!", 50, 580, {
      align: "center",
      width: 500,
    });
};

const sponsorComponent = (doc) => {
  doc.lineJoin("round").rect(50, 630, 500, 150).fill("#14316C").stroke();
  doc
    .fillColor("#FFF")
    .fontSize(14)
    .font("Helvetica")
    .text("Sponsor’s A", 50, 700, {
      align: "center",
      width: 500,
    });
};

const footer = (doc) => {
  doc
    .fillColor("#000")
    .fontSize(9)
    .font("Helvetica")
    .text("Powered by: fund-a-charity.nz", 50, 810, {
      align: "right",
      width: 500,
    });
};

const generateHr = (doc, y) => {
  doc.strokeColor("#aaaaaa").lineWidth(1).moveTo(50, y).lineTo(550, y).stroke();
};

export {
  generateHeader,
  receiptNumber,
  customerInformation,
  generateTable,
  generateTableRow,
  generateHr,
  thankYouComponent,
  sponsorComponent,
  footer,
};
