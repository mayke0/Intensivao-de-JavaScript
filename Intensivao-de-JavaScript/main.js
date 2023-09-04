import { inicializarCarrinho } from "./src/menuCarrinho";
const catalogo = [
  {
    id: 1,
    marca: "Zara",
    nome: "Camisa Larga com Bolso",
    preco: 70,
    nomeArquivoImg: "product-1.jpg",
    feminino: false,
  },

  {
    id: 2,
    marca: "Zara",
    nome: "Casaco Reto com Lã",
    preco: 85,
    nomeArquivoImg: "product-2.jpg",
    feminino: true,
  },

  {
    id: 3,
    marca: "Zara",
    nome: "Jaqueta com Efeito Camurça",
    preco: 60,
    nomeArquivoImg: "product-3.jpg",
    feminino: false,
  },

  {
    id: 4,
    marca: "Zara",
    nome: "Sobretudo em Mescla de Lã",
    preco: 160,
    nomeArquivoImg: "product-4.jpg",
    feminino: false,
  },

  {
    id: 5,
    marca: "Zara",
    nome: "Camisa Larga Acolchoada de Veludo Cotelê",
    preco: 110,
    nomeArquivoImg: "product-5.jpg",
    feminino: false,
  },

  {
    id: 6,
    marca: "Zara",
    nome: "Casaco de Lã com Botões",
    preco: 170,
    nomeArquivoImg: "product-6.jpg",
    feminino: false,
  },

  {
    id: 7,
    marca: "Zara",
    nome: "Casaco com Botões",
    preco: 75,
    nomeArquivoImg: "product-7.jpg",
    feminino: true,
  },

  {
    id: 8,
    marca: "Zara",
    nome: "Colete Comprido com Cinto",
    preco: 88,
    nomeArquivoImg: "product-8.jpg",
    feminino: true,
  },
];
for (const produtoCatalogo of catalogo) {
  const cartaoProduto = `<div class='border-solid border-2 border-sky-500 w-48 m-2' id="card-produto-${produtoCatalogo.id}"> 
  <img 
  src="./assets/img/${produtoCatalogo.nomeArquivoImg}"
  alt="Produto 1 de intJavascript"
  style="height: 300px;"
  />
  <p class ='marca'>${produtoCatalogo.marca}</p>
  <p>${produtoCatalogo.nome}</p>
  <p>${produtoCatalogo.preco}</p>
  <button>Adicionar</button>
   </div>`;

  document.getElementById("container-produto").innerHTML += cartaoProduto;
}
inicializarCarrinho();
