let input = document.getElementById("input");
let btn = document.querySelectorAll("button");
let number = "";
let arr = Array.from(btn);
// console.log(arr)
arr.forEach( button => {
    button.addEventListener("click", function (p){
        // console.log(p.target)
        if(p.target.innerHTML == "="   ){
            number = eval(number);
             input.value = number
        } else if( p.target.innerHTML == "AC" ){
            number = "";
            input.value = number

        } else if(p.target.innerHTML == "Del"){
                number = number.substring(0,number.length -1)
                input.value=number
        } 

        else{  
            number+= p.target.innerHTML;
            input.value = number
        }
    })
}  )


