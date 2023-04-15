// persegi.js
exports.luasPersegi = function(sisi) {
    return sisi * sisi;
  };
  
  exports.kelilingPersegi = function(sisi) {
    return 4 * sisi;
  };
  
  // persegiPanjang.js
  exports.luasPersegiPanjang = function(panjang, lebar) {
    return panjang * lebar;
  };
  
  exports.kelilingPersegiPanjang = function(panjang, lebar) {
    return 2 * (panjang + lebar);
  };
  