# PrimevideoClone
Clonagem da Plataforma do prime video
Este é um projeto de clone do site Amazon Prime Video, onde é possível exibir uma lista de filmes populares obtidos a partir da API do The Movie Database (TMDb). O projeto consiste em uma página inicial com um cabeçalho, um campo de busca e uma seção central para exibição dos filmes.

Tecnologias utilizadas
HTML
CSS
JavaScript
Executando o projeto
Clone o repositório para o seu ambiente de desenvolvimento:
bash
Copy code
git clone https://github.com/seu-usuario/amazon-prime-video-clone.git
Abra o arquivo index.html no seu navegador de preferência.
Funcionalidades
Exibição de filmes populares: Os filmes populares são obtidos por meio de requisições à API do TMDb e são exibidos na seção central da página inicial. São exibidos banners para os primeiros filmes e cartões para os demais.
Pesquisa de filmes: É possível realizar pesquisas por filmes utilizando o campo de busca na parte superior da página. No entanto, essa funcionalidade ainda não está implementada no código fornecido.
Estrutura do projeto
index.html: Arquivo principal contendo a estrutura HTML da página.
style.css: Arquivo CSS com as regras de estilização do projeto.
movie.js: Arquivo JavaScript responsável por obter os dados dos filmes da API e exibi-los na página.
Observações
O projeto atualmente exibe filmes apenas da primeira página da API de filmes populares do TMDb. Caso queira exibir mais filmes, é necessário fazer requisições para outras páginas e adicionar a lógica correspondente no código JavaScript.
A funcionalidade de pesquisa de filmes ainda não está implementada no código fornecido. Para implementá-la, será necessário adicionar um evento de escuta ao campo de busca e realizar a lógica de pesquisa nos dados obtidos da API.
Sinta-se à vontade para modificar e expandir esse projeto de acordo com suas necessidades.
