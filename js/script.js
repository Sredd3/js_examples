//let button = document.getElementById("test");
let button = document.querySelector('#test');
button.addEventListener("click", function(event){
    const elements = document.querySelectorAll('li');
    elements.forEach(element =>  {
        element.style.backgroundColor = 'red';
        element.style.padding = '10px';
        element.style.listStyle='none';
        element.style.margin='10px';
        element.style.color = 'white';
    })
    elements[1].textContent = 'Updated content';
})

let hide = document.querySelector("#hide");
hide.addEventListener('click', function(){
    console.log('isndie the hide click handler')
    const elements = document.getElementsByTagName("li");
    for ( var index = 0; index < elements.length; index ++){
        elements[index].style.display = 'none';
    }   
})
let ulNode = document.querySelector('ul');
document.querySelector('#search').addEventListener('keyup', function(event){
    let value = event.target.value;
    let liNodes = document.querySelectorAll('li');

    liNodes.forEach(node => {
        if (!node.textContent.startsWith(value)){
            ulNode.removeChild(node);
        }
    })


})

/*const names = ['Ravi', 'Sunil', 'Rajesh','Vikram'];

let ulNode = document.querySelector('ul');
let liElement = document.createElement("li");
liElement.textContent = names[0];
ulNode.appendChild(liElement);
*/