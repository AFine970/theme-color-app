/*
 * @Date: 2021-10-22 00:19:37
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-10-24 19:35:17
 * @Description: 改变主题色方法
 */

export default function(prop: string, value: string) {
    const docEle: HTMLElement = document.documentElement
    
    // get value
    // getComputedStyle(docEle).getPropertyValue(prop)

    // set value
    docEle.style.setProperty(prop, value)
}