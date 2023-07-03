<?php
if (isset($_POST['cadastrar'])) {
    $nome = $_POST["nome"];
    $sobrenome = $_POST["sobrenome"];
    $cpf = $_POST["cpf"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];
    $check_senha = $_POST["check-senha"];

    if ($senha != $check_senha) {
        die("As senhas não correspondem");
    }

    $host = "localhost";
    $banco = "formulariocadastro";
    $user = "root";
    $senha_user = "";

    $con = mysqli_connect($host, $user, $senha_user, $banco);

    if (!$con) {
        die("Não foi possível conectar: " . mysqli_connect_error());
    }

    $sql = "INSERT INTO usuarios(Nome, Sobrenome, CPF, Email, Senha) VALUES ('$nome', '$sobrenome', '$cpf', '$email', '$senha')";

    $rs = mysqli_query($con, $sql);

    if ($rs) {
        mysqli_close($con);
        header("Location: login.html?msg=success");
        exit();
    } else {
        echo "Erro na consulta: " . mysqli_error($con);
        mysqli_close($con);
        die("Erro ao criar a conta");
    }
}
?>
