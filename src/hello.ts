function greet(person: String, date: Date) {
  console.log(`Hello, ${person}, today is ${date.toDateString()}`);
}

greet('Alena', new Date());
