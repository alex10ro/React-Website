<?php

/**
 * Exception Handle component
 * 
 * Handles Exceptions
 * 
 * @author 
 */

class ExceptionHandle{

    public static function exceptionHandler($e) {
        http_response_code(500);
        $output['message'] = $e->getMessage();
        $output['location']['file'] = $e->getFile();
        $output['location']['line'] = $e->getLine();
        echo json_encode($output);
     }
   }
 
     class BadRequest extends Exception
     {
       public function badRequestMessage()
       {  
          http_response_code(400);
          $output["message"] = $this->message;
          return $output;
       }
     }
