interface IRunnable {
  run();
}

interface ISwimable {
  swim();
}

interface IFlyable {
  fly();
}

interface IWalkable {
  walk();
}

class Dogs implements IRunnable, IWalkable {
  run() {}
  walk() {}
}
