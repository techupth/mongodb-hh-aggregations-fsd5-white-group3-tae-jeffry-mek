export const orders = [
  {
    size: "small",
    total_price: 8535.91,
    quantity: 15,
    customer_name: "Ced",
    credit_card_type: null,
    created_at: "2021-07-18T10:02:12Z",
  },
];
// Exercise #1
// ให้เขียน Query หายอดเงินทั้งหมดที่จ่ายด้วยเงินสด และที่จ่ายด้วยบัตรเครดิตในแต่ละชนิด
// ตัวอย่างผลลัพธ์ของการ Query
//  {
//   _id: 'mastercard',
//   total_paid: 1432896.81
//  }
//  {
//   _id: null,
//   total_paid: 3675211.52
//   }

db.pizzaordertwo.aggregate([
  { $group: { _id: "$credit_card_type", totalPrice: { $sum: "$total_price" } } },
]);
