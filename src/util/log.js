/*日志打印*/

import { HASCONSOLE } from './env';

let log = {
  warn() {},
  info() {},
  dir() {},
};

if (process.env.NODE_ENV !== 'production') {
  log = {
    warn(msg, e) {
      if (HASCONSOLE) {
        console.warn('[KODO Warning]:', msg);
        if (e) {
          throw e;
        } else {
          const warning = new Error('WARNING STACK TRACE');
          console.warn(warning.stack);
        }
      }
    },
    info(msg) {
      if (HASCONSOLE) {
        console.info('[KODO INFO]:', msg);
      }
    },
    dir(el) {
      const isString = typeof el === 'string';
      if (isString) {
        const arr = document.querySelectorAll(el);
        if (Array.isArray(arr) && arr.length) {
          console.dir(arr);
        }
      } else {
        console.dir(el);
      }
    },
  };
}

export default log;
