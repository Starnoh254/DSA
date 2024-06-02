class EventEmitter {
    events = {}
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName , callback) {
    if(!this.events[eventName]){
        this.events[eventName] = new Set()
    }
    this.events[eventName].add(callback)
    return {
      unsubscribe: () => {
        this.events[eventName].delete(callback)
        return undefined
      },
    };
  }
  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName , args = []) {
    let result = [];
    (this.events[eventName] || []).forEach(element => {
        result.push(element(...args))
    });
    return result;
  }
}


const emitter = new EventEmitter();
const sub1 = emitter.subscribe("firstEvent", x => x + 1);
const sub2 = emitter.subscribe("firstEvent", x => x + 2);
sub1.unsubscribe(); // undefined
console.log(emitter.emit("firstEvent", [5]));