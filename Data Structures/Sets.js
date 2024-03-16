const myset = new Set();
myset.add(1);
myset.add(2);

myset.add(2);
console.log(myset.has(2));
myset.delete(2);

for (const item of myset) {
  console.log(item);
}
