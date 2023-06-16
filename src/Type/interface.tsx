import React from 'react';
export interface Iproduct {
    title:string
    image:string
     price: number
    description:string

}
export interface Ibasket {
    title:string
    image:string
    id:number
    qauntity:string
     price: number
    description:string

}
export interface Ifavorite {
    title:string
    image:string
    id:number
    qauntuty:string
     price: number
    description:string

}
export interface Iinput {
    title:string
    id: string | any
    img: string
      // sent:any
    price:string
}