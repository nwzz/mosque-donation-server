const receiptID = (num) => {
  let receipt = "20240";
  if (num < 10) receipt += ` 00${num + 1}`;
  else if (num < 100) receipt += ` 0${num + 1}`;
  else receipt += ` ${num + 1}`;
  return receipt;
};

export default receiptID;
