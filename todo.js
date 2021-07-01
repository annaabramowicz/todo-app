window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const button = document.getElementById("add");
    const element = document.getElementsByClassName("elementsList")[0];
    let input = document.querySelector('.input').value;
    
    const newDiv = document.createElement("div");


    button.addEventListener("click", function(){
        console.log(input);

        element.appendChild(newDiv);
    });


});

// let orders = document.querySelector('#orders');

// document.querySelector('#addBtn').addEventListener('click', function(){
//     let orderId = document.querySelector('#orderId').value;
//     let item = document.querySelector('#item').value;
//     let quantity = document.querySelector('#quantity').value;
//     let newTr = document.querySelector('table tr').cloneNode(true);
//     newTr.firstElementChild.innerText = orderId;
//     // newRow.children[0].innerText = orderId;
//     newTr.firstElementChild.nextElementSibling.innerText = item;
//     newTr.lastElementChild.innerText = quantity;
//     orders.appendChild(newTr);
// })