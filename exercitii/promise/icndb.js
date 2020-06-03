
axios.get('http://api.icndb.com/jokes/random')
     .then(
         response => { 
             document.querySelector('div:nth-child(1)').innerText = response.data.value.joke
             console.log(response)
             return axios.get('http://api.icndb.com/jokes/random')
         }
     )
     .then(
        response => {
            document.querySelector('div:nth-child(2)').innerText = response.data.value.joke
            console.log(response)
            return axios.get('http://api.icndb.com/jokes/random')
        }
     )
     .then(
        response => {
            document.querySelector('div:nth-child(3)').innerText = response.data.value.joke
            console.log(response)
        }
     )
     .catch(
         error => console.log(error)
     )