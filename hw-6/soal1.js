const persegi = require('./persegi.js');
const persegiPanjang = require('./persegiPjg.js');

console.log('Luas persegi dengan sisi 5:', persegi.luasPersegi(5));
console.log('Keliling persegi dengan sisi 5:', persegi.kelilingPersegi(5));

console.log('Luas persegi panjang dengan panjang 5 dan lebar 3:', persegiPanjang.luasPersegiPanjang(5, 3));
console.log('Keliling persegi panjang dengan panjang 5 dan lebar 3:', persegiPanjang.kelilingPersegiPanjang(5, 3));
