const maca ={
    value:2,
}
const laranja={
    value:3
}
function mapComThis(arr,thisArg){
    return arr.map(function(item){
        return item * this.value},thisArg)
}

const meuarray = [1,2,3];
console.log('this-> maçã',mapComThis(meuarray,maca));
console.log('this-> laranja',mapComThis(meuarray,laranja));