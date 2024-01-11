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
// Exercise #4
// ให้เขียน Query หายอดขายทั้งหมดในแต่ละปี
// โดยที่เรียงจากปีล่าสุดไปเก่าที่สุด
// ตัวอย่างผลลัพธ์ของการ Query
// 		{
// 		  _id: 2022,
// 		  total_price_per_year: 1036217.17
// 		}
// 		{
// 		  _id: 2021,
// 		  total_price_per_year: 4071891.16
// 		}
db.pizzaordertwo.aggregate([
  {
    $group: {
      _id: { $year: { $toDate: "$created_at" } },
      total_price_per_year: { $sum: "$total_price" },
    },
  },
  { $sort: { created_at: -1 } },
]);
