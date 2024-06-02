class EventEmitter {
  events = {};
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (eventName in this.events) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
    return {
      unsubscribe: () => {
        // code here
        this.events[eventName] = this.events[eventName].filter(
          (element) => element != callback
        );
        return undefined;
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    let functions = this.events[eventName];
    if (!functions) return [];
    else {
      let result = [];
      for (let i = 0; i < functions.length; i++) {
        result.push(functions[i](...args));
      }
      return result;
    }
  }
}

const emitter = new EventEmitter();
const sub1 = emitter.subscribe("firstEvent", x => x + 1);
const sub2 = emitter.subscribe("firstEvent", x => x + 2);
sub1.unsubscribe(); // undefined
emitter.emit("firstEvent", [5]); // [7]
