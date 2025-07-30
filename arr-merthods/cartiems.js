const products = [
  {
    id: 101,
    name: "หูฟังบลูทูธ Sony",
    category: "Electronics",
    price: 4590,
    stock: 15,
  },
  {
    id: 102,
    name: "คีย์บอร์ด Mechanical",
    category: "Electronics",
    price: 2800,
    stock: 8,
  },
  {
    id: 201,
    name: "หนังสือ The Pragmatic Programmer",
    category: "Books",
    price: 850,
    stock: 30,
  },
  {
    id: 202,
    name: "หนังสือ Clean Code",
    category: "Books",
    price: 799,
    stock: 0,
  }, // สินค้าหมด
  {
    id: 301,
    name: "แก้วกาแฟ Starbucks",
    category: "Lifestyle",
    price: 550,
    stock: 25,
  },
];

const user = {
  name: "สมศักดิ์",
  shoppingCart: [
    { productId: 101, quantity: 1 }, //หูฟัง Sony 1 อัน
    { productId: 201, quantity: 2 },
    { productId: 102, quantity: 1 },
    { productId: 202, quantity: 1 },
    { productId: 301, quantity: 1 },
  ],
};

function processCart(customer ,productList) {
    console.log(`=========== start process "${customer.name}"==========`);

const enrichedCart = customer.shoppingCart.map((item) => {
    const productDetail = productList.find((p) => p.id === item.productId)
    
    // check ว่าสินค้าใน stock มีพอให้ลูกค้ามั้ย productDetails.stock // มีพอให้ลูค้ามั้ย item.quantity
    //สินค้าไม่เพียงพอ
    if (productDetail.stock < item.quantity) {
        console.warn(` "${productDetail.name}"หาไม่เจอหรอก มันหมดแล้ว`)
    } return {
        ...productDetail,
        quantity: item.quantity,
        subtotal: productDetail.price * item.quantity,
    };
});

    const availableItem = enrichedCart.filter((item) => item !== null);
    // คำนวณราคารวม totalprice => reduct
    const totalPrice = availableItem.reduce((a ,b) => a.price - b.price);
    // เรียงรายการสินค้าจากราคาสูงไปต่ำ
    const sortItem = availableItem.sortt();

    sortItem.forEach(item => {
         // หูฟังบลูทูธ Sony x 1 | ราคา 4990 ฿
    });
    console.log("----------------------------")
   //ยอดรวมสุทธิ
   console.log("==============================")

}
processCart(user ,products)