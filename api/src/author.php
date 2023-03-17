<?php 
 
/** 
 * Author Endpoint
 * 
 * Extracts Author Info from the Database
 * 
 * @author Cristian Mitoi
 */


class Author extends Endpoint
{
    protected function initialiseSQL() {
        $sql="SELECT * FROM AUTHOR";
        $params=array();

if (filter_has_var(INPUT_GET, 'paper_id')) {
    $sql = "SELECT a.author_id, a.first_name, a.middle_initial, a.last_name FROM AUTHOR AS a
         JOIN PAPER_HAS_AUTHOR AS p ON a.author_id = p.author_id 
         WHERE paper_id = :paper_id";
    $params['paper_id'] = $_GET['paper_id'];
}

$this->setSQL($sql);
$this->setSQLParams($params);

}
 
}
 

