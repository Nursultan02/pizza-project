import React, {Component} from 'react';
import {products} from "./data";

const ProductContext = React.createContext()

class ProductProvider extends Component {
    state = {
        products: [...products],
        methods: {
            plusClass: (id, productId) => this.plusClass.bind(this, id, productId),
            addToCart: (id) => this.addToCart.bind(this, id),
            addItem: (id) => this.addItem.bind(this, id),
            minusItem: (id) => this.minusItem.bind(this, id),
            deleteItem: (id) => this.deleteItem.bind(this, id),
            clearCart: () => this.clearCart.bind(this)
        },
        isCartEmpty: true,
        inCart: [],
        priceOfAll: 0
    }

    priceOfAll = () => {
        const newProducts = [...this.state.products]
        const newInCart = [...this.state.inCart]
        let newPriceOfAll = 0

        newInCart.map(productId => {
            newPriceOfAll = newPriceOfAll + newProducts[productId].totalCost
        })

        this.setState({
            priceOfAll: newPriceOfAll
        })
    }

    addToCart = (id) => {
        const newProducts = [...this.state.products]
        const newProduct = newProducts[id-1]
        let newInCart = [...this.state.inCart, id-1]
        let newPriceOfAll = 0

        newInCart.map(productId => {
            newPriceOfAll = newPriceOfAll + newProducts[productId].totalCost
        })

        newProduct.inCart = true
        newProduct.totalCost = newProduct.price[newProduct.lengthClass]

        this.setState({
            products: newProducts,
            isCartEmpty: false,
            inCart: newInCart,
            priceOfAll: newPriceOfAll
        })
    }

    clearCart = () => {
        let newInCart = [...this.state.inCart]

        newInCart.map(itemIndex => {
            this.deleteItem(itemIndex+1)
        })
        newInCart = []

        this.setState({
            inCart: newInCart,
            isCartEmpty: true,
            priceOfAll: 0
        })
    }

    deleteItem = (id) => {

        const newProducts = [...this.state.products]
        const newProduct = newProducts[id-1]
        let newInCart = [...this.state.inCart]

        const inCartNew = newInCart.filter(itemId =>  itemId !== id-1)
        newProduct.inCart = false
        newProduct.item = 1
        newProduct.lengthClass = 0

        let newPriceOfAll = this.state.priceOfAll
        newPriceOfAll = newPriceOfAll - newProduct.totalCost


        this.setState({
            inCart: inCartNew,
            Products: newProducts,
            priceOfAll: newPriceOfAll
        })

        if(this.state.inCart.length === 1){
            this.setState({
                isCartEmpty: true
            })
        }

    }

    addItem = (id) => {
        const newProducts = [...this.state.products]
        const newProduct = newProducts[id-1]

        newProduct.item = newProduct.item + 1
        newProduct.totalCost = newProduct.totalCost + newProduct.price[newProduct.lengthClass]
        let newPriceOfAll = this.state.priceOfAll
        newPriceOfAll = newPriceOfAll + newProduct.price[newProduct.lengthClass]

        this.setState({
            products: newProducts,
            priceOfAll: newPriceOfAll
        })
    }

    minusItem = (id) => {
        console.log(id)
        const newProducts = [...this.state.products]
        const newProduct = newProducts[id-1]
        if(newProduct.item === 1){
            this.deleteItem(id)
            newProduct.item = 1
            return null
        }

        newProduct.item = newProduct.item - 1
        newProduct.totalCost = newProduct.totalCost - newProduct.price[newProduct.lengthClass]
        let newPriceOfAll = this.state.priceOfAll
        newPriceOfAll = newPriceOfAll - newProduct.price[newProduct.lengthClass]

        this.setState({
            products: newProducts,
            priceOfAll: newPriceOfAll
        })
    }

    plusClass = (id, productId) => {
        const newProducts = [...this.state.products]
        const newProduct = newProducts[productId-1]

        if(newProduct.inCart){return null}

        newProduct.lengthClass = id
        newProduct.totalCost = newProduct.price[id]

        this.setState({
            products: newProducts
        })
    }

    render() {
        return (
            <ProductContext.Provider value={this.state}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer};