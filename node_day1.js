const xlsx= require('xlsx')
const path= require('path')
function addNumbers(num1, num2) {
 return num1 + num2;
}
const excel =xlsx.readFile("days/employee.xlsx");
const name=excel.SheetNames[0];
const file = excel.Sheets[name];

const jsonData = xlsx.utils.sheet_to_json(file);
let count=0
const processedEmployees = jsonData.map((employee) => {
    let bonus=0
if (employee.AnnualSalary>100000){
    bonus=0.10
}else if(employee.AnnualSalary>50000){
    bonus=0.07
}else{
    bonus=0.05
}
  const bonusAmount = employee.AnnualSalary * bonus;

return {
    ...employee, 
    bonus: bonus * 100 + "%", 
    BonusAmount: bonusAmount,
  };
});

const book = xlsx.utils.book_new();
const sheet = xlsx.utils.json_to_sheet(processedEmployees);

xlsx.utils.book_append_sheet(book, sheet, 'Sheet1');
const pathway = path.join(__dirname, 'output.xlsx');
xlsx.writeFile(book,pathway)
console.log("lexcel created at",pathway)
