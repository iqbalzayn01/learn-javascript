// DESTRUCTURING OBJECT & ARRAY //

const profile = {
    firstName: "Iqbal",
    lastName: "Zayyan",
    age: 22
}

// const firstName = profile.firstName;
// const lastName = profile.lastName;
// const age = profile.age;

// console.log(firstName);
// console.log(lastName);
// console.log(age);


// DESTRUCTURING OBJECT
// Penulisan sintaksis destructuring object pada ES6 menggunakan object literak {} di sisi kiri dari assignent operator.

// const {firstName, lastName, age} = profile;


// DESTRUCTUIRING ASSIGNMENT

// Nilai baru
// let firstName = "Dimas";
// let age = 20;

// Menginisialisasi nilai baru melalui destructuring object
// ({firstName, age} = profile); 
// saat amelakukan destructuring assignment, perlu menulis destructuring object di dalam tanda kurung (). Jika tidak akann membuat javascript mengira kita membuat block statement, sementara block statement tidak bisa berada pada sisi kiri assignment.


// Default Values
// const {firstName, age, isMale = false} = profile;


// Assigning to Different Local Variable Names
const {firstName: localFirstName, lastName: localLastName, age: localAge} = profile;



// DESTRUCTURING ARRAY
// Destructuring array serupa dengan destructuring object. Object menggunakan kurung kurawal {}, sedangkan array menggunakan kurung siku []. Destructuring array bekerja berdasarkan posisi daripada penamaan propertinya.

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthfood] = favorites;

// Kode di atas merupakan contoh proses destructuring array. Di dalam array favorites terdapat 4 nilai string yang masing-masing nilainya dimasukkan ke variable local firstFood, secondFood, thirdFood, fourthfood (nama variable local bebas). 

