import { randomUUID } from "crypto"
import { Product } from "./Product"
import { products } from "../datavase/product"
export class User {
    private readonly id: string = randomUUID()
    private _cart: Product[] = []

    constructor(
        private _nome: string,
        private _userName: string,
        private _email: string
    ) {}

    get name(): string {
        return this._nome
    }

    get userName(): string {
        return this._userName
    }

    get email(): string {
        return this._email
    }

    get cart(): Product[] {
        return this._cart
    }

    addToCart(produto: Product) {
        this._cart.push(produto)
        console.log(`Produto: ${produto.name} adicionado com sucesso!`)
    }

    removeFromCart(product: Product) {
        const index = this._cart.indexOf(product)

        if (index === -1) {
            console.log('Produto não encontrado')
            return
        } else {
            this._cart.splice(index, 1)
            console.log(`produto ${product} removido com sucesso!`)
        }
    }

    showProdcts() {
        let total = 0

        this._cart.forEach(product => {
            console.log(product.show())
            total += product.value
        })

        console.log(`o total em valor dos produtos é ${total.toFixed(2)}`)
    }

    toJson() {
        return {
            id: this.id,
            name: this._nome,
            userName: this._userName,
            email: this._email
        }
    }
}
