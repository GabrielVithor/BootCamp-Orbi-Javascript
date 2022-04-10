function getAdmin(map){
    let admin = [];
    for([key,value] of map){
        if(value == "admin");
        admin.push(key);
    }
    return admin;
}
const usuarios = new Map();

usuarios.set('Gabriel',"admin");
usuarios.set('Vithor',"admin");
usuarios.set('Conceição',"admin");
usuarios.set('Mota',"usuario");

console.log(getAdmin(usuarios));