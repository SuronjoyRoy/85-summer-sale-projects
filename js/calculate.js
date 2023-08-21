let total=0;
function addingItemCart(target){
    const showItemTotal=document.getElementById('price-item');
    const itemName=(target.childNodes[5].innerText);
    const itemTitle=document.createElement('h2');
    let count =showItemTotal.childElementCount;
    itemTitle.innerHTML=`${count + 1}. ${itemName}`;
    showItemTotal.appendChild(itemTitle);

    const price=(target.childNodes[7].innerText.split(' ')[0]);
    total=parseInt(total) + parseInt(price);
    document.getElementById('total').innerText=total;

    const pruchasBtn=document.getElementById('purchase-btn');

    if(total>0){
        pruchasBtn.removeAttribute('disabled');
    }

    const discoutnBtn=document.getElementById('discount-btn');
    if(total>200){
        discoutnBtn.removeAttribute('disabled')
    }

    document.getElementById('discount-btn').addEventListener('click', function(){

        const cuponField = document.getElementById('cuponField');
        const cuponValue = cuponField.value;

        if(cuponValue === 'SELL200'){
            const dsicountCupon= (total/100)*20;
            const discountPrice=document.getElementById('discount');
            discountPrice.innerText=dsicountCupon.toFixed(2);
            allTotalPrice= total - dsicountCupon;
            document.getElementById('total-all').innerText=allTotalPrice;
            
        }
    })

    

}

document.getElementById('goHome').addEventListener("click", function(){
    window.location.href='index.html'
})

