import { randomUUID } from "crypto"
import {User} from './User'
import { Comment } from './Comment'
import { products } from "../datavase/product"
import { comments } from '../datavase/comment'
import { ProductType  } from '../types/types'



export class Product {
    private _id: string

    constructor(
        private _name: string, 
        private _value: number,
        private _type: ProductType
    )
    {
        this._id = randomUUID()
    }

    get id(){
        return this._id
    }

    get name(): string {
        return this._name
    }

    get value(): number {
        return this._value
    }

    get type(): string {
        return this._type
    }

    public show(): string {
        console.log(`${this._name} (R$ ${this._value.toFixed(2)})`);
        this.showComments();
        return "\n---------------------\n";
    }
    

    public showComments(): void {
        const productComments = comments.filter((comment) => comment.product === this);
        productComments.forEach((comment) => {
            console.log(`  [${comment.from.userName}]: ${comment.content}`);
        });
    }

    addComment(content: string, user: User) {
        const newComment = new Comment(content, user, this)
        comments.push(newComment)
        console.log('Comentário adicionado com sucesso!')
    }

    toJson() {
        return {
            id: this.id,
            name: this._name,
            value: this._value,
            type: this._type
        }
    }
}


