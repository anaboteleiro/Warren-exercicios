const listaDeProdutos = [
    { nome: 'TV', preco: 2500, avaliacao: 4.5 },
    { nome: 'Notebook', preco: 4000, avaliacao: 3.0 },
    { nome: 'Robô aspirador', preco: 1200, avaliacao: 5.0 },
    { nome: 'Iphone', preco: 1000000, avaliacao: 4.2 },
    { nome: 'Playstation 5', preco: 3850, avaliacao: 3.5 },
    { nome: 'Geladeira', preco: 2899, avaliacao: 4.0 },
    { nome: 'Fogão', preco: 899, avaliacao: 4.6 },
    { nome: 'Microondas', preco: 600, avaliacao: 4.9 },
    { nome: 'Ar condicionado', preco: 1800, avaliacao: 3.9 },
    { nome: 'Cafeteira', preco: 100, avaliacao: 2.5 }
    ];

    const resultado = listaDeProdutos.map(function(produto,index ){
      return produto.nome + index 
    })
    console.log(resultado)
