/*
* 添加 actions 
* 创建一组我们的应用程序可以响应的消息类型
*  这个const /type模式, 允许我们以易于访问和可重构的方式, 使用 TypeScript 的字符串字面量类型.
*/

export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;

export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';
export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;