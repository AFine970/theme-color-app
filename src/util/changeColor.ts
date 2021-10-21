/*
 * @Date: 2021-10-22 00:19:37
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-10-22 00:22:25
 * @Description: 改变主题色方法
 */

export default function(color: string) {
    const docEle: HTMLElement = document.documentElement
    docEle.style.setProperty('--light-theme-color', '#777111')
}