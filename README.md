# Projeto-Amigo-Secreto-Alura
Projeto desenvolvido por mim, em conjunto com a plataforma de estudos Alura

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manual de Uso - Lista de Amigos e Sorteio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background-color: #f4f4f4;
            padding: 2px 5px;
            border-radius: 3px;
        }
        ul {
            list-style-type: disc;
            margin-left: 20px;
        }
    </style>
</head>
<body>
    <h1>Manual de Uso - Lista de Amigos e Sorteio</h1>
    <p>Este documento fornece um guia sobre como utilizar o código JavaScript para adicionar amigos a uma lista e sortear um amigo secreto.</p>

    <h2>Funcionalidades</h2>
    <ul>
        <li><strong>Adicionar Amigo:</strong> Permite adicionar nomes de amigos à lista.</li>
        <li><strong>Listar Amigos:</strong> Exibe a lista de amigos adicionados.</li>
        <li><strong>Sortear Amigo:</strong> Sorteia um amigo secreto da lista.</li>
        <li><strong>Limpar Lista:</strong> Remove todos os amigos da lista.</li>
    </ul>

    <h2>Como Usar</h2>
    <ol>
        <li>
            <strong>Adicionar um Amigo:</strong>
            <ul>
                <li>Digite o nome do amigo no campo de entrada.</li>
                <li>Clique no botão "Adicionar" para adicionar o nome à lista.</li>
                <li>O nome será exibido na lista de amigos abaixo do campo de entrada.</li>
            </ul>
        </li>
        <li>
            <strong>Sortear um Amigo:</strong>
            <ul>
                <li>Após adicionar pelo menos um amigo à lista, clique no botão "Sortear".</li>
                <li>O nome do amigo sorteado será exibido na tela.</li>
                <li>A lista de amigos será automaticamente limpa após o sorteio.</li>
            </ul>
        </li>
        <li>
            <strong>Limpar a Lista:</strong>
            <ul>
                <li>Para limpar a lista de amigos sem sortear, clique no botão "Limpar Lista".</li>
            </ul>
        </li>
    </ol>

    <h2>Validações</h2>
    <ul>
        <li><strong>Nome Válido:</strong> O nome deve conter apenas letras e espaços. Caracteres especiais ou números não são permitidos.</li>
        <li><strong>Nome Único:</strong> Não é possível adicionar o mesmo nome mais de uma vez.</li>
        <li><strong>Campo Vazio:</strong> O campo de entrada não pode estar vazio ao adicionar um nome.</li>
    </ul>

    <h2>Estrutura do Código</h2>
    <p>O código JavaScript é composto pelas seguintes funções:</p>
    <ul>
        <li><code>adicionarAmigo()</code>: Adiciona um nome à lista de amigos após validação.</li>
        <li><code>listaHTML()</code>: Atualiza a lista de amigos exibida na tela.</li>
        <li><code>limparCampo()</code>: Limpa o campo de entrada após adicionar um nome.</li>
        <li><code>sortearAmigo()</code>: Sorteia um amigo da lista e exibe o resultado.</li>
        <li><code>limparLista()</code>: Limpa a lista de amigos e a exibição na tela.</li>
    </ul>

    <h2>Exemplo de Uso</h2>
    <p>Aqui está um exemplo de como o código pode ser utilizado em uma página HTML:</p>
    <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Sorteio de Amigo Secreto&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Sorteio de Amigo Secreto&lt;/h1&gt;
    &lt;input type="text" placeholder="Digite o nome do amigo"&gt;
    &lt;button onclick="adicionarAmigo()"&gt;Adicionar&lt;/button&gt;
    &lt;button onclick="sortearAmigo()"&gt;Sortear&lt;/button&gt;
    &lt;button onclick="limparLista()"&gt;Limpar Lista&lt;/button&gt;
    &lt;ul id="listaAmigos"&gt;&lt;/ul&gt;
    &lt;p id="resultado"&gt;&lt;/p&gt;
    &lt;script src="seu-script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
    </pre>

    <h2>Considerações Finais</h2>
    <p>Este código é uma solução simples para gerenciar uma lista de amigos e realizar um sorteio. Ele pode ser facilmente integrado em uma página web e personalizado conforme necessário.</p>
</body>
</html>
