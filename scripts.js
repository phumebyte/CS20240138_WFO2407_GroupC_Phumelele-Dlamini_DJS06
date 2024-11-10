// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sfiso', 'Shailen', 'Frikkie']

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

// 4. Sorting
// Sorts the provinces in Alphabetical order
const sortedProvinces = [...provinces].sort();
console.log("4.Sorting", sortedProvinces)

// 5. Filtering "Cape"
// filter returns an array of provinces that do not contain the word  "Cape".
const nonCape = provinces.filter((province) => !province.includes("Cape"));
console.log("5.Filtering Cape", nonCape.length);

// 6. Finding 's' 
// convert the strings to lowercase first then mapping checks if each name contains the letter "s" 
const containingS = names.map((name) => name.toLowerCase().includes("s"));
console.log("6. Finding s", containingS);

//  7. Creating Object Mapping 
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
// Log the nameProvinceMap object. 
console.log("7.Creating Object Mapping", nameProvinceMap);


// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. Log Products 
// map extracts the product name from each item while join("/n") will create join the string on a new line .
console.log(
  products.map((item) => item.product).join("\n")
);

// 2. Filter by Name Length 
// filter targets products whose product name length has 5 or fewer characters. 
console.log(
  products
    .filter((item) => item.product.length <= 5)
    .map((item) => item.product)
);

//  3. Price Manipulation */
console.log(
  products
    .filter(// filter selects items with non-empty and non-blank price. 
      (item) => item.price !== "" && item.price !== " "
    ) 
    .map((item) =>// map converts each price to a number.
      Number(item.price)
    )  
    .reduce(// reduce sums the prices starting with 0. 
      (sum, price) => sum + price,
      0
    ) 
);


