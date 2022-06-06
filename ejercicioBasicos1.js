//Años bisiestos
let year = new Date();



let esBisiesto = (año) =>{
    if((año%4==0 && año%100!=0) || año%400==0){
        return console.log(año + " Es bisiesto")
    }else{
        return console.log(año + " No es bisiesto")
    }
}


for(let i= 1700; i<=year.getFullYear(); i++){
esBisiesto(i) ;
}



