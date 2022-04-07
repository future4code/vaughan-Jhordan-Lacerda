//a)

type Post = Array<object>;

const posts: Post = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver",
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!",
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!",
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!",
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!",
  },
];

//b) A entrada é o Array de posts e a propriedade autor do array de posts
//eu fiquei com o erro "A propriedade 'autor' não existe no tipo 'object'" na linha 34, não consegui entender o erro.

function buscarPostsPorAutor(posts: Array<object>, autorInformado: string): Array<object>{
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }