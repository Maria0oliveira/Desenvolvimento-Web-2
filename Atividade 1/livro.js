class Livro {
    constructor(titulo, autor,ano){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        detalhes = function(){
            console.log ('Titulo:'+ this.titulo, 'Autor:'+ this.autor, 'ano:'+this.ano)
        }
    }
}

primeiro_livro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
segundo_livro = new Livro("1984", "George Orwell", 1949);

primeiro_livro.detalhes();
segundo_livro.detalhes();
