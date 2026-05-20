
   /*-------------------take variable----------------*/
   var location=document.querySelector("#Places");
   var pdate=document.querySelector("#pdate");
   var rdate=document.querySelector("#rdate");
   var btn=document.querySelector(".btn");
   var inp=document.getElementsByTagName("input");
   /*------------------------------------------------*/


   /*------------------------red tabi3i--------------*/
  location.addEventListener("click",function(e){
location.style.borderColor="gray";
pdate.style.borderColor="gray";
rdate.style.borderColor="gray";
  });
  pdate.addEventListener("click",function(e){
location.style.borderColor="gray";
pdate.style.borderColor="gray";
rdate.style.borderColor="gray";
  });
  rdate.addEventListener("click",function(e){
location.style.borderColor="gray";
pdate.style.borderColor="gray";
rdate.style.borderColor="gray";
  });
   /*------------------------------------------------*/

   /*------------------------------------------------*/
function check(){
if(location.value==="" && pdate.value==="" && rdate.value==="")
{alert("fill all information");
location.style.borderColor="red";
pdate.style.borderColor="red";
rdate.style.borderColor="red";
return false;}
else if(location.value===""|| pdate.value===""|| rdate.value==="")
{
for(let i=0;i<inp.length;i++)
if(inp[i].value==="")
inp[i].style.borderColor="red";
return false;
}
else if(location.value.length<8)
{alert("invalide location");
location.style.borderColor="red";
return false;}
else if(pdate.value<rdate.value)
{alert("incorrect date du return");
rdate.style.borderColor="red";
return false;}
else
btn.type="submit";
return true;
}
   /*------------------------------------------------*/
btn.addEventListener("click",check);

