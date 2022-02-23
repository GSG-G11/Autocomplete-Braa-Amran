const dataLi=document.querySelector('.contentImg');
const submit = document.querySelector(".submit");

submit.addEventListener('click',()=>{
    dataLi.innerHTML='';
let userData = input.value;
console.log(userData)
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log( data)
     data.results.forEach(e => {
         console.log(e)
         //datalist
        const dataOpti = document.createElement('img')
        dataOpti.src = e
        dataLi.appendChild(dataOpti);
     });


     
    } 
  }
};
      xhr.open('GET', `/api/${userData}`, true);
      xhr.send();
    })
  