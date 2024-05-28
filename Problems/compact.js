const compactObject = function (obj) {
  if (obj instanceof Array) {
    let result = [];
    for (let i = 0; i < obj.length; i++) {
      if (obj[i] instanceof Object) {
        let recursiveResults = compactObject(obj[i]);
        if (recursiveResults !== undefined && Boolean(recursiveResults)) {
          result.push(recursiveResults);
        }
      } else if (Boolean(obj[i])) {
        result.push(obj[i]);
      }
    }
    return result;
  } else if (obj instanceof Object) {
    let result = {};
    for (let key in obj) {
      if (obj[key] instanceof Object) {
        let recursiveResults = compactObject(obj[key]);
        if (recursiveResults !== undefined && Boolean(recursiveResults)) {
          result[key] = recursiveResults;
        }
      } else if (Boolean(obj[key])) {
        result[key] = obj[key];
      }
    }
    return result;
  }
  return obj;
};

let obj = {
  o: 11,
  a: 68,
  m: 18,
  v: true,
  b: false,
  h: null,
  r: false,
  p: 93,
  l: true,
  k: "",
  n: 79,
  f: 18,
  u: null,
  j: null,
  e: null,
  z: {
    d: true,
    t: null,
    o: 21,
    w: null,
    m: 82,
    k: 35,
    l: 26,
    r: 45,
    b: false,
    z: 0,
    i: null,
    c: 33,
    p: 69,
    j: 27,
    e: 53,
    q: 97,
    h: true,
    a: true,
    n: true,
    f: 73,
    u: null,
  },
  w: 12,
  y: 0,
  q: "",
  t: null,
  s: true,
  x: false,
  c: true,
  i: false,
  g: 29,
};
console.log(compactObject(obj));
