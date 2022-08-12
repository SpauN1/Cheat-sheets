'use strict';
// Метод filter предназначен для того, чтобы создавать новый массив, в котором будут только элементы, прошедшие проверку. То есть отфильтрованные массив. Например:
// const answers = ["IvAn", "AnnA", "Hello", "qwerty"];
// const result = answers.filter(item => item.length > 4);
// console.log(result)
// Этот код в переменную result запишет массив, в котором будут только элементы, у которых больше 4х символов. Мы отфильтровали массив.

// Метод же map тоже вернет нам новый массив, но только с видоизмененными данными. Он не убирает лишние элементы, а с каждым из них проводит операции. Например:
// const answers = ["IvAn", "AnnA", "Hello", "qwerty"];
// const result = answers.map(item => item.toLowerCase());
// console.log(result)
// Тут мы получим все те же 4 элемента, но каждый из них будет содержать только маленькие буквы. А в случае с filter у нас остается только 2 элемента.

//такие метоты как filter, map, reduce, возвращают новый массив


//filter фильтрует элементы внутри массива
const names1 = ['ivan', 'Ann', 'Ksenia', 'Voldemart'];
const shortNames = names1.filter(function (name) {
	return name.length < 5;
});
console.log(shortNames);


//map
// опять же вернемся к foreach, когда мы перебирали каждый элемент при помощи foreach, мы каждый из этих элементов никак не трансформировали 
// т.е мы никаких операции с ними особо не проводили именно в исходном массиве
//метод map позволяет взять исходный массив и изменить каждый элемент внутри него, на выходе получается новый массив уже с измененными данными
const answers = ['ivAn', 'AnnA', 'Hello'];
const result = answers.map((item) => item.toLocaleLowerCase());
console.log(result);


//reduce служит для того что бы схлопывать или собирать массив в одно единое целое
//считаем сумму всех чисел в массиве
const arr = [4, 5, 1, 3];  
								//  0     4  первая строчка здесь не обязательная, она больше тут для того что бы понимать как все работает
								//  4     5  скорей всего reduce будет начинатся с этой строки
								//  9     1
								//  10    3
								//  13 финальные результат
const res = arr.reduce((sum, current) => sum + current); //reduce принимает еще один аргумент и как второй аргумент в reduce можем передать изначальное значение
//пример onst res = arr.reduce((sum, current) => sum + current, 3);
//и тогда вместо sum который был 0 подставится 3
console.log(res);

