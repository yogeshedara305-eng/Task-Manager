var addtask = document.querySelector(".btn").addEventListener("click", savefunction);
var arr = JSON.parse(localStorage.getItem("items")) || [];

function savefunction(e) {
    e.preventDefault();
    var input=document.querySelector(".inputs").value
    var optionvalue=document.querySelector(".op").value
    obj={
        input:input,
        optionvalue:optionvalue
        
    }
    arr.push(obj)
    document.querySelector(".inputs").value = "";
   localStorage.setItem("items", JSON.stringify(arr));
   displayfun(arr)

}
function displayfun(arr){
    var re=document.querySelector(".result");
    re.innerHTML = "";
    arr.forEach(ele => {
     var newdiv=document.createElement('div')
        newdiv.innerHTML=`
        <div class="innerstyle">
                    <h2 class="name">${ele.input.toUpperCase()}</h2>
                    <p class="privoty">Priority:${ele.optionvalue}</p>
                    <p class="status">Status:compeleted</p>
                    <button class="compelete"  onclick="this.textContent = this.textContent === 'Complete' ? 'compeleted' : 'Completed'">Compelete</button>
                    <button class="deletes" >Delete</button>
                </div>


    `
    re.append(newdiv);
        
    });
    var del=document.querySelectorAll(".deletes")
    del.forEach(ele=>{
    ele.addEventListener('click',delfunction)

})


}

function delfunction(e) {
    var del=document.querySelectorAll(".deletes")
    console.log(e.target)

    var index = Array.from(del).indexOf(e.target);
    console.log(index)

    arr.splice(index, 1);

    localStorage.setItem("items", JSON.stringify(arr));

    displayfun(arr);
}
displayfun(arr)




