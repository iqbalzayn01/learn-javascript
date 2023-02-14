// Map
// Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. 

// Mendefinisikan Map;
const myMap = new Map();

// Apabila ingin menetapkan nilai dari Map secara langsung, gunakan array multi dimensi seperti ini:
const myMap2 = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);
/* output
Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }
*/


// Ketika sudha membuat object Map, kita bisa mendapatkan nilanya berdasarkan key tertentu dengen metode get(). Lalu, untuk menambhakan pasangan key-value baru gunakan metode set().
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["Moscow", "Rusia"],
    ["Tokyo", "Japan"]
]);

// Mendapatkan
capital.get("Tokyo");

// Menambahkan key-value
capital.set("Berlin", "Jerman");

// Another feature
capital.has("Jakarta"); // feature Map()
capital.delete("Jakarta"); // feature Map()


