let totalSales = 0;

function addSale(){

let product = document.getElementById("product").value;

let price = Number(document.getElementById("price").value);

let qty = Number(document.getElementById("qty").value);

if(price<=0 || qty<=0){

alert("Enter valid price and quantity");
return;

}

let total = price * qty;

totalSales += total;

let row = `
<tr>
<td>${product}</td>
<td>${qty}</td>
<td>₹${price}</td>
<td>₹${total}</td>
</tr>
`;

document.getElementById("salesTable").innerHTML += row;

document.getElementById("grandTotal").innerHTML =
"Total Sales : ₹" + totalSales;

document.getElementById("price").value="";
document.getElementById("qty").value=1;

}