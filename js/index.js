
//comentarios

const BtnTroca1 = document.querySelectorAll(".btnTroca");
const comment = document.getElementById("comment");
const ImgPerfil = document.getElementById("img-perfil");
const name = document.getElementById("nome");

const commentArray = [

    {
        nome: "Lucas",
        depoimento: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo rerum iusto, earum, beatae,quisquam optio incidunt quidem ea ducimus laborum velit labore tempora quod dolore. Quae temporibus suscipit sapiente qui!",
        img: "../imgPerfil/pessoa.jpg"
    },
    {
        nome: "Lara",
        depoimento: "Sapiente, corporis porro minus fugit magnam recusandae aliquid aut aliquam, eligendi nihil deleniti!",
        img: "../imgPerfil/pessoa1.jpg"
    },
    {
        nome: "Rafael",
        depoimento: "Quas nisi veniam odit, facere vitae inventore tenetur cum assumenda natus cumque possimus beatae dignissimos aliquid ipsa dolores",
        img: "../imgPerfil/pessoa2.jpg"
    }
];

name.innerHTML = commentArray[0].nome;
comment.innerHTML = commentArray[0].depoimento;
ImgPerfil.src = commentArray[0].img;

function commentCarrossel() {

    name.innerHTML = commentArray[0].nome;
    ImgPerfil.src = commentArray[0].img;
    comment.innerHTML = commentArray[0].depoimento;
}

function commentCarrosselOne() {
    name.innerHTML = commentArray[1].nome;
    ImgPerfil.src = commentArray[1].img;
    comment.innerHTML = commentArray[1].depoimento;
}

function commentCarrosselTwo() {
    name.innerHTML = commentArray[2].nome;
    ImgPerfil.src = commentArray[2].img;
    comment.innerHTML = commentArray[2].depoimento;
}


for (let i = 0; i < commentArray.length; i++) {
    BtnTroca1[0].addEventListener("click", commentCarrossel);
    BtnTroca1[1].addEventListener("click", commentCarrosselOne);
    BtnTroca1[2].addEventListener("click", commentCarrosselTwo);
}
//fim comentarios
