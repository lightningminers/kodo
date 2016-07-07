export const HASCONSOLE = typeof console !== undefined;
export const ISBROWSER = typeof window !== 'undefined' && typeof window === 'object';
export const UA = ISBROWSER && window.navigator.userAgent.toLowerCase();
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0;
export const isAndroid = UA && UA.indexOf('android') > 0;
export const isiOS = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
export const isWeChat = UA && UA.indexOf('micromessenger') > 0;

export default { HASCONSOLE, ISBROWSER, UA };
