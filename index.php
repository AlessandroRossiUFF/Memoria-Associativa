<!DOCTYPE html>
<html lang="pt-br">


<style>
:root {
    --cor-principal: rgb(47,79,79);  
    --cor-secundaria: rgb(21, 228, 235);
    justify-content: center
}

nav {
    max-width: 350px;
    width: 100%;
    background-color: aquamarine;
    justify-content: center
}

nav ul {
    list-style-type: none;
    padding: 0;
    justify-content: center
}

nav ul li{
    border-bottom: 1px solid var(--cor-secundaria);
}

nav ul li a {
    background-color: var(--cor-principal);
    color: #FFF;
    padding: 10px;
    display: block;
    text-decoration: none;
    transition: background .3s;
    text-transform: uppercase;
    justify-content: center

}

nav ul li a:hover {
    background-color: var(--cor-secundaria);
    color: var(--cor-principal);
    justify-content: center
}
</style>


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu Vertical com CSS</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="header">
    <h1> ~ MEMÓRIA E CONTA ~ </h1>
  </div>
 
    <nav    >
        <ul>
            <li><a href="https://memoria-associativa.alessandrorossi.repl.co/nivelfacil">Nível Fácil</a></li>
            <li><a href="https://memoria-associativa.alessandrorossi.repl.co/nivelmedio">Nível Médio</a></li>
            <li><a href="#">Nível Dificil</a></li>
            <li><a href="#">Como jogar</a></li>
            <li><a href="#contato">Criar/Editar Baralhos</a></li>
        </ul>
    </nav>
    
</body>

</html>