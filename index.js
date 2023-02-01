let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');
let reset = document.getElementById('reset');
let para = document.getElementById('para');
let i = 0;

increment.addEventListener('click',()=>{
    i++;
        para.innerHTML = i;
});
 
decrement.addEventListener('click',function doDecrement(){

   i--;
    if(i>=0){
        para.innerHTML = i;
    }
    else{
        i = 0;
    }

});

reset.addEventListener('click',()=>{
    i = 0;
    para.innerHTML = i;
})