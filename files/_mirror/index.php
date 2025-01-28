<?php
$target_url = 'https://sahin-uk.pages.dev/';
$requested_file = "";
$replace_full = '"';

if (isset($_GET['f'])) {
    $requested_file = $_GET['f'];
}

if (isset($_GET['full'])) {
    $replace_full = '';
}

$target_url = $target_url . urlencode($requested_file);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $target_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

$response = curl_exec($ch);
$my_host = $_SERVER['SERVER_NAME'];

if (curl_errno($ch)) {
    http_response_code(500);
    echo "Error fetching remote file.";
} else {
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $content_type = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);

    if ($http_code === 200) {
        header('Content-Type: ' . $content_type);

        /*
        $allowed_meta_tags = ['viewport', 'author', 'date', 'robots', 'http-equiv', 'charset','keywords','description', 'abstract', 'distribution', 'theme-color', 'app', 'og:', 'twitter:'];
        $response = preg_replace_callback('/<meta[^>]*>/i', function ($matches) use ($allowed_meta_tags) {
            foreach ($allowed_meta_tags as $tag) {
                if (stripos($matches[0], $tag) !== false) {
                    return $matches[0];
                }
            }
            return '';
        }, $response);
        */

        $response = preg_replace('/<meta name=\"publisher\" content=\"[^\"]*\" \/>/i', '<meta name="publisher" content="REDACTED_DUE_TO_MIRRORING" />', $response);
        $response = preg_replace('/<link rel=\"canonical\" href=\"[^\"]*\" \/>/i', '<link rel="canonical" href="https://'. $my_host .'/" />', $response);
        $response = preg_replace('/<title>.*?<\/title>/i', '<title>abdullah şahin - a passionate software engineer. [MIRRORED]</title>', $response);
        $response = preg_replace('/'.$replace_full.'https:\/\/sahin\.uk\//i', $replace_full.'https://'. $my_host .'/', $response);
        $response = preg_replace('/'.$replace_full.'https:\/\/abdellaui\.github\.io\/sahin\.uk\//i', $replace_full.'https://'. $my_host .'/', $response);
        // $response = preg_replace('/\"sahin\.uk/i', '"sahin.clan.rip', $response);
        // $response = preg_replace('/\"\/files\//i', '"/files.php?f=', $response);

        echo $response;
    } else {
        http_response_code($http_code);
        echo "File not found or access denied.";
    }
}

curl_close($ch);
?>
