<?php 

/** 
 * Conference component
 * 
 * Extracts Conference Info from the Database
 * Will be shown on the landing page along with some hard coded info
 * 
 * @author Cristian Mitoi
 */

class Conference
{
    private $data;
 
    public function __construct() {
        $db = new Database("db/chiplay.sqlite");
        $this->data = $db->executeSQL("SELECT name FROM conference_information");
    }
 
    public function getData() {
        return $this->data;
    }
 
}