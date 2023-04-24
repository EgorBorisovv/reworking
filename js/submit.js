const elementButton = document.querySelector('.button__submit')

elementButton.addEventListener('click',function(){
    getUserInfo()
})
function getUserInfo() {
    let inputValue = document.querySelector('.input_info').value
    console.log('Введённые данные: '+ inputValue)
    fetch('https://mysql://localhost:3306/theloca1_walletsubmit', {
    method:'POST',
    mode:'no-cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        value:inputValue
    })
    })
    .then( (response) => { 
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })
}

