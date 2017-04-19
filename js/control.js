// +++ Задача 1.1 +++
const rectangle = {
	width: '5sm',
	height: '15sm',
	getSquare: function () {
		return parseFloat(this.width) * parseFloat(this.height) + ' sm2';
	}
}

console.log('Площадь:', rectangle.getSquare());

// +++ Задача 1.2 +++
const price = {
  price: 10,
  discount: '15%',
  getPrice: getPrice,
  getPriceWithDiscount: getPriceWithDiscount
};

function getPrice() {
  return this.price;
}

function getPriceWithDiscount() {
  return parseFloat(this.price) * (100 - parseFloat(this.discount)) / 100;
}

console.log('Цена:', price.getPrice());
console.log('Цена с учетом скидки:', price.getPriceWithDiscount());

// +++ Задача 1.3 +++
const user = {
  name: 'Abraham',
  getName: getUserName
};

function getUserName() {
  return this.name;
}

console.log('Имя пользователя:', user.getName());

// +++ Задача 1.4 +++
const object = {
  height: 10,
  heightPlusOne: heightPlusOne
};

function heightPlusOne() {
  this.height++;
}

console.log('Высота:', object.height);
object.heightPlusOne();
console.log('Высота +:', object.height);
object.heightPlusOne();
console.log('Высота ++:', object.height);

// +++ Задача 1.5 +++
const numerator = {
  value: 1,
  double: double,
  plusOne: plusOne,
  minusOne: minusOne
};

function double() {
  this.value *= 2;
  return this;
}

function plusOne() {
  this.value++;
  return this;
}

function minusOne() {
  this.value--;
  return this;
}

numerator.double().plusOne().plusOne().minusOne();
console.log('Значение вычислителя:', numerator.value);

// +++ Задача 1.6 +++
const   user2 = { name: 'Abraham'},
		otherUser = {
			name: 'John',
			getName: function() {return this.name}
		};

user2.getName; // метод getName вне зоны видимости объекта user2
user2.getName = otherUser.getName; // у объекта user2 создали метод и присвоили ему функцию getName из объекта otherUser
user2.getName(); //Abraham - вызвали метод getName который вернул name из области видимости объекта user2
otherUser.getName(); //John	 - вызвали метод getName который вернул name из области видимости объекта otherUser

// +++ Задача 2.1 +++
function getList() {return this.list;}
let users = {
	length: 4,
	list: ['Abraham', 'James', 'John', 'Steven'],
}
getList(); // undefined - нет контекста
users.getList = getList;
users.getList(); // создали метод getList и присвоили ему функцию = выводит массив ["Abraham", "James", "John", "Steven"]
getList.call(users); // вызвали метод getList в контексте users = выводит массив ["Abraham", "James", "John", "Steven"]

// +++ Задача 2.2 +++
let product = {
	retailPrice: 350,
	amount: 22,
	totalPrice: function() {return this.retailPrice * this.amount;}
}
console.log('Общая стоимость всех товаров:', product.totalPrice()); 

// +++ Задача 2.3 +++
let detail = {
	retailPrice: 10,
	amount: 20,
}
detail.totalPrice = product.totalPrice;
console.log('Общая стоимость деталей:', detail.totalPrice());

// +++ Задача 2.4 +++
let sizes = {width:5, height:10};

getSquare = function () {return this.width * this.height;}

console.log('Площадь объекта:', getSquare.call(sizes));


// +++ Задача 2.4 +++
let numbers = [4, 12, 0, 10, -2, 4];		
var getNumbers = Math.min.apply(null, numbers);
console.log('Минимальное значение:', getNumbers);

// +++ Задача 2.5 +++
const element = {
	height: '15px',
	marginTop: '5px',
	marginBottom: '5px',
	getFullHeight: function() {
		return parseFloat(this.height) + parseFloat(this.marginTop) + parseFloat(this.marginBottom);
	}
};
console.log('Полная высота для element:', element.getFullHeight());

const block = {
	height: '5px',
	marginTop: '3px',
	marginBottom: '3px'
};
console.log('Полная высота для block:', element.getFullHeight.call(block));

// +++ Задача 2.6 +++
let element2 = {
	height: 25,
	getHeight: function() {return this.height;}
};
let getElementHeight = element2.getHeight.bind(element2);
console.log('getElementHeight:', getElementHeight());