function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b ;

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
    display.textContent = "";
    display_value = 0;
}

display_digits.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        display.textContent = display.textContent+button.value;
        display_value = parseInt(display.textContent);
    });
  });


  const operator_val = document.querySelectorAll('.operator__button'); 

  let first_value = 0;
  let second_value = 0;
  let operator_sign = '';
  let answer = 0;

    operator_val.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        if(operator_sign !== ''){

        }
        operator_sign = button.value;
        first_value = display_value;
        clear();
        
    });
  });

    const equal_button = document.querySelector('.equal__button');
   
    equal_button.addEventListener('click',() =>{
      
        doOperate();
        operator_sign = ''

        
    } );


    function doOperate(){
        second_value = display_value;
        answer = (operate(operator_sign,first_value,second_value));
        display.textContent = answer;
        display_value = answer;
        
    }