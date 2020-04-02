<?php

$dbconn = pg_connect("host=localhost port=5432 dbname=jokesml");
$sql = 'SELECT question, answer FROM jokes';
$result = pg_query($dbconn, $sql);
$jokes = pg_fetch_all($result);

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
