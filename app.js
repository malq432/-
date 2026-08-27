const products = [

{
name:"iPhone 15",
category:"phone",
price:850000,
use:["camera","study"],
rating:9.2,
icon:"📱"
},

{
name:"Samsung Galaxy S24",
category:"phone",
price:780000,
use:["camera","battery"],
rating:9.3,
icon:"📱"
},

{
name:"Xiaomi 14",
category:"phone",
price:650000,
use:["gaming","battery"],
rating:8.9,
icon:"📱"
},


{
name:"Lenovo Legion",
category:"laptop",
price:1250000,
use:["gaming","study"],
rating:9.1,
icon:"💻"
},


{
name:"ASUS ROG",
category:"laptop",
price:1450000,
use:["gaming"],
rating:9.5,
icon:"💻"
},


{
name:"PlayStation 5",
category:"gaming",
price:850000,
use:["gaming"],
rating:9.6,
icon:"🎮"
},


{
name:"Sony WH-1000XM5",
category:"audio",
price:350000,
use:["music","study"],
rating:9.4,
icon:"🎧"
}

];





function showProducts(){


const box=document.getElementById("productsBox");


box.innerHTML="";


products.forEach(product=>{


box.innerHTML += `


<div class="card">


<div class="image">

${product.icon}

</div>


<h3>

${product.name}

</h3>


<p class="price">

${product.price.toLocaleString()} د.ع

</p>


<p class="rating">

⭐ ${product.rating}/10

</p>


</div>


`;

});


}







function smartChoose(){


const category =
document.getElementById("category").value;


const budget =
Number(document.getElementById("budget").value)*1000;


const usage =
document.getElementById("usage").value;



let possible = products.filter(product=>{


return product.category===category
&& product.price <= budget;


});




if(possible.length===0){


possible = products.filter(product=>{


return product.category===category;


});


}





let best = possible[0];



possible.forEach(product=>{


if(product.use.includes(usage)
&& product.rating > best.rating){


best=product;


}


});






document.getElementById("result").innerHTML=`

🏆 اختيارنا إلك:

<br><br>

<strong>

${best.name}

</strong>


<br>

💰 السعر:
${best.price.toLocaleString()} د.ع


<br>

⭐ التقييم:
${best.rating}/10


<br><br>

السبب:
هذا المنتج مناسب لاستخدامك وميزانيتك.

`;



}





showProducts();
