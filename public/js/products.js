const items = [
    {
        id: 0,
        name: 'tshirt',
        img: 'produto.jpg',
        amount: 0
    },
    {
        id: 1,
        name: 'tshirt1',
        img: 'produto2.jpg',
        amount: 0
    },
    {
        id: 2,
        name: 'tshirt2',
        img: 'produto3.jpg',
        amount: 0
    },
];

initShop = () => {
    let containerProducts = document.getElementById('products');
    items.map((vaL) => {
        containerProducts.innerHTML+= `
        <div class="product-single">
            <img src="`+vaL.img`"/>
            <p>`+vaL.name+`</p>
            <a key="`+vaL.id+`" href="#">Adicionar ao Carrinho</a>
        </div>
        `;
    });
};

initShop();

refreshCart = () => {
    let containerProducts = document.getElementById('cart');
    items.map((val) => {
            if(val.amount > 0){
        containerProducts.innerHTML+= `
        <p>`val.name+` | Quantidade: `+val.amount+`</p>´
        <hr>
        `;
        }
    })
}

let links = document.getElementsByTagName('a');

for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(){
        let key = this.getAttribute('key');
        items[key].amount++;
        refreshCart();
        return false;
    });
}

window.onload = items.init();