export interface NavbarItem {
    name:string,
    link?:string,
    icon?:string,
    subMenu?:Array<NavbarItem>,
    subMenuClicked?:boolean,
    chakra?:boolean
}