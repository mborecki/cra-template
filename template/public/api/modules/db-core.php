<?php

namespace App;

use PDO;

class DBCore {

    private $host;
    private $name;
    private $login;
    private $password;

    private $connection;

    function __construct()
    {
        $this->host = DB_HOST;
        $this->name = DB_NAME;
        $this->login =  DB_LOGIN;
        $this->password = DB_PASSWORD;
    }

    protected function getConnection()
    {

        if (!$this->connection) {
            $this->connection = new PDO('mysql:host='.$this->host.';dbname='.$this->name, $this->login, $this->password);
        }

        return $this->connection;
    }

    public function dev_makeQuery($sql) {
        $sth = $this->getConnection()->prepare($sql);
        $sth->execute();

        // print_r($sth->errorInfo());

        return $sth->fetchAll();
    }
}
