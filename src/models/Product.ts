import { randomUUID } from "crypto"
import {User} from './User'
import { Comment } from './Comment'
import { products } from "../datavase/product"
import { comments } from '../datavase/comment'
import { ProductType  } from '../types/types'



export class Product {
    private _id: string
    private _avaliation: number[] = []

    constructor(
        private _name: string, 
        private _value: number,
        private _type: ProductType
    )
    {
        this._id = randomUUID()
        this._avaliation = []
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
        console.log(`${this._name} (R$ ${this._value.toFixed(2)})`)
        this.showComments()
        this.avaliationMedia()
        return "\n---------------------\n";
    }
    

    public showComments(): void {
        const productComments = comments.filter((comment) => comment.product === this)
        productComments.forEach((comment) => {
            console.log(`  [${comment.from.userName}]: ${comment.content}`)
        });
    }

    public addComment(content: string, user: User) {
        const newComment = new Comment(content, user, this)
        comments.push(newComment)
        console.log('Comentário adicionado com sucesso!')
    }

    public addAvalaviation(nota: number) {
        if (nota >= 0 && nota <= 5){
            this._avaliation.push(nota)
            console.log(`Avaliação registrada com sucesso!`)
        } else {
            console.log(`A nota tem que ser de 0 à 5`)
            return
        }
    }

    public avaliationMedia() {
        const avaliation: number = this._avaliation.reduce((i,nota) => i + nota, 0)
        const media: number = avaliation / (this._avaliation.length)
        console.log(`nota: ${media}`)
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


