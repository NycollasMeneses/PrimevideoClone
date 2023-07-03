<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recupera os dados do formulário
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    // Conecta ao banco de dados (substitua os valores com suas informações de conexão)
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "formulariocadastro";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verifica a conexão
    if ($conn->connect_error) {
        die("Erro na conexão com o banco de dados: " . $conn->connect_error);
    }

    // Consulta o banco de dados para verificar as credenciais do usuário 
    $sql = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Redireciona para a página principal após o login
        header("Location: amazonprime.html");
        exit();
    } else {
        // Redireciona de volta para a página de login com uma mensagem de erro
        header("Location: login.html?msg=error");
        exit();
    }
}
$conn->close();

?>
