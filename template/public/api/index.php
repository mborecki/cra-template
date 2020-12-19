
<?php

// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/db.config.php';
require __DIR__ . '/models/index.php';
require __DIR__ . '/modules/index.php';

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Slim\Factory\AppFactory;
use App\DB;

define('API_BASE_URL', '/api');

$app = AppFactory::create();

// Cross-domain
$app->add(function ($request, $handler) {
    $response = $handler->handle($request);

    $origin = $request->getHeader('Origin');

    return $response
        ->withHeader('Access-Control-Allow-Origin', $origin ? $origin : '')
        ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
        ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
        ->withHeader('Access-Control-Allow-Credentials', 'true');
});


//Disable browser cashe
$app->add(function ($request, $handler) {
    $response = $handler->handle($request);

    return $response
        ->withHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        ->withHeader('Cache-Control', 'post-check=0, pre-check=0')
        ->withHeader('Pragma', 'no-cache');
});



$app->get(API_BASE_URL . '/', function (ServerRequestInterface $request, ResponseInterface $response, $args) {
    $response->getBody()->write("Hello world!");
    return $response;
});

$app->get(API_BASE_URL . '/config', function (ServerRequestInterface $request, ResponseInterface $response, $args) {
    $response->getBody()->write(json_encode(array(
        "time" => time(),
    ), JSON_NUMERIC_CHECK));
    return $response;
});

// TODO! Remove this before launch!
$app->get(API_BASE_URL . '/reset-db', function (ServerRequestInterface $request, ResponseInterface $response, $args) {
    $query = file_get_contents(__DIR__ . "/sql/reset.sql");
    $result = DB::getInstance()->dev_makeQuery($query);

    $response->getBody()->write($query);
    $response->getBody()->write(json_encode($result));
    return $response;
});
