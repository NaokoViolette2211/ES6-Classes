class Parent {
  constructor(_name, _country) {
    this.name = _name;
    this.country = _country;
  }
  hello() {
    console.log(`Hello, I'm ${this.name} and I immigrated from ${this.country}.`);
  }
}

const parent1 = new Parent('Ken', 'Brazil');
const parent2 = new Parent('Ann', 'China');

parent1.hello();
parent2.hello();

// Inheritance & Extends
class Child extends Parent {
  constructor (_name, _country, _age) {
    super(_name, _country);
    this.age = _age;
  }
  talk() {
    console.log(`Hi, I'm ${this.name} and I was born in ${this.country}. I'm ${this.age} years old.`)
  }
}

const child1 = new Child("Naomi", 'U.S.A', 10);
const child2 = new Child("Bob", 'Canada', 5);

child1.talk();
child2.talk();

const parents = [new Parent('Hanna', 'Japan'), new Parent('Brian', 'Spain')];

parents.push(new Child('Tom', 'Mexico'));

for (const p of parents) {
  p.hello();
}
  
  










// class ListBinding {
//   constructor (element) {
//     this.listElement = element;
//     this.textList = [];
//   }

//   /* makes an <li>text</li>element/tag */
//   static createListItem (text) {
//     const li = document.createElement("li");

//     li.textContent = text;

//     return li;
//   }

//   update() {
//     // Remove all existing <li> elements/ tags
//     while(this.listElement.firstChild) {
//       this.listElement.removeChild(this.listElement.firstChild);
//     }

//     /* Fill <ul>/ <ol> tag with <li>*/
//     for (const text of this.textList) {
//       this.listElement.appendChild(ListBinding.createListItem(text));
//     }
//   }

//   add (text) {
//     this.textList.push(text);
//     this.update();
//   }

//   remove (index) {
//     this.textList.splice(index, 1);
//     this.update();
//   }
// }