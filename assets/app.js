
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
        discription.style.color = 'red';
    }else if(index >= 16 && index <= 18.5){
        discription.innerHTML = 'Недостаточная масса тела';
        discription.style.color = 'black';
    }else if(index >= 18.5 && index <= 25){
         discription.innerHTML = 'Норма';
         discription.style.color = 'green';
    }else if(index >= 25 && index <= 30){
         discription.innerHTML = 'Избыточная масса тела';
         discription.style.color = 'black';
     }else if(index >= 30 && index <= 35){
        discription.innerHTML = 'Ожирение';
        discription.style.color = 'red';
    }else if(index >= 35 && index <= 40){
      discription.innerHTML = '!!! Ожирение 2 степени';
      discription.style.color = 'red';
    } else if(index >= 40 ){
       discription.innerHTML = '!!! Ожирение 3 степени';
       discription.style.color = 'red';
   }     
}

 

   
 
