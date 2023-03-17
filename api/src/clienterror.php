<?php
 
/**
 * Handles errors that may occur regarding the Client side
 * 
 * @author Cristian Mitoi
 */

class ClientError extends Endpoint
{
    /**
     * 
     * @param String $message - Message explaining error
     * @param Int $code - http status code
     */
    public function __construct($message, $code) {
        http_response_code($code);
 
        // Setting the response for all endpoints
        $this->setData( array(
            "length" => 0,
            "message" => $message,
            "data" => null
        ));
    }
}