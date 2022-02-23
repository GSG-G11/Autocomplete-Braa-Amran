const input =document.querySelector("#search");
            input.addEventListener('keyup',()=>{
              let userData = input.value;
              console.log(userData)
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            for (let carName in data) {
           // use the data from server 
           const dataLi=document.querySelector('#carsList'); //datalist
           const dataOpti = document.createElement('option')
           dataOpti.value = data[carName]
           dataLi.appendChild(dataOpti);
            }
          } else {
            console.error(xhr.responseText);
          }
        }
      };
      xhr.open('POST', `/cars/${userData}`, true);
      xhr.send();
            })