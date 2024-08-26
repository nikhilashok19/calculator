let buttonElement=document.querySelectorAll('.js-buttons');
let calculationsContainer=document.querySelector('.js-calculations-container');
let acButton=document.querySelector('.js-ac-button');
let cButton=document.querySelector('.js-c-button');
let equalButton=document.querySelector('.js-equal-button');
let toggleButton=document.querySelector('.js-toggle');
let expression='';

buttonElement.forEach((button)=>{
  button.addEventListener('click',()=>{
    expression+=button.value;
    calculationsContainer.innerText=expression;
  });
});

acButton.addEventListener('click',()=>{
  expression='';
  calculationsContainer.innerText=expression;
});

cButton.addEventListener('click',()=>{
  expression='';
  calculationsContainer.innerText=expression;
});

equalButton.addEventListener('click',()=>{
  try{   
    let result=eval(expression);

    if(Number.isInteger(result))
    {
      expression=result.toString();
    }
    else{
      expression=result.toFixed(2);
    }
    calculationsContainer.innerText=expression;
    expression='0';
  }
  catch(error){
    calculationsContainer.innerText='Error';
  }
});

toggleButton.addEventListener('change',()=>{
  if(toggleButton.checked){
    darkMode();
  }
  else{
    lightMode();
  }
});
function darkMode(){
  buttonElement.forEach((button)=>{
    button.classList.remove('buttons-light');
});

document.querySelector('.header')
.classList.remove('header-light');

document.querySelector('.calculations')
.classList.remove('calculations-light');

document.querySelector('.buttons-container')
.classList.remove('buttons-container-light');

document.querySelector('.equal-button')
.classList.remove('equal-button-light');

document.querySelector('.equal-button')
.classList.remove('buttons-light');

document.querySelectorAll('.operator-button')
.forEach((button)=>{
  button.classList.remove('operator-button-light');
});

document.querySelectorAll('.special-button')
.forEach((button)=>{
  button.classList.remove('special-button-light');
  button.classList.remove('buttons-light');
});
}

function lightMode(){
  buttonElement.forEach((button)=>{
    button.classList.add('buttons-light');
});

document.querySelector('.header')
.classList.add('header-light');

document.querySelector('.calculations')
.classList.add('calculations-light');

document.querySelector('.buttons-container')
.classList.add('buttons-container-light');

document.querySelector('.equal-button')
.classList.add('equal-button-light');

document.querySelector('.equal-button')
.classList.add('buttons-light');

document.querySelectorAll('.operator-button')
.forEach((button)=>{
  button.classList.add('operator-button-light');
});

document.querySelectorAll('.special-button')
.forEach((button)=>{
  button.classList.add('special-button-light');
  button.classList.add('buttons-light');
});
}