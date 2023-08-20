let total=0;
function addingItemCart(target){
    const showItemTotal=document.getElementById('price-item');
    const itemName=(target.childNodes[5].innerText);
    const itemTitle=document.createElement('li');
    itemTitle.innerText=itemName;
    showItemTotal.appendChild(itemTitle);

    const price=(target.childNodes[7].innerText.split(' ')[0]);

    total=parseInt(total) + parseInt(price);
    console.log(total);

    document.getElementById('total').innerText=total;

    const pruchasBtn=document.getElementById('purchase-btn');

    if(total>0){
        pruchasBtn.removeAttribute('disabled');
    }

    const discoutnBtn=document.getElementById('discount-btn');
    if(total>200){
        discoutnBtn.removeAttribute('disabled')
    }
}

