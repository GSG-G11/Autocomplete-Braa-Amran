document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            for (let blogPost in data) {
           
            }
          } else {
            console.error(xhr.responseText);
          }
        }
      };
      xhr.open('POST', '/cars', true);
      xhr.send();
    }
  };