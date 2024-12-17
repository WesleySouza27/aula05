import { randomUUID } from "crypto"
import { User } from './User'
import { Product } from "./Product"

export class Comment {
    public _id: string = randomUUID()

    constructor(
        private _content: string,
        private _from: User,
        private _product: Product
    ) {}

    get content() {
        return this._content
    }

    get from() {
        return this._from
    }

    get product() {
        return this._product
    }

    show() {
        console.log(`comentário de: ${this.from.userName} : Conteúdo ${this._content}`)
    }

    toJson() {
        return {
        id: this._id,
        from: this._from.toJson,
        content: this._content,
        productId: this._product.toJson()
        }

    }
}