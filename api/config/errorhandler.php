<?php

/**
 * Error Handle component
 * 
 * Handles Errors that may occur
 * 
 * @author 
 */

class ErrorHandle{

public static function errorHandler($errno, $errstr, $errfile, $errline) {
    if ($errno != 2 && $errno != 8) {
        throw new Exception("Error Detected: [$errno] $errstr file: $errfile line: $errline", 1);
    }
 }

}