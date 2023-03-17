<?php

use FirebaseJWT\JWT;
use FirebaseJWT\Key;
 
/** 
 * Update Award
 * 
 * Update the award for a specified paper. A valid JWT
 * is required.
 * 
 * @author Cristian Mitoi
 */

class Update extends Endpoint 
{

    public function __construct()
    {
        $this->validateRequestMethod("POST");
        $this->validateToken();
        $this->validateUpdateParams();

        $db = new Database("db/chiplay.sqlite");
        $this->initialiseSQL();
        $queryResult = $db->executeSQL($this->getSQL(), $this->getSQLParams());

        $this->setData( array(
            "length" => 0,
            "message" => "succes",
            "data" => null
        ));
    }

    private function validateRequestMethod($method) {
  if ($_SERVER['REQUEST_METHOD'] != $method) {
    throw new ClientErrorException("Invalid Request Method", 405);
   }

  }

    private function validateToken() {
  $key = SECRET;
        
  // Get all headers from the http request
  $allHeaders = getallheaders();
  $authorizationHeader = "";
        
  // Look for an Authorization header. This 
  // this might not exist. It might start with a capital A (requests
  // from Postman do), or a lowercase a (requests from browsers might)
  if (array_key_exists('Authorization', $allHeaders)) {
    $authorizationHeader = $allHeaders['Authorization'];
  } elseif (array_key_exists('authorization', $allHeaders)) {
    $authorizationHeader = $allHeaders['authorization'];
  }
        
  // Check if there is a Bearer token in the header
  if (substr($authorizationHeader, 0, 7) != 'Bearer ') {
    throw new ClientErrorException("Bearer token required", 401);
  }
 
  // Extract the JWT from the header 
  $jwt = trim(substr($authorizationHeader, 7));
 try{
  $decoded = JWT::decode($jwt, new Key($key, 'HS256'));

 }catch (Exception $e){
    throw new ClientErrorException($e->getMessage(), 401);
    }

    if ($decoded->iss != $_SERVER['HTTP_HOST']) {
  throw new ClientErrorException("invalid token issuer", 401);
 }

   }

   private function validateUpdateParams() {
 
  //Look for a award and paper_id parameter
  if (!filter_has_var(INPUT_POST,'award')) {
    throw new ClientErrorException("award parameter required", 400);
  }
  if (!filter_has_var(INPUT_POST,'paper_id')) {
    throw new ClientErrorException("paper_id parameter required", 400);
  }
       
  // Check to see if a valid award is supplied 
  $award = ["true", "none"];
  if (!in_array(strtolower($_POST['award']), $award)) {
    throw new ClientErrorException("invalid award", 400);
  }
}

 protected function initialiseSQL() {
        $award_ids = ["true"=>"true","none"=>"none"];

        $award_id =$award_ids[strtolower($_POST['award'])];
       
        $sql = "UPDATE paper SET award = :award WHERE paper_id = :paper_id";
        $this->setSQL($sql);
        $this->setSQLParams(['award'=> $award_id, 'paper_id'=>$_POST['paper_id']]);
      }

}