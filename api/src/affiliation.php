<?php

/** 
 * Affiliation component
 * 
 * Extracts Affiliation Info from the Database
 * Important Info are author's institution and country which are used within the React Web App
 * 
 * @author Cristian Mitoi
 */


class Affiliation extends Endpoint
{

    protected function initialiseSQL() {

        $sql="SELECT a.author_id, a.first_name, a.middle_initial, a.last_name, af.country, af.institution, af.paper_id FROM AUTHOR AS a
        JOIN AFFILIATION AS af ON(a.author_id = af.author_id)";
        $params=array();

       if(filter_has_var(INPUT_GET, 'author_id') && filter_has_var(INPUT_GET, 'paper_id'))  {
            $sql .="WHERE a.author_id = :id AND af.paper_id= :paperID" ;
                $params[":id"]=$_GET['author_id'];
                $params[":paperID"]=$_GET['paper_id'];
             }

        $this->setSQL($sql);
        $this->setSQLParams($params);

     }
             

 }