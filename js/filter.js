var url = "https://jsonplaceholder.typicode.com/users";

fetch (url)
.then (response => response.json())
.then((out) =>{
    var result= document.querySelector('ul');
   out.forEach(element => {
        console.log(element.name);
        result.innerHTML +=`
            <li> ${element.name}</li>
        `;
    });
    setFiled();
})

function setFiled(){
    var inputElement = document.querySelector('input');
    var filter = inputElement.value.toUpperCase();
    var textValue;
    const liElements = document.getElementsByTagName('li');
    for(let i= 0 ; i<liElements.length ;i++){
        textValue  = liElements[i].textContent || liElements[i].innerText;
        console.log(textValue.indexOf(filter));
        let isFind = textValue.toUpperCase().indexOf(filter) >-1;
        if(isFind){
            liElements[i].style.display ='block';
        }else{
            liElements[i].style.display ='none';
        }
    }
}
document.addEventListener('keyup',setFiled)

    
