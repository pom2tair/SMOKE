<?php
header('Content-Type: application/json');

// Connexion à la base de données (ajustez les paramètres selon votre configuration)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "form_data";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Récupérer les données des formulaires
$sql = "SELECT * FROM submissions";
$result = $conn->query($sql);

$forms = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $forms[] = $row;
    }
}

$conn->close();

echo json_encode($forms);
?>