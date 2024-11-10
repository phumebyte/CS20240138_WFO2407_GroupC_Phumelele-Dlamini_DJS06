// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sfiso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. forEach basics:
// Iterating over each province in provinces and logs it. 
provinces.forEach((province) =>
  console.log("forEach Province Name", province)
);
// Iterating over each name in names and logs it. 
names.forEach((name) =>
  console.log("forEach Name", name)
); 
// For each name in names array, console log the name and its corresponding province from provinces based on the same index. (index matching)
names.forEach(
  (name, index) =>
    console.log(
      "Name (Province)",
      `${name} (${provinces[index]})`
    ) 
);

// 2. Uppercase Transformation
const upProvinces = provinces.map((province) => province.toUpperCase());
// Displays the transformed array. 
console.log("2.Uppercase Transformation", upProvinces);

// 3. Name Lengths
// Map function creates an array containing all the lengths of the names in the names array.
const nameLengths = names.map((name) => name.length);
//  Returns the array of name lengths.
console.log("3.Name Lengths", nameLengths);