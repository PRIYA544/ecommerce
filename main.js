let carts=document.querySelectorAll('.add-cart');
let products=[
    {
        name:'iphone',
        tag:'iphone',
        price:70000,
        inCart:0
    },
    {
        name:'honor',
        tag:'honor',
        price:10000,
        inCart:0
    },
    {
        name:'one plus',
        tag:'one plus',
        price:30000,
        inCart:0
    },
    {
        name:'samsung',
        tag:'samsung',
        price:20000,
        inCart:0
    },
    {
        name:'realme',
        tag:'realme',
        price:10000,
        inCart:0
    },

    {
        name:'oppo',
        tag:'oppo',
        price:20000,
        inCart:0
    },
    {
        name:'asus',
        tag:'asus',
        price:80000,
        inCart:0
    },
    {
        name:'acer',
        tag:'acer',
        price:80000,
        inCart:0
    },
    {
        name:'apple',
        tag:'apple',
        price:80000,
        inCart:0
    },
    {
        name:'lenovo',
        tag:'lenovo',
        price:80000,
        inCart:0
    },
    {
        name:'dell',
        tag:'dell',
        price:80000,
        inCart:0
    },
    {
        name:'jbl',
        tag:'jbl',
        price:80000,
        inCart:0
    },
    {
        name:'mi smart band',
        tag:'mi smart band',
        price:80000,
        inCart:0
    },
    {
        name:'noisefit evolve',
        tag:'noisefit evolve',
        price:80000,
        inCart:0
    },
    {
        name:'realme band',
        tag:'realme band',
        price:80000,
        inCart:0
    },
    {
        name:'samsung galaxy',
        tag:'samsung galaxy',
        price:80000,
        inCart:0
    },

    {
        name:'boult audio',
        tag:'boult audio',
        price:10000,
        inCart:0
    }

];
 for(let i=0;i<carts.length;i++)
 {
     //console.log("my loop");
     carts[i].addEventListener('click',()=>{
      cartNumbers(products[i]);
      totalCost(products[i]);
     })
 }
 function onLoadCartNumbers()
 {
     let productNumbers= localStorage.getItem('cartNumbers');

     if(productNumbers)
     {
        document.querySelector('.cart span').textContent= productNumbers;
     }
 }
 function cartNumbers(products)
 {
     
     let productNumbers = localStorage.getItem('cartNumbers');

     productNumbers=parseInt(productNumbers);

     if(productNumbers)
     {
localStorage.setItem('cartNumbers',productNumbers + 1);
document.querySelector('.cart span').textContent = productNumbers + 1;
 }
 else{
     localStorage.setItem('cartNumbers',1);
    document.querySelector('.cart span').textContent = 1;
    }
    setItems(products);
}
function setItems(products)
{
    let cartItems= localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);
    if(cartItems!=null){
        if(cartItems[products.tag] == undefined)
        {
            cartItems={
                ...cartItems,
                [products.tag]:products
            }
        }
    cartItems[products.tag].inCart += 1;
    }
    else{
    products.inCart=1;
     cartItems= {
    [products.tag]:products
     }
}
localStorage.setItem("productsInCart", JSON.stringify
(cartItems));
}
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for(var i=0;i<removeCartItemButtons.length;i++)
    {
        var button=removeCartItemButtons[i]
        button.addEventListener('click',function(event)
        {
            var buttonClicked= event.target
            buttonClicked.parentElement.parentElement.remove()

        })
    }

/*function removeCartItem(event)
{
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateTotalCost()
} */

 function totalCost(product)
 {
     //console.log("price is",products.price);
     
     let cartCost = localStorage.getItem("totalCost");
     

    // console.log("My cartcost is",cartCost);

     if(cartCost != null)
     {
        cartCost= parseInt(cartCost);
localStorage.setItem("totalCost",cartCost + product.price);
     }
     else
     {
     localStorage.setItem("totalCost",product.price);
     }
 }

 function displayCart()
 {
let cartItems=localStorage.getItem("productsInCart");
cartItems =JSON.parse(cartItems);
let productContainer = document.querySelector(".products");
let cartCost = localStorage.getItem("totalCost");
if(cartItems && productContainer)
{
 productContainer.innerHTML='';
 Object.values(cartItems).map(item => {
    productContainer.innerHTML += `
    <div class= "product">
    <button class="btn btn-dander" type="button">REMOVE</button>
    <img src = "./images/${item.tag}.jpg">
    <span>${item.name}</span>
</div>
<div class ="price">$${item.price},00</div>
<div class="quantity ">
<input class="quantity-input" type="number" value="${item.inCart}">
<div class="total" >
$${item.inCart * item.price},00
</div>  
    `;
   
 });
 productContainer.innerHTML += `
 <div class="basketTotalContainer">
 <h4 class="basketTotalTitle">
 Basket Total
 </h4>
 <h4 class= "basketTotal">
$${cartCost},00
 </h4>
 `;
}

 }
onLoadCartNumbers();
displayCart();