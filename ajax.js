let req = new XMLHttpRequest();
req.open("GET","https://jsonplaceholder.typicode.com/todos");
let resp ;
req.onreadystatechange=()=>{
    console.log(req.readyState);
    if(req.readyState==4 && req.status == 200){
        resp=JSON.parse(req.responseText);
    }
    console.log(resp);
}
req.send();
