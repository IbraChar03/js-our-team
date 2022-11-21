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
    let ObjMembri=listaMembri[i];
    console.log(ObjMembri.nome, ObjMembri.ruolo, ObjMembri.foto)
}

