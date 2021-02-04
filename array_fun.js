
let array=[2112,1221,12,11,22]
// filter function
let data=array.filter(function(value){
return value%2==0

})
// map function
sq=data.map(result=> result**2)
// console.log(data)
// console.log(sq)


// forEach function
array.forEach((re,index)=> array[index]=re*2)
console.log(array)
