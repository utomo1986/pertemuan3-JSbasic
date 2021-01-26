/*
Exercise

1. Console log data diri
    a.Nama
    b.Asal daerah
    c.Tanggal lahir
    d.Umur
    e.Posisi pekerjaan
*/
let profile = {
    name: 'Utomo Hadi',
    city: 'Purwokerto',
    birthday: '4 October 1986',
    age: '34',
    job: 'Jobless',
}

console.log(profile.name);
console.log(profile.city);
console.log(profile.birthday);
console.log(profile.age);
console.log(profile.job);

/*
2. Membuat interaksi kepada user
Prompt data berikut:
Nama user
Asal Negara
Confirm data user. Apakah data yang diisi sudah benar?
Alert “Terima kasih sudah mengisi form”
*/

let name = prompt("Name")
let country = prompt("country")

let konfirmasi = confirm("Apakah data yang diisi udah benar?");
if (konfirmasi) {
    alert("Terima kasih sudah mengisi form");
} else {
    alert("Data yang diisi tidak benar");
}

/*
3. Berikan single comments pada setiap baris data diri yang ada pada soal nomor 1


*/
//1
let profile = {
    //2
    name: 'Utomo Hadi',
    //3
    city: 'Purwokerto',
    //4
    birthday: '4 October 1986',
    //5
    age: '34',
    //6
    job: 'Jobless',
    //7
}

//a
console.log(profile.name);
//b
console.log(profile.city);
//c
console.log(profile.birthday);
//d
console.log(profile.age);
//e
console.log(profile.job);

/*
4. Berikan multiple comments pada fitur soal nomor 2

*/
/*1
2
*/
let name = prompt("Name")
/*1
2
*/
let country = prompt("country")
/*1
2
*/
let konfirmasi = confirm("Apakah data yang diisi udah benar?");
/*1
2
*/
if (konfirmasi) {
    alert("Terima kasih sudah mengisi form");
/*1
2
*/
} else {
    alert("Data yang diisi tidak benar");
}
/*1
2
*/

/*
5. Buat variabel untuk menampung data diri yang telah dibuat pada nomor 1. Lalu panggil dan tampilkan dengan menggunakan console log
*/



/*
6. Lakukan operasi matematika berikut. Simpan hasil pada sebuah variabel untuk masing-masing operasi.
25 + 10
100 * 2
99 / 2
99 % 2

*/

// Penjumlahan
var a = 25;
var b = 10;

var total = a + b;
console.log(total);

// Perkalian
var a = 100;
var b = 2;

var total = a * b;
console.log(total);

// Pembagian
var a = 99;
var b = 2;

var total = a / b;
console.log(total);

// Modulus
var a = 99;
var b = 2;

var total = a % b;
console.log(total);


