import { ProductType } from '../types/types'
import { Product } from './Product'

export class DiscountedProduct extends Product {
    constructor(
        name: string,
        value: number,
        type: ProductType,
        private _discount: number
    ) {
        super(name, value, type)
    }

    get discount(): number {
        return this._discount
    }

    public show(): string {
        console.log(`${this.name} (R$ ${this.value.toFixed(2)})`)
        console.log(`Desconto: ${this.discount}%`)
        this.showComments()
        this.avaliationMedia()
        return "\n---------------------\n";
    }
}