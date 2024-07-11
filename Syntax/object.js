if (true) {
  let blockScopedVar = "I'm block-scoped";
  const anotherBlockScopedVar = "I'm also block-scoped";
  console.log(blockScopedVar); // This will work
}
console.log(blockScopedVar); // This will throw an error
