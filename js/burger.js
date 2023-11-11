class Hamburger{
  constructor(size, stuffing){
  this.size = size;
  this.stuffing = stuffing;
  this.additions = [];

  }
  addAdditions(additions){
    if(!this.additions.includes(additions)){
      this.additions.push(additions);
    }
  }
  removeAdditions(additions){
    const index = this.additions.indexOf(additions);
    if (index !== -1){
      this.additions.splice(index, 1);
    }
  }
  getAddings() {
    return this.additions;
  }
  getSize() {
    return this.size;
  }
  getStuffing() {
    return this.stuffing;
  }

  calcPrice() {
    const price = this.size.price + this.stuffing.price + this.additions.reduce((acc, additions) => acc + additions.price, 0);
    return price;
  }

  calcCalories() {
    const calories = this.size.calories + this.stuffing.calories + this.additions.reduce((acc, additions) => acc + additions.calories, 0);
    return calories;
  }
}

Hamburger.SIZE_SMALL = { price: 50, calories: 20 };
Hamburger.SIZE_BIG = { price: 100, calories: 40 };
Hamburger.STUFFING_CHEESE = { price: 10, calories: 20 };
Hamburger.STUFFING_SALAD = { price: 20, calories: 5 };
Hamburger.STUFFING_CUCUMBER = { price: 15, calories: 5 };
Hamburger.STUFFING_TOMATO = { price: 15, calories: 5 };
Hamburger.TOPPING_SPICE = { price: 15, calories: 0 };
Hamburger.TOPPING_MAYO = { price: 25, calories: 5 };



// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addAdditions(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log('Калорії:' + hamburger.calcCalories());

// скільки коштує
console.log('Ціна:' + hamburger.calcPrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addAdditions(Hamburger.TOPPING_SPICE);

// А скільки тепер коштує?
console.log('Ціна з приправою:'+ hamburger.calcPrice());