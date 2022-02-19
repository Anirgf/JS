let num = [8,1,7,4,2,9]
num.sort() //ordenar em ordem crescente
//console.log(valores)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primero valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1){
        console.log('O valor não foi encontrado!')
    }
    else {
        console.log(`O valor não foi encontrado ${pos}`)
    }

/*
console.log(0)
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

//modo tradicional
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}
*/
//modo novo 
/*
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    }
}
*/
