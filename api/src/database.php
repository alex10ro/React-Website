<?php
/**
 * Connect and interact with an SQLite database 
 * 
 * @author Cristian Mitoi 
 */

class Database 
{
    private $dbConnection;
    
   
    public function __construct($dbName) {
        $dbName = "db/chiplay.sqlite";
        $this->setDbConnection($dbName);
    }

    private function setDbConnection($dbName) {  
            $this->dbConnection = new PDO('sqlite:'.$dbName);
            $this->dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     }

    /**
     * Execute an SQL prepared statement
     *
     * This function executes the query and uses the PDO 'fetchAll' method with the
     * 'FETCH_ASSOC' flag set so that an associative array of results is returned.
     */
    public function executeSQL($sql, $params=[]) { 
        $stmt = $this->dbConnection->prepare($sql);
        $stmt->execute($params);

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}