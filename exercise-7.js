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
// **Exercise #7**

// - ให้ Query หาเดือนที่มียอดขายรวมต่ำสุดในปี 2021
// - ตัวอย่างผลลัพธ์ของการ Query

//     ```jsx
//      {
//        _id: {
//          year: 2021,
//          month: 7
//        },
//        total_price_by_month: 384112.42
//      }
//     ```

db.pizzaordertwo.aggregate([
  {
    $match: {
      created_at: {
        $gte: new Date("2021-01-01"),
        $lt: new Date("2022-01-01"),
      },
    },
  },
  {
    $group: {
      _id: {
        year: { $year: { $toDate: "$created_at" } },
        month: { $month: { $toDate: "$created_at" } },
      },
      total_price_by_month: { $sum: "$total_price" },
    },
  },
  {
    $sort: {
      total_price_by_month: 1,
    },
  },
  {
    $limit: 1,
  },
]);
