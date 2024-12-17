import { Product } from "./models/Product";
import { User } from "./models/User";
import { ProductType } from "./types/types";

const user01 = new User('fulano Silva', 'fulano', 'fulano@gmail.com')

const user02 = new User('ciclano souza', 'ciclano', 'ciclano@gmail.com')

console.log(user01.toJson())
console.log(user02.toJson())

const produto01 = new Product('Geladeira', 2500, ProductType.Home)

user01.addToCart(produto01)
console.log(user01)
user01.removeFromCart(produto01)
console.log(user01)
produto01.addComment('compra black Friday', user01)
produto01.showComments()
produto01.show()
user01.showProdcts()