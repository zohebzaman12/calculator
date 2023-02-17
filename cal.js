function add(a,b){
    return a + b;
}

function subtract(a,b){
    let c = a - b;
    return c ;

}


function multiply(a,b){
    return a * b ;
    
}

function divide(a,b){
    return a / b ;
    
}

function operate(operator,a,b){

    if(operator === '+'){
        return add(a,b);
    }else if(operator === '-'){
        return subtract(a,b);
    }else if(operator === '*'){
        return multiply(a,b);
    }else if(operator === '/'){
        return divide(a,b);
    }

}
    let display_value = 0;

//making the display work when you press the digit buttons

const display_digits = document.querySelectorAll('.digit');

const display = document.querySelector('.display');

const clear_button = document.querySelector('.clear');

clear_button.addEventListener('click',() =>{
    clear();
} );

function clear(){
    display_string = '';
    display.textContent = '';
    display_value = 0;
    stack.length =0;
}

display_digits.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        display_string = display_string + button.value;
        display.textContent = display_string;
        display_value = parseInt(display_string);
    });
  });


  const operator_val = document.querySelectorAll('.operator__button'); 

  let first_value = 0;
  let second_value = 0;
  let operator_sign = '';
  let answer = 0;
  
  const stack = [];

  let display_string = '';

    operator_val.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
            stack.push(display_value);

            if(stack.length === 1){
                operator_sign = button.value;
                display_string = '';
                display_value = 0;
                return;
            }else{
                second_value = stack.pop();
                first_value = stack.pop();
                let answer = operate(operator_sign,first_value,second_value);
                stack.push(answer);
                if(button.value !== '='){
                    operator_sign = button.value;
                }
                display.textContent = answer;
                display_string = '';
                display_value = 0;
            }

       
        });

  

    })

    // const equal_button = document.querySelector('.equal__button');
   
    // equal_button.addEventListener('click',() =>{
      
    //     doOperate();
    //     operator_sign = ''

        
    // } );

