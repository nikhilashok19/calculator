let buttonElement=document.querySelectorAll('.js-buttons');
let calculationsContainer=document.querySelector('.js-calculations-container');
let acButton=document.querySelector('.js-ac-button');
let cButton=document.querySelector('.js-c-button');
let equalButton=document.querySelector('.js-equal-button');
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
  }
  catch(error){
    calculationsContainer.innerText='Error';
  }
});
