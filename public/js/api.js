
const submit = document.querySelector(".submit");

submit.addEventListener('click',()=>{
let userData = input.value;
console.log(userData)
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      for (let carName in data) {
     // use the data from server 
     const dataLi=document.querySelector('.contentImg'); //datalist
     const dataOpti = document.createElement('img')
     dataOpti.src = data[carName].urls.full
     dataLi.appendChild(dataOpti);
      }
    } 
  }
};
      xhr.open('GET', `/api/${userData}`, true);
      xhr.send();
    })
  