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
// Exercise #3
// ให้เขียน Query กรอง Document ที่ได้จาก Exercise #2
// ให้แสดงผลแค่ข้อมูลยอดขายทั้งหมดและจำนวนของ Pizza ใน Size medium
// ตัวอย่างผลลัพธ์ของการ Query
// 	 {
// 	  _id: 'medium',
// 	  total_amount: 1742709.99,
// 		  total_quantity: 3543
// 	 }
db.pizzaordertwo.aggregate([
  {
    $match: { size: "medium" },
  },
  {
    $group: {
      _id: "$size",
      totalPrice: { $sum: "$total_price" },
      quantity: { $sum: "$quantity" },
    },
  },
]);
