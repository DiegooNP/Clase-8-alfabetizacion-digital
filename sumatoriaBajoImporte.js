// function sumatoriaBajoImporte(array){
//     let saldoTotal = 0
//     for (let index = 0; index < array.length; index++) {
        
//         let movimiento = Math.abs(array[index]);

//         if (array[index] > 1000 || array[index]<0) {
//             movimiento = 0;
//                 }else
//             (saldoTotal = saldoTotal + movimiento);       
//     }
//     return saldoTotal 
// };
// sumatoriaBajoImporte()

function sumatoriaBajoImporte(array){
       let contar = 0
       for (let index = 0; index < array.length; index++) {
        if (array[index] > 0 && array[index] <= 1000 ) {
            contar += array[index];
        }
        
       }
       return contar;
}