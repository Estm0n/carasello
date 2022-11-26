const cara = document.getElementById('frente');
const sello = document.getElementById('cruz');
const gana= document.getElementById('ganar');
const pierde = document.getElementById('perder');
const intentos = document.getElementById('intento');
let a = 0, b = 0 , i = 0 , total = 0  ;
const termina = document.getElementById('fin');

cara.addEventListener('click', ()=>{
      let apuesta = document.getElementById('inputt').value;
      apuesta = parseFloat(apuesta)
      if (apuesta >= 10000) {
        Swal.fire({title: `Bajale un poco a tu apuesta`});
        if(apuesta >= 1000){
            let aleatorio =  Math.random()+ 1;
            let money = aleatorio.toPrecision(1);
                i = a + b;  
                if(money == 1){    
                      gana.innerText= a
                      a= a+1
                      intentos.innerText = i;
                      total = total + apuesta;
                }else if(money > 1 || money < 1){
                      b = b+1 
                      pierde.innerHTML=b;
                      intentos.innerHTML = i;    
                      total = total - apuesta;
                }
          }else{
                Swal.fire({title: `Te digo que mil parcero`, icon:`error`});
          }
      } else {
        if(apuesta >= 1000){
            let aleatorio =  Math.random()+ 1;
            let money = aleatorio.toPrecision(1);
                i = a + b;  
                if(money == 1){
                      gana.innerText= a
                      a= a+1
                      intentos.innerText = i;
                      total = total + apuesta;
                }else if(money > 1 || money < 1){
                      b = b+1 
                      pierde.innerHTML=b; 
                      intentos.innerHTML = i;    
                      total = total - apuesta;
                }   
          }else{
                Swal.fire({title: `Te digo que mil parcero`, icon:`error`});
          }
      }
      
      
})
sello.addEventListener('click', ()=>{
    let apuesta = document.getElementById('inputt').value;
      apuesta = parseFloat(apuesta)
      if (apuesta >= 10000) {
        Swal.fire({title: `Bajaleun poco a tu apuesta`});
        if(apuesta > 1000){
            let aleatorio =  Math.random()+ 1;
            let money = aleatorio.toPrecision(1);
            i = a + b; 
                if(money==2){
                    gana.innerText= a
                    a= a+1
                    intentos.innerText = i;
                    total = total + apuesta;
                      
                }else if(money <2 || money >2){
                    b = b+1 
                    pierde.innerHTML=b;                
                    intentos.innerHTML = i;    
                    total = total - apuesta; 
                }
          }else{
                Swal.fire({title: `Te digo que mil parcero`, icon:`error`});
          } 
      } else {
        if(apuesta > 1000){
            let aleatorio =  Math.random()+ 1;
            let money = aleatorio.toPrecision(1);
            i = a + b; 
                if(money==2){
                    gana.innerText= a
                    a= a+1
                    intentos.innerText = i;
                    total = total + apuesta;
                      
                }else if(money <2 || money >2){
                    b = b+1 
                    pierde.innerHTML=b;                
                    intentos.innerHTML = i;    
                    total = total - apuesta; 
                }
          }else{
                Swal.fire({title: `Te digo que mil parcero`, icon:`error`});
          } 
      }
      
})
termina.addEventListener('click', ()=>{
      if(total <0){
            Swal.fire({title: `Talvez te va mejor en la otra` , text: `Has perdido $ ${total}`, icon:`error`  } );
           
      }else{
            Swal.fire({title: `En hora buena` , text:`Has conseguido: $ ${total}` , icon:`success`}); 
      }
     
})