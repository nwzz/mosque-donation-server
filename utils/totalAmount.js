const totalAmount = (arr) => {
  return arr.reduce((acc, curr) => acc + curr.amount, 0);
};

const itemsTotalAmount = (arr) => {
  return arr.reduce((acc, curr) => acc + curr.price, 0);
};

export { totalAmount, itemsTotalAmount };
