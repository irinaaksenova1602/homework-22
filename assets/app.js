
function calc(){


    let mass = +massInput.value;
    let height = +heightInput.value;
    let index = 0;

    if(height > 3){
        index = Math.round ((mass /((height/100) ** 2)) * 10) / 10 ;
    }else{
        index = Math.round ((mass /(height ** 2)) * 10) / 10 ;
    }


    console.log(`Индекс массы тела: ${index}`); 

    resultPlace.innerHTML = index;

    if( index <= 16 ){
        discription.innerHTML = '!!!! Дефицит массы тела';
    }else if(index >= 16 && index <= 18.5){
        discription.innerHTML = 'Недостаточная масса тела';
    }else if(index >= 18.5 && index <= 25){
         discription.innerHTML = 'Норма';
    }else if(index >= 25 && index <= 30){
         discription.innerHTML = 'Избыточная масса тела';
     }else if(index >= 30 && index <= 35){
        discription.innerHTML = 'Ожирение';
    }else if(index >= 35 && index <= 40){
      discription.innerHTML = '!!! Ожирение 2 степени';
    } else if(index >= 40 ){
       discription.innerHTML = '!!! Ожирение 3 степени';
   }     
}

 

   
 
