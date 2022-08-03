function table(){
    let table=document.getElementById("num").value;
    for(let x=1; x<=10; x++){
        document.write("<h1>" + table + " x " + x + " = " + x*table + "</h1>")
    }
}