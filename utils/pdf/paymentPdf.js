import PDFDocument from "pdfkit";
import fs from "fs";
import moment from "moment-timezone";
import {
  generateHeader,
  customerInformation,
  generateTable,
  receiptNumber,
  thankYouComponent,
  sponsorComponent,
  footer,
} from "./pdfComponent.js";
import receiptID from "../receiptNumber.js";

const paymentPDF = (payment, totalPayment, header) => {
  const { _id, email, contactNumber, referenceId, items, date } = payment || {};
  const {
    mosjid_address,
    email_address,
    contact_number,
    mosjid_details_name,
    mosjid_name,
  } = header;

  const receiptId = receiptID(totalPayment);

  const pdfDate = moment().tz("Pacific/Auckland").format("YYYY-MM-DD");
  const pdfTime = moment().tz("Pacific/Auckland").format("h:mm A");

  const path = `./others/pdf/${_id}.pdf`;
  let doc = new PDFDocument({
    size: "A4",
    margins: {
      top: 50,
      bottom: 10,
      left: 50,
      right: 50,
    },
  });

  generateHeader(
    doc,
    mosjid_name,
    mosjid_details_name,
    mosjid_address,
    email_address,
    contact_number
  );
  receiptNumber(doc, receiptId, referenceId, pdfDate, pdfTime);
  customerInformation(doc, email, contactNumber);
  generateTable(doc, items);
  thankYouComponent(doc);
  sponsorComponent(doc);
  footer(doc);
  doc.end();
  doc.pipe(fs.createWriteStream(path));
};

export default paymentPDF;

//  doc.lineJoin("square").rect(50, 150, 500, 200).stroke();
