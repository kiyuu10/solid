interface IAnimal {
  swim();
  walk();
  fly();
  run();
}

class Dog implements IAnimal {
  swim() {}
  walk() {}
  fly() {
    // dog don't fly
  }
  run() {}
}
