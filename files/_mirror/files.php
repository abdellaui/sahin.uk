<?php
$remote_base_url = 'https://sahin-uk.pages.dev/files/';

if (isset($_GET['f'])) {
    $requested_file = $_GET['f'];
    $remote_file_url = $remote_base_url . urlencode($requested_file);

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $remote_file_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

    $response = curl_exec($ch);

    if (curl_errno($ch)) {
        http_response_code(500);
        echo "Error fetching remote file.";
    } else {
        $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $content_type = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);

        if ($http_code === 200) {
            header('Content-Type: ' . $content_type);
            echo $response;
        } else {
            http_response_code($http_code);
            echo "File not found or access denied.";
        }
    }

    curl_close($ch);
} else {
    http_response_code(403);
    echo "Access denied.";
}
?>
