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
// Exercise #5
// ให้เขียน Query หายอดขายทั้งหมดในแต่ละเดือนและปี
// โดยที่เรียงจากปีและเดือนล่าสุดไปเก่าที่สุด
// ตัวอย่างผลลัพธ์ของการ Query
// {
//     "_id": {
//       "month": "2022-02-16T07:36:19Z",
//       "year": "2022-02-16T07:36:19Z"
//     },
//     "total_sales": 7529.32
//   },
//   {
//     "_id": {
//       "month": "2022-02-16T07:36:19Z",
//       "year": "2022-02-16T07:36:19Z"
//     },
//     "total_sales": 8535.91
//   },
db.pizzaordertwo.aggregate([
  {
    $group: {
      _id: {
        month: { $month: { $toDate: "$created_at" } },
        year: { $year: { $toDate: "$created_at" } },
      },
      total_sales: { $sum: "$total_price" },
    },
  },
  {
    $sort: {
      "_id.year": -1,
      "_id.month": -1,
    },
  },
]);
