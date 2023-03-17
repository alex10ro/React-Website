<?php 

use FirebaseJWT\JWT;
 
/**
 * Authenticate username and password
 *
 * This class will check a username and password again those held in the 
 * database. Where authentication is successful it will return a JWT.
 *
 * @author Cristian Mitoi
 */


class Authenticate extends Endpoint
{
    public function __construct() {

         $db = new Database("db/chiplay.sqlite");
        $this->validateRequestMethod("POST");
        $this->validateAuthParameters();

        $this->initialiseSQL();
        $queryResult = $db->executeSQL($this->getSQL(), $this->getSQLParams());

        $this->validateUsername($queryResult); 
        $this->validatePassword($queryResult); 

        $data['token'] = $this->createJWT($queryResult);
 
        $this->setData( array(
          "length" => 0, 
          "message" => "succes",
          "data" => $data
        ));
    }
 

    protected function initialiseSQL() {
        $sql = "SELECT username, password FROM account WHERE username = :username";
        $this->setSQL($sql);
        $this->setSQLParams(['username'=>$_SERVER['PHP_AUTH_USER']]);
    }

    private function validateRequestMethod($method) {
        if ($_SERVER['REQUEST_METHOD'] != $method){
            throw new ClientErrorException("invalid request method", 405);
        }
    }
 

    private function validateAuthParameters() {
        if ( !isset($_SERVER['PHP_AUTH_USER']) || !isset($_SERVER['PHP_AUTH_PW']) ) {
            throw new ClientErrorException("username and password required", 401);
        }
    }
 
   
  private function validateUsername($data) {
        if (count($data)<1) {
            throw new ClientErrorException("invalid credentials", 401);
        } 
    }


    private function validatePassword($data) {
        if (!password_verify($_SERVER['PHP_AUTH_PW'], $data[0]['password'])) {
            throw new ClientErrorException("invalid credentials", 401);
        } 
    }


    private function createJWT($queryResult) {
  $secretKey = SECRET;
 
        // for the iat and exp claims we need to know the time
        $time = time();
       
        // In the payload we use the time for the iat claim and add  
        // one day for the exp claim. For the iss claim we get
        // the name of the host the code is executing on
        $tokenPayload = [
          'iat' => $time,
          'exp' => strtotime('+1 day', $time),
          'iss' => $_SERVER['HTTP_HOST'],
          'sub' => $queryResult[0]['id']
        ];
              
        $jwt = JWT::encode($tokenPayload, $secretKey, 'HS256');
        
        return $jwt;
}

}