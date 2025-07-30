const employees = [
  {
    id: 1,
    name: "ก้องภพ",
    department: "IT",
    position: "Developer",
    salary: 65000,
    startDate: "2021-04-15",
    isActive: true,
  },
  {
    id: 2,
    name: "วิมล",
    department: "Marketing",
    position: "Marketing Manager",
    salary: 92000,
    startDate: "2019-08-01",
    isActive: true,
  },
  {
    id: 3,
    name: "สมศักดิ์",
    department: "IT",
    position: "Senior Developer",
    salary: 88000,
    startDate: "2018-02-20",
    isActive: false,
  },
  {
    id: 4,
    name: "จินตนา",
    department: "Sales",
    position: "Sales Rep",
    salary: 58000,
    startDate: "2022-11-10",
    isActive: true,
  },
  {
    id: 5,
    name: "อมร",
    department: "IT",
    position: "Developer",
    salary: 68000,
    startDate: "2023-07-01",
    isActive: true,
  },
  {
    id: 6,
    name: "สุดา",
    department: "Sales",
    position: "Sales Manager",
    salary: 105000,
    startDate: "2017-05-30",
    isActive: true,
  },
];

// ข้อ 1: สร้าง Array ใหม่ที่มีเฉพาะข้อมูลของพนักงานที่ ยังทำงานอยู่ทั้งหมด
const workingmen = employees.filter((employees) => employees.isActive === true);
console.log(workingmen);

// ข้อ 2: สร้าง Array ใหม่ที่เก็บเฉพาะ ชื่อ ของพนักงานทุกคน
const nameemployee = employees.map((employees) => employees.name);
console.log(nameemployee);

// ข้อ 3: หาข้อมูลของพนักงานที่มี id เท่ากับ 4
const findemployee = employees.find((employees) => employees.id === 4);
console.log(findemployee);

// ข้อ 4: ตรวจสอบว่ามีพนักงานคนใดคนหนึ่งที่ทำงานในแผนก 'Marketing' หรือไม่ (ตอบเป็น true หรือ false)
const someemployee = employees.some((employees) => employees.department === "Marketing");
console.log(someemployee);

// ข้อ 5: หารายชื่อของพนักงานทุกคนที่อยู่ในแผนก 'IT'
const ITemployee = employees
.filter((employees) => employees.department === "IT")
.map((employees) => employees.name);
console.log(ITemployee);

// ข้อ 6: คำนวณ เงินเดือนรวมทั้งหมด ที่บริษัทต้องจ่ายให้พนักงาน ทุกคน ในแต่ละเดือน
const salaryemployees = employees.reduce((total, employee) => total + employee.salary, 0);
console.log(`มูลค่ารวมทั้งหมด ${salaryemployees} บาท`);

// ข้อ 7: หาข้อมูลของพนักงานที่ เงินเดือนสูงสุด ในบริษัท (เอามาแค่คนเดียว)
const highsalary = employees.sort((a ,b) => b.salary - a.salary);
console.log(highsalary[0]);

// ข้อ 8: หารายชื่อของพนักงานที่เริ่มทำงาน หลังปี 2020 และ ยังทำงานอยู่ จากนั้นจัดเรียงชื่อตามลำดับตัวอักษร
const yearsEmployee = employees
.filter((employees) => employees.startDate > "2020" && employees.isActive === true)
.sort((a ,b)  => a.name.localeCompare(b.name))
.map((employees) => employees.name)
console.log(yearsEmployee);

// ข้อ 9: คำนวณ เงินเดือนเฉลี่ย ของพนักงานในแผนก 'IT' ที่ ยังทำงานอยู่
const salaryaverageIT = employees
  .filter((employee) => employee.department === "IT" && employee.isActive === true);

const totalIT = salaryaverageIT.reduce((sum, emp) => sum + emp.salary, 0);

const averageIT = salaryaverageIT.length > 0 ? totalIT / salaryaverageIT.length : 0;

console.log(`เงินเดือนเฉลี่ยของแผนก IT คือ ${averageIT} บาท`);

// ข้อ 10: สร้าง Array ใหม่ของพนักงานที่ยังทำงานอยู่ โดยปรับเปลี่ยนรูปแบบข้อมูลเป็น { fullName: '...', details: 'ตำแหน่ง - แผนก' }
const activeEmployeesFormatted = employees
  .filter((employee) => employee.isActive)
  .map((employee) => ({
    fullName: employee.name,
    details: `${employee.position} - ${employee.department}`,
  }));

console.log(activeEmployeesFormatted);
