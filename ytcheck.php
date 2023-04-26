<?php

// API key do YouTube Data v3
$api_key = "AIzaSyCUAB7nGGcsnrc0Crqo1NVsq55bwbQ0vW4";

// ID do canal do YouTube
$channel_id = "UCkQEoCoT8WtYcNJO3oBHreg";

// Número de resultados a serem exibidos
$results = 10;

// URL da API do YouTube Data v3 para buscar os últimos vídeos do canal
$url = "https://www.googleapis.com/youtube/v3/search?key=" . $api_key . "&channelId=" . $channel_id . "&part=snippet,id&order=date&maxResults=" . $results;

// Realiza a requisição à API e converte a resposta para um objeto PHP
$response = json_decode(file_get_contents($url));

// Cria a tabela para exibir os vídeos
echo "<table>";
echo "<tr><th>Título</th><th>Data</th></tr>";

// Loop pelos resultados e exibe cada vídeo em uma linha da tabela
foreach ($response->items as $video) {
    $title = $video->snippet->title;
    $video_id = $video->id->videoId;
    $published_at = date("d/m/Y H:i:s", strtotime($video->snippet->publishedAt));
    echo "<tr><td><a href='https://www.youtube.com/watch?v=" . $video_id . "' target='_blank'>" . $title . "</a></td><td>" . $published_at . "</td></tr>";
}

echo "</table>";

// Botão para carregar mais 10 vídeos
echo "<button id='loadMore'>Ver mais</button>";

?>