//используем reduce со строками
const arr2 = ['apple', 'pear', 'plum'];
const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`);
console.log(res2);

//представим что получили такой объект и наша задача вытащить имена тех людей который находятся в этом объекте
const obj = {
	ivan: 'persone',
	ann : 'persone',
	dog: 'animal',
	cat: 'animal',
};

const newArr = Object.entries(obj) //в newArr уже лежит какой-то новый массив который мы сформировали при помощью Object.entries(obj);
//используем чейнинг (цепочку)
.filter((item) => item[1] === 'persone') //item это каждый отдельный массив пример №1[ 'ivan', 'persone' ], пример №2[ 'ann', 'persone' ]
.map((item) => item[0]); //почему map? Потому что нам необходимо взять исходный массив и трансформировать его
//entries он позволяет нам взять объект и превратить его в матрицу, то есть это будет массив массивов
console.log(newArr);
//был объект, а получился массив который опять же содержит еще массивы через запятую
//entries удобный метод когда нам необходимо поработать с каким-то объектом как с массимов и что-то с ним сделать


//every && some возвращают какое-то булиновое значение либо true либо false
//some берет массив и перебирает его и если у нас хотя бы один элемент подходит по какомо-ту условию которое мы зададим в callback функцию то в таком случае он нам вернет true, а если нет то false
//evert если все элементы внутри массива подходят под условие вернет true,а иначе false
const checkingForNumber = [4, 'qwe', 'qweasdzxc'];
console.log(checkingForNumber.some((item) => typeof(item) === 'number'));



const presidents = [
	{ first: 'George', last: 'Washington', born: 1732, died: 1799 },
	{ first: 'John', last: 'Adams', born: 1735, died: 1826 },
	{ first: 'Ronald', last: 'Reagan', born: 1911, died: 2004 },
	{ first: 'Gerald', last: 'Ford', born: 1913, died: 2006 },
	{ first: 'Richard', last: 'Nixon', born: 1913, died: 1994 },
	{ first: 'John F.', last: 'Kennedy', born: 1917, died: 1963 },
	{ first: 'Harry S.', last: 'Truman', born: 1884, died: 1972 },
	{ first: 'Grover', last: 'Cleveland', born: 1837, died: 1908 },
	{ first: 'Chester A.', last: 'Arthur', born: 1829, died: 1886 },
	{ first: 'Abraham', last: 'Lincoln', born: 1809, died: 1865 },
	{ first: 'Franklin', last: 'Pierce', born: 1804, died: 1869 },
	{ first: 'Lyndon B.', last: 'Johnson', born: 1908, died: 1973 },
	{ first: 'Dwight D.', last: 'Eisenhower', born: 1890, died: 1969 },
 ];


//  Array.prototype.filter()
//  1. Отфильтровать президентов которые родились в 1700-х годах.
const bonr1700 = presidents.filter((item) => item.born >= 1700 && item.born < 1800);
console.log(bonr1700);


//	Array.prototype.map()
//	2. Создать массив, который содержит только имя и фамилию каждого президента
 const nameAndSurname = presidents.map((presidents) => `${presidents.first}, ${presidents.last}`);
 console.log(nameAndSurname);


//  // Array.prototype.sort()
//  // 3. Отсортировать президентов по году рождения - от старшего к младшему 
 const yearOfBirth = presidents.sort((a, b) => {
	if (a.born > b.born) {
		return -1;
	} else {
		return 1;
	}
 });
 console.log(yearOfBirth);


// //  // Array.prototype.reduce()
// //  // 4. Подсчитать общее количество лет жизни всех президентов
 const totalLiveYears = presidents.reduce((acc, curr) => {
	return acc + (curr.died - curr.born);
 }, 0); //когда мы используем reduce для значения acc всегда нужно задавать начальное значение через ,
console.log(totalLiveYears);


// 5. Отсортировать президентов в зависимости от количества прожитых лет (от большего к меньшему)
const presidentsSort = presidents.sort((a, b) => {
	const aLived = a.died - a.born;
	const bLived = b.died - b.born;

	if (aLived > bLived) {
		return -1;
	} else {
		return 1;
	}
});
console.log(presidentsSort);


// 6. Создать список названий городов (City) и областей (County) Калифорнии содержащих "San"
// https://en.wikipedia.org/wiki/List_of_cities_and_towns_in_California
//  const table = document.querySelector('.sortable');
//  const links = [...table.querySelector('tbody').querySelectorAll('a')];
//  const names = links.map((link) => {
// 	return link.textContent;
//  }).filter((city) => {
// 	return city.includes('San');
//  });
//  console.log(names);


const writers = ['Василий, Жуковский', 'Александр, Грибоедов', 'Александр, Пушкин', 'Владимир, Даль',
'Николай, Языков', 'Федор, Тютчев', 'Николай, Гоголь', 'Алексей, Кольцов', 'Александр, Герцен',
'Иван, Гончаров', 'Михаил, Лермонтов', 'Пётр, Ершов', 'Алексей, Толстой', 'Даниил, Заточник',
'Александр, Радищев', 'Евгений, Баратынский', 'Петр, Вяземский', 'Александр, Бестужев-Марлинский',
'Михаил, Загоскин', 'Сергей, Аксаков', 'Владимир, Одоевский', 'Григорий, Данилевский',
'Алексей, Писемский', 'Дмитрий, Григорович', 'Яков, Полонский', 'Леонид, Андреев',
'Валерий, Брюсов', 'Саша, Черный', 'Юрий, Трифонов', 'Федор, Абрамов',
'Дмитрий, Кедрин', 'Василий, Шукшин'];


//  // 7. Упражнение по сортировке
//  // Отсортировать массив "writers" по фамилии в алфавитном порядке
 const writeName = writers.sort((writersA, writersB) => {
	const [firstA, lastA] = writersA.split(', '); //деструктуризация
	const [firstB, lastB] = writersB.split(', '); //деструктуризация
	return `${lastA > lastB ? 1: -1}`;
 });
 console.log(writeName);


 // 8. Упражнение по использованию метода Reduce
 // Подсчитать - сколько раз встречается каждый элемент в массиве
 const data = ['truck', 'car', 'car', 'truck', 'bike', 'walk', 'car', 'van', 'bike',
	'walk', 'car', 'van', 'car', 'truck'];

	const dataCount = data.reduce((objCount, transport) => {
		if (!objCount[transport]) {
			objCount[transport] = 0;
		}
		objCount[transport] = objCount[transport] + 1;
		return objCount;
	}, {}); //указываем то как будет выглядеть наша переменная objCount, в данном случае это объект
	console.log(dataCount);


 // 9. Упражнение по использованию методов .foEach и Object.keys();
 // Создать массив, который будет содержать только уникальные значения данного массива:
 const fruits = ['apples', 'bananas', 'oranges', 'apples', 'grapes', 'bananas', 'peaches',
	'strawberries', 'oranges', 'apricots', 'bananas'];

	const uniqueFruits = {};
	fruits.forEach((fruit) => {
		uniqueFruits[fruit] = true;
	});
	console.log(Object.keys(uniqueFruits));
