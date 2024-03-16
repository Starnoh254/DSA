function towerOfTanoi(n, fromDisk, toDisk, usingDisk) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromDisk} to ${toDisk}`);
    return;
  }
  towerOfTanoi(n - 1, fromDisk, usingDisk, toDisk);
  console.log(`Move disk ${n} from ${fromDisk} to ${toDisk}`);
  towerOfTanoi(n - 1, usingDisk, toDisk, fromDisk);
}

towerOfTanoi(4, "A", "C", "B");
