<?php

namespace App;

use App\DBCore;
use Exception;

class DB extends DBCore
{
    private static $instance = null;
    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = new DB();
        }

        return self::$instance;
    }

    function demo($limit) {
        $sql = 'SELECT * FROM table_name LIMIT :limit';

        $stm = $this->getConnection()->prepare($sql);
        $stm->execute(array("limit" => $limit));

        $result = $stm->fetchAll();
        $errorCode = $stm->errorCode();

        if ($errorCode != 0) {
            throw new Exception("Data base error", 1);
        }
    }
}
