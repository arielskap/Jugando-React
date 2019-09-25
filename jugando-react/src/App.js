import React, { Component } from 'react'
import Productos from './productos'
export class App extends Component {
    state = {
        infoProducts:[
            {
                img:'http://marvilimpieza.com/image/products/multicar.jpeg',
                tittle:'Liquido Limpieza de Auto',
                description:'Liquido para dejar el auto reluciente',
                price:'150',
                rebaja:'10'
            },
            {
                img:'http://www.qvarvenezuela.com/productos/img/automotriz/galon_freedox.png',
                tittle:'Refrigerante Anticorrosivo',
                description:'Ni idea',
                price:'75',
                rebaja:'0'
            },
            {
                img:'https://tequilacorralejo.mx/assets/base/img/productos/tequila-anejo-99000-horas/360/large/20.jpg',
                tittle:'Perfume',
                description:'Vas a oler como campeon',
                price:'6000',
                rebaja:'75'
            },
            {
                img:'https://www.hayduk.com.pe/img/products/img-product1.png',
                tittle:'Fish Meal',
                description:'Es algo de un pescado',
                price:'350',
                rebaja:'5'
            }
        ]
    }
    render() {
        const {infoProducts}=this.state
        return (
            <Productos infoProductsData={infoProducts}/>
        )
    }
}

export default App