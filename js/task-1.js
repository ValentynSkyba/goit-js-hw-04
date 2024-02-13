// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.



"use strict"
function slugify(title) {
    return title.toLowerCase().split(" ").join("-");
}

// Check by ChatGPT
// function slugify(title) {
//     title = title.trim(); // Видаляємо початкові та кінцеві пробіли
//     title = title.toLowerCase(); // Зменшуємо регістр
//     title = title.replace(/[^a-z0-9 -]/g, '') // Замінюємо недопустимі символи на порожні
//         .replace(/\s+/g, '-') // Замінюємо пробіли на дефіс
//         .replace(/-+/g, '-'); // Замінюємо дубльовані дефіси на один дефіс
//     return title;

//     !!!Використані інщі методи ніж.join зокрема.replace. 
//     Що таке / \ s g ???
// }

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
