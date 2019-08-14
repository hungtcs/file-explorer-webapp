
const defaultConverter = function(value: string | boolean) {
  if(typeof(value) === 'undefined') {
    return false;
  }
  if(typeof(value) === 'string') {
    return true;
  }
  return !!value;
}

export function Convert2Boolean(converter: Function = defaultConverter) {
  return function(target: any, key: string) {
    const definition = Object.getOwnPropertyDescriptor(target, key);
    if(definition) {
      Object.defineProperty(target, key, {
        get: definition.get,
        set: function(value) {
          definition.set(converter(value));
        },
        enumerable: true,
        configurable: true,
      });
    } else {
      Object.defineProperty(target, key, {
        get: function() {
          return this[`_$${ key }`];
        },
        set: function(value) {
          this[`_$${ key }`] = converter(value);
        },
        enumerable: true,
        configurable: true,
      });
    }
  }
}
