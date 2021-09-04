var productName = document.getElementById("productName");
var productPrice=document.getElementById("productPrice");
var productGategory=document.getElementById("productCategory");
var productDesk=document.getElementById("productDesc");
var productContainer;
if(localStorage.getItem("productList")==null){
    productContainer=[];
}
else{
    productContainer=JSON.parse(localStorage.getItem("productList"))
    displayProduct()
}
function addProduct(){
    if(validationInput()){
        var product ={
            name:productName.value,
            price:productPrice.value,
            category:productGategory.Value,
            description:productDesk.value
        }
            productContainer.push(product)
            displayProduct()
           clearForm()
           localStorage.setItem("productList",JSON.stringify(productContainer))
    }

    else {
        window.alert("ALL input not avilble")
    }
  
}

function displayProduct(){
    var cartoona="";
    for(var i=0 ;i<productContainer.length;i++){
        cartoona+=`<tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td><td>${productContainer[i].description}</td></td>
        <td>

            <button class="btn btn-warning">
                update
            </button>
        </td>
        <td>

            <button class="btn btn-danger" onclick="deleteProduct(${i})"> delete</button>
        </td>
    </tr>`
    }
    document.getElementById("tableBody").innerHTML=cartoona
}

function clearForm(){
    productName.value="";
    productPrice.value="";
    productDesk.value="";
    productGategory.value="";
}
function validationInput(){
    if(productName.value!="" && productPrice.value!="" && productGategory.value!="" && productDesk!=""){
        return true
    }
    else{
        return false
    }
}
function deleteProduct(index){
    productContainer.splice(index,1);
    displayProduct()
    localStorage.setItem("productList", JSON.stringify(productContainer))
}

function search(term){
    var cartoona="";
    for(var i=0 ;i<productContainer.length;i++){
        if(productContainer[i].name.toLowerCase().include(term.toLowerCase())||productContainer[i].category.toLowerCase().include(term.toLowerCase())
        ){
        cartoona+=`<tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td><td>${productContainer[i].description}</td></td>
        <td>

            <button class="btn btn-warning">
                update
            </button>
        </td>
        <td>

            <button class="btn btn-danger" onclick="deleteProduct(${i})"> delete</button>
        </td>
    </tr>`
        }
    }
    document.getElementById("tableBody").innerHTML=cartoona
}
