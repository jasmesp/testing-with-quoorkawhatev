var y = 4
var z = 8
var x = z > y ? 4: 3; 
console.log(x);


function useName(){
    let name = "Jas";
    return [
        () => `Hello ${name}`,
        (newName) => name = newName
    ]
}

const [sexy, setName] = useName();
console.log(sexy());
console.log(useName());

setName("Jasmin");
console.log(sexy());


