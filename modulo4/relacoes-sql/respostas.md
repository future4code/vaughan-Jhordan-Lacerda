### Exercicio 1
a) Chave estrangeira é uma forma de fazer com que duas tabelas se relacionem.
b) 
```
INSERT INTO rating VALUES
(1, "mais ou menos", 5, "002"),
(2, "interessante", 7, "003"),
(3, "bom", 8, "004"),
(4, "chato", 3, "005"),
(5, "VAI SER BOM DEMAIS", 10, "006"),
(6, "Muito bom", 9.5, "007"),
(7, "Muito escuro", 9, "008");
```
c) Lá fala que não pode adicionar ou atualizar uma linha porque a chave estrangeira falhou, ou seja, ele não pode atualizar/adicionar uma informação a uma linha que não existe.

d) 
```
ALTER TABLE Movie
DROP COLUMN rating;
```

e) Coluna não existente
```
DELETE FROM Movie
WHERE Movie.rating = 5;
```

### Exercicio 2
a) Ela tem duas linhas que serão chaves estrangeiras para relacionar com outras duas tabelas (Movie e Actor).

b)
```
INSERT INTO MovieCast VALUES
("002", "006"),
("003", "004"),
("004", "006"),
("005", "004"),
("006", "006"),
("007", "004"),
("008", "006");

```

c) Não pode ser adicionada/atualizado a linha porque a constraint da chave estrangeira falhou.

d)Falou que eu estava usando o modo segura e eu não podia apagar
```
DELETE FROM Actor
WHERE Actor.id = 004;
```

### Exercicio 3

a) Ela vai selecionar as combinações dos itens das duas tabelas rekacionadas. o ON representa uma condição.

b)
```
SELECT Movie.id, title, rating.rate FROM Movie 
JOIN rating ON Movie.id = rating.movie_id;
```