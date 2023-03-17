<?php

/**
 * Config component
 * 
 * General class for config components
 * 
 * @author Cristian Mitoi
 */

define('DEVELOPMENT_MODE', false);
define('SECRET', "isBtGuwYjOdMczBTKDcrO3hStouedRTo");

ini_set('display_errors', DEVELOPMENT_MODE);
ini_set('display_startup_errors', DEVELOPMENT_MODE);
error_reporting(E_ALL);
 
include 'exceptionhandler.php';
set_exception_handler('ExceptionHandle::exceptionHandler');
 
include 'errorhandler.php';
set_error_handler('ErrorHandle::errorHandler');
 
include 'autoloader.php';
spl_autoload_register('Autoload::autoloader');