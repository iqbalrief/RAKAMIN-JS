// Mencari array random 50 dari 100 angka
const arr = [];
for (let i = 0; i < 50; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

// Memisahkan 2 array, array genap & array ganjil
const evenArr = [];
const oddArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenArr.push(arr[i]);
  } else {
    oddArr.push(arr[i]);
  }
}

// mencari nilai min, max, total, rata-rata untuk array ganjil
let evenMin = evenArr[0];
let evenMax = evenArr[0];
let evenTotal = 0;
for (let i = 0; i < evenArr.length; i++) {
  evenTotal += evenArr[i];
  if (evenArr[i] < evenMin) {
    evenMin = evenArr[i];
  }
  if (evenArr[i] > evenMax) {
    evenMax = evenArr[i];
  }
}
const evenAvg = evenTotal / evenArr.length;

// mencari nilai min, max, total, avg untuk array genap
let oddMin = oddArr[0];
let oddMax = oddArr[0];
let oddTotal = 0;
for (let i = 0; i < oddArr.length; i++) {
  oddTotal += oddArr[i];
  if (oddArr[i] < oddMin) {
    oddMin = oddArr[i];
  }
  if (oddArr[i] > oddMax) {
    oddMax = oddArr[i];
  }
}
const oddAvg = oddTotal / oddArr.length;

// Menampilkan hasil
console.log('Array random:', arr);
console.log('Array genap:', evenArr);
console.log('Array ganjil:', oddArr);
console.log('Nilai min array genap:', evenMin);
console.log('Nilai max array genap:', evenMax);
console.log('Total array genap:', evenTotal);
console.log('Rata-rata array genap:', evenAvg);
console.log('Nilai min array ganjil:', oddMin);
console.log('Nilai max array ganjil:', oddMax);
console.log('Total array ganjil:', oddTotal);
console.log('Rata-rata array ganjil:', oddAvg);