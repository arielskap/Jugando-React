import React, { Component } from 'react'

export class Price extends Component{
    render(){
        var {priceData}=this.props;
        var {rebajaData}=this.props;
        return(
            <div className="px-6 py-4">
            {rebajaData==='0' ?
                <div className="flex flex-col">
                    <span className="w-100 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        ${priceData}
                    </span>
                </div>
                :
                <div className="flex flex-col">
                    <span className="w-100 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 line-through mb-2">
                        ${priceData}
                    </span>
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        ${priceData-((priceData*rebajaData)/100)}
                    </span>
                </div>
            }
            </div>
        )
    }
}
export class ProductBody extends Component{
    render(){
        const rows = this.props.infoProductsData.map((row,index)=>{
            const {price} = row;
            const {rebaja} = row;
            return(
                <div className="w-1/1 sm:w-1/2 md:w-1/4 lg:w-1/6 flex flex-col justify-center rounded overflow-hidden shadow-lg my-6 text-center" key={index}>
                    <img className="object-contain w-full h-48" src={row.img} alt={row.description}/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{row.tittle}</div>
                        <p className="text-gray-700 text-base">
                        {row.description}
                        </p>
                    </div>
                    <Price priceData={price} rebajaData={rebaja}/>
                </div>
            )
        });
        return (
            <div className="flex flex-wrap justify-center">{rows}</div>
        )
    }
}
export class Productos extends Component {
    render() {
        const {infoProductsData}=this.props
        return (
            <ProductBody infoProductsData={infoProductsData}/>
        )
    }
}

export default Productos