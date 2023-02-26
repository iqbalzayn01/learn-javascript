// WEAKMAP & WEAKSET
// WeakMap merupakan varian dari Map yang mendukung garbage collection. Garbage collection adalah proses di mana interpreter JavaScript mengambil kembali memori yang tidak lagi “dapat dijangkau” dan tidak dapat digunakan oleh program.

// Yang dimaksud weak dalam WeakMap adalah referensi terhadap nilai yang disimpan. Apabila suatu nilai yang disimpan di WeakMap sudah tidak terjangkau atau tidak bisa lagi diakses, maka referensi ke memorinya akan dihapus.

// Berikut ini adalah beberapa hal yang membedakan antara Map dan WeakMap:

// Key dari WeakMap harus berupa object atau array. Nilai primitif tidak bisa digunakan sebagai key karena tidak mendukung garbage collection.
// WeakMap memiliki method get(), set(), has(), dan delete(). Namun, WeakMap tidak termasuk kategori iterable sehingga tidak memiliki method keys(), values(), atau forEach().
// WeakMap juga tidak memiliki property size. Ini karena ukuran WeakMap dapat berubah karena proses garbage collection.
const { inspect } = require('util');

// let visitsCountMap = new Map();
let visitsCountMap = new WeakMap();

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);

jonas = null;

// setTimeout(function() {
//     console.log(visitsCountMap);
// }, 10000)

/* output
Map(1) { { name: 'Jonas' } => 1 }
*/


// Use WeakMap
// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
    console.log(inspect(visitsCountMap, { showHidden: true }));
}, 10000);

/* output
  WeakMap {  }
*/




