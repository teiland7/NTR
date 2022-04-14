const button = document.querySelector('#Sign-btn');
let users = "Collins@gmail.com";
let pass = "password"



button.addEventListener('click',function(event){
    const userName = document.querySelector('#userName').value;
    const passWord = document.querySelector('#passWord').value;
    var link = document.querySelector("a");
    console.log(userName, passWord);
    if(userName!=users || pass != passWord){
        alert("Incorrect Password or Email");
        link.setAttribute("href",
        "index.html");
        
    } else {
        link.setAttribute("href",
        "khurram_nfr.html");
    }

})

