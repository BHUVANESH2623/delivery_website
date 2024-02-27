import mysql from "mysql2";

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "Bhuvi@123",
//   database: "deliveryapp",
// });

const db = mysql.createConnection(
  `mysql://avnadmin:AVNS_zDt2MyQWGSd7K8FX0VF@mysql-26437d1a-projectdev.a.aivencloud.com:20951/deliveryapp`
);

export default db;
