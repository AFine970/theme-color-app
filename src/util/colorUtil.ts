/*
 * @Date: 2021-10-22 00:19:37
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-10-24 19:52:32
 * @Description: 改变主题色方法
 */

export function changeColor(prop: string, value: string) {
    const docEle: HTMLElement = document.documentElement
    
    // get value
    // getComputedStyle(docEle).getPropertyValue(prop)

    // set value
    docEle.style.setProperty(prop, value)
}

const ls = window.localStorage;

export function getStorageColor(prop: string) {
    return ls.getItem(prop);
}

export function setStorageColor(prop: string, value: string) {
    ls.setItem(prop, value);
}