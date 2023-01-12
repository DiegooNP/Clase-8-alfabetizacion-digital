// function reportesDePasajeros (numeroEstacion) {
    
//     switch (numeroEstacion) {
//         case 0:
//             console.log('En la estacion ' + numeroEstacion +' hay 200 pasajeros arriba del tren');
//             break;
//         case 1:
//             console.log('En la estacion ' + numeroEstacion +'hay 200 pasajeros arriba del tren');
//             break;
//         case 2:
//             console.log('En la estacion ' + numeroEstacion +'hay 200 pasajeros arriba del tren');
//             break;
//         case 3:
//             console.log('En la estacion ' + numeroEstacion +'hay 200 pasajeros arriba del tren');
//             break;
//         case 4:
//             console.log('En la estacion ' + numeroEstacion +'hay 200 pasajeros arriba del tren');
//             break;
//         case 5:
//         console.log('En la estacion ' + numeroEstacion +'hay 200 pasajeros arriba del tren');
//         break;

//         default:
//             break;
//     }
    
//     return
// }

// console.log(reportesDePasajeros (0));
// console.log(reportesDePasajeros (1));
// console.log(reportesDePasajeros (2));
// console.log(reportesDePasajeros (3));
// console.log(reportesDePasajeros (4));
// console.log(reportesDePasajeros (5));

//OTRA FORMA DE REPORTES DE PASAJEROS
// function reporteDePasajeros(numeroEstacion) {
//     let array = [];
//     let cantidadDePasajeros = 0;
//     let cambio = 0;

//     for (let i = 0; i < numeroEstacion.length; i++) {
//         if (cambio == 0) {
//             cantidadDePasajeros +=200;
//             array.push('En la estacion ' + cambio + ' hay ' +numeroEstacion+ 'pasajeros arriba del tren');
//             cambio ++
//         }else if (cambio >= 1 && cambio <= 4) {
//             cantidadDePasajeros +=20;
//             array.push('En la estacion ' + cambio + ' hay ' + numeroEstacion + 'pasajeros arriba del tren');
//             cambio ++
//         }else if (cambio === 5) {
//             cantidadDePasajeros +=40;
//             array.push('En la estacion ' + cambio + ' hay ' + numeroEstacion + 'pasajeros arriba del tren');
//             cambio ++
//     };
// };
// return array;
// }



//otra solucion

function reporteDePasajeros (numeroEstacion){
    let salida = [];

    for (let i = 0; i <= numeroEstacion.length; i++) {
        
        if (i==0) {
            pasajeros = 200;
        }else if (i <= 4) {
            pasajeros += 20;
        } else if (i==5) {
            pasajeros +=40;
        }
        salida[i]= 'En la estacion ' + i + 'hay ' +pasajeros+ 'pasajeros arriba del tren';
    }
    return salida
}

console.log(reporteDePasajeros(1));
//console.log(reporteDePasajeros(3));
//console.log(reporteDePasajeros(5));