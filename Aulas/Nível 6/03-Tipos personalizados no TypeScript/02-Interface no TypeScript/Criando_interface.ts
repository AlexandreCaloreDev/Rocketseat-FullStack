interface IProduct{
    id: number,
    name: string,
} //Padrão é escrever a 1° letra em Maíscula seguida de um I

function newProduct(product: IProduct){
    console.log(`Você está printando o produto ${product}`)
}

let product:IProduct = {id: 1, name: 'teste'}

newProduct(product)
