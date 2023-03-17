<?php 
 /** 
 * Paper endpoint
 * 
 * Extracts Paper Info from the Database
 * 
 * @author Cristian Mitoi
 */

class Paper extends Endpoint
{
  protected function initialiseSQL() {

        $sql = "SELECT p.paper_id, p.track_id, p.title, ifnull(p.award, 'none') AS award, p.abstract, p.video, ifnull(p.doi, 'none') AS doi, t.name, t.short_name FROM PAPER AS p 
        LEFT JOIN TRACK AS t ON t.track_id = p.track_id";
        $params=array();

if (filter_has_var(INPUT_GET, 'track')) {
    $sql .= " WHERE short_name = :track";
    $params['track'] = $_GET['track'];
}

$this->setSQL($sql);
$this->setSQLParams($params);
}
 
}
 

