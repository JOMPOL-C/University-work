// Array Methods
const users = [
  { id: 1, name: "John", email: "john.s@gmail.com" },
  { id: 2, name: "Mary", email: "marysocute@gmail.com" },
  { id: 3, name: "Somchai", email: "yourdad@gmail.com" }
];

for (let i = 0; i < users.length; i++) {
  console.log(users[i].name);
}
console.log("-------------------");

for (const user of users) {
  console.log(user.name);
}
console.log("-------------------");

users.forEach((user) => {
  console.log(user.name);
});
console.log("-------------------");

const userNames = users.map((user) => user.name);

console.log(userNames);

const product = [
    { name: 'ปากกา', stork: 10},
    { name: 'ดินสอ', stork: 15},
    { name: 'ยางลบ', stork: 8},
    { name: 'ไม้บรรทัด', stork: 12},
];

const lowStock = product.filter((product) => product.stork < 10); // กรองสินค้าใน stock ที่น้อยกว่า 10

console.log(lowStock);

const cartItem = [
  { name: 'เสื้อยืด', price: 199 ,quantity: 4},
  { name: 'กางเกง', price: 250 ,quantity: 8},
  { name: 'รองเท้า', price: 690 ,quantity: 2},
  { name: 'หมวก', price: 79 ,quantity: 12},
]

// for...of
let totalPrice = 0

for (const item of cartItem) {
    totalPrice += item.price * item.quantity; // คูณ ราคาสินค้า กับ จำนวนของ
}

console.log(totalPrice);
// reduce

totalPrice = cartItem.reduce((total ,currentItem) => {
    return total + (currentItem.price * currentItem.quantity);
}, 26)
console.log(` มูลค่ารวมทั้งหมด ${totalPrice} บาท`);

//ค้นหา
const findResult = cartItem.find((item) => item.name === "หมวก");

console.log(findResult);

const players = [
  { name: 'FIA', scores: 177},
  { name: 'SHOYU', scores: 190},
  { name: 'CHOMPOO', scores: 142},
  { name: 'SABA & POPI', scores: 255},
]

//show player_name is have higher scores

const totalplayers = players.filter((players) => players.scores > 150);
console.log(totalplayers);

const sorttotalplayers = totalplayers.sort((a ,b) => b.scores - a.scores);
console.log(sorttotalplayers);

const nameHiPlayer = sorttotalplayers.map((players) => players.name);
console.log(nameHiPlayer);

const topScores = players
.filter(players => players.scores > 150)
.sort((a ,b)  => b.scores = a.scores)
.map((players) => players.name);

console.log(topScores);

const someResult = players.some((players) => players.scores > 200)
console.log(someResult);

const everyResult = players.every((players) => players.scores > 200);
console.log(everyResult);

