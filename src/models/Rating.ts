import { randomUUID } from 'crypto'

import { User } from './User'

export class Rating {
    private readonly _id: string
    private _value: number
    private _user: User

    constructor(value: number, user: User) {
        this._id = randomUUID()
        this._value = value
        this._user = user
    }

    get id(): string {
        return this._id
    }

    get value(): number {
        return this._value
    }

    get user(): User {
        return this._user
    }
}