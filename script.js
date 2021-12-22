let btn=document.getElementById("btn");
let text=document.getElementById("input");
let display=document.getElementById("display");
btn.addEventListener("click",function(){
  let text_value=text.value;
  console.log(text_value);
  display.innerHTML=text_value.length;
  console.log(text_value.length);

})
