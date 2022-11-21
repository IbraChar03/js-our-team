
const listaMembri = [

     {
        "nome" : "Wayne Barnett",
        "ruolo" : "Founder & CEO",
        "foto" : "img/img1.jpg"
     },

     {
        "nome" : "Angela Caroll",
        "ruolo" : "Chief Editor",
        "foto" : "img/img2.jpg"
     },

     {
        "nome" : "Walter Gordon",
        "ruolo" : "Office Manager",
        "foto" : "img/img3.jpg"
     },

     {
        "nome" : "Angela Lopez",
        "ruolo" : "Social Media Manager",
        "foto" : "img/img4.jpg"
     },

     {
        "nome" : "Scott Estrada",
        "ruolo" : "Developer",
        "foto" : "img/img5.jpg"
     },

     {
        "nome" : "Barbara Ramos",
        "ruolo" : "Graphic Designer",
        "foto" : "img/img6.jpg"
     },


]

for(i = 0; i < listaMembri.length; i++){

    let ObjMembri = listaMembri[i];
    let imgBox = document.getElementById("box" + i);
    let imgElement = document.createElement("img");
    imgElement.classList.add("img-size");
    imgElement.src = ObjMembri.foto;
    imgBox.append(imgElement);


    let nameBox = document.getElementById("name" + i);
    let nameElement = document.createElement("div");
    nameElement.innerHTML = ObjMembri.nome;
    nameElement.classList.add("name-class");
    nameBox.append(nameElement);


    let roleBox = document.getElementById("role" + i);
    let roleElement = document.createElement("div");
    roleElement.innerHTML = ObjMembri.ruolo;
    roleElement.classList.add("role-class");
    roleBox.append(roleElement);
   
    console.log(ObjMembri.nome, ObjMembri.ruolo, ObjMembri.foto)
    
}


