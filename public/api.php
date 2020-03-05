<?php

$data = [
    "question" => "What do you call a cow with no legs?",
    "answer" => "Ground beef.",
];

header('Content-Type: application/json');
echo json_encode($data);
