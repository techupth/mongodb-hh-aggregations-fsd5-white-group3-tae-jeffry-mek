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
// Exercise #2
// ให้เขียน Query โดยมีรายละเอียดดังนี้
// หายอดขายทั้งหมดและจำนวนของ Pizza ในแต่ละ Size
// โดยที่ให้เรียงผลลัพธ์ตามยอดขายที่มากที่สุด
// ตัวอย่างผลลัพธ์ของการ Query

//  {
//   _id: 'large',
//   total_amount: 1615081.93,
//   total_quantity: 3448
//  }
//  {
//   _id: 'small',
//   total_amount: 1750316.41,
//   total_quantity: 3468
//  }
//  {
//   _id: 'medium',
//   total_amount: 1742709.99,
//   total_quantity: 3543
//  }
db.pizzaordertwo.aggregate([
  {
    $group: {
      _id: "$size",
      totalPrice: { $sum: "$total_price" },
      quantity: { $sum: "$quantity" },
    },
  },
  { $sort: { total_price: 1 } },
]);
