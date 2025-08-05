
### 1. ติดตั้ง Node.js

ดาวน์โหลดและติดตั้ง Node.js ได้จาก [https://nodejs.org](https://nodejs.org)

ตรวจสอบเวอร์ชัน:
```bash
node -v
npm -v
```
ติดตั้ง package.json:
```bash
npm init -y
```

ติดตั้ง Express:
```bash
npm install express
```

ติดตั้ง Nodemon:
```bash
npm install nodemon --save-dev
```

## 🛠️ เพิ่ม Script สำหรับรัน Nodemon
เปิดไฟล์ package.json แล้วแก้ไขส่วน "scripts" แบบนี้:
```bash
"scripts": {
  "start": "nodemon app.js"
}
```

#### How to run:
```bash
npx nodemon app.js
```
