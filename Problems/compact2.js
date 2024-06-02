const compact = function (obj) {
  if (typeof obj === "object") {
    if (obj instanceof Array) {
      let result = [];
      for (let i = 0; i < obj.length; i++) {
        if (Boolean(obj[i])) {
          result.push(compact(obj[i]));
        }
        
      }
      return result;
    } else {
      let result = {};
      for (key in obj) {
        if (Boolean(obj[key])) {
          result[key] = compact(obj[key]);
        }
      }
      return result;
    }
  } else {
    return obj;
  }
};

let obj = [null, false, 5, 6, 0, true];
console.log(compact(obj));
