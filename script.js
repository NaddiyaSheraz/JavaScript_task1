function greeting(){
    let name = prompt("Enter your Name.");
    let age = +prompt("Enter your age.");

if(age >= 18){
    document.getElementById('demo').innerHTML= `Welcome ${name}! you are eligible to participate.`;
}else {
    document.getElementById('demo').innerHTML= `Sorry ${name}!! you are to young to join....`;
}
}