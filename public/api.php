<?php

$jokes = [
  [
    "question" => "What do you call a cow with no legs?",
    "answer" => "Ground beef.",
  ],
  [
    "question" => "Why did the chicken cross the road?",
    "answer" => "Because I didn't think up any other jokes before the lecture.",
  ]
];

$jokeIndex = array_rand($jokes, 1);
$joke = $jokes[$jokeIndex];

$headers = getallheaders();

if (isset($headers["X-Reply-Type"])) {
  $replyType = $headers["X-Reply-Type"];
} else {
  $replyType = null;
}

switch(strtolower($replyType)) {
case "xml":
case "application/xml":
  header("Content-Type: text/xml");
  $xmlOutput = "
    <joke>
      <question>{$joke["question"]}</question>
      <answer>{$joke["answer"]}</answer>
    </joke>
  ";
  echo trim($xmlOutput);
  break;
case "json":
case "application/json":
default:
  header("Content-Type: application/json");
  echo json_encode($joke);
  break;
}
