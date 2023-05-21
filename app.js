

// target all the dom elements
let input_display = document.querySelector('#input-display')
let equal = document.querySelector('#equal');
let clear = document.querySelector('.clear')
let del_btn = document.querySelector('.del')


window.onload = function(){
       input_display.value = ''
}
// logic starts here

let equal_press = false; // flag variable

// target all the input btn
let input_btns = document.querySelectorAll('.input-btn')

  input_btns.forEach((btn)=>{
          btn.addEventListener('click', (event)=>{
               if(equal_press ){
                      equal_press = false

               }

               input_display.value = input_display.value += btn.value
                                
          })
  })


equal.addEventListener('click', (event)=>{
       equal_press = true;

       let result = eval(input_display.value)

       if(Number.isInteger(result)){
            input_display.value = result
       }else{
        input_display.value = result.toFixed(2)
       }


})

clear.addEventListener('click',(event)=>{
     input_display.value = '';

     equal_press = false;
})


del_btn.addEventListener('click', (event)=>{
       input_display.value = input_display.value.substring(0, input_display.value.length - 1) // 12345
})


// testing substring
// let username = "codeprof"
// alert(username.substring(0, username.length - 1))

