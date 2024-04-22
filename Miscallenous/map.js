const newMap = new Map();

// Adding key - value pairs to the map
newMap.set("Name", "John");
newMap.set("Age", 30);
newMap.set("Profession", "Software Engineer");


console.log(newMap.get("Profession"))
for (let [key, value] of newMap.entries()) {
  console.log(`${key} : ${value}`);
}

console.log(Boolean("f"))
