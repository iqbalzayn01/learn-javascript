// SET
// Set merupakan kumpulan nilai (set of values). Struktur data pada Set tidak berurutan dan tidak diindeks. Data bersifat unik dan tidak ada duplikasi.
const numberSet = new Set([1, 4, 6, 4, 1]);

/* output
Set(3) { 1, 4, 6 }
*/

// Menambahkan
// Fungsi add() hanya menerima satu argumen. Jika Anda memasukkan array, maka array tersebut akan dianggap sebagai satu elemen sendiri. Nilai yang duplikat akan diabaikan.
numberSet.add(5);
numberSet.add(7);

/* output
Set(5) { 1, 4, 6, 5, 10 }
*/

// Delete
// Ingat bahwa Set tidak memiliki urutan atau index, sehingga argumen yang dimasukkan ke dalam fungsi delete adalah nilai yang ingin dihapus, bukan index-nya.
numberSet.delete(4);



