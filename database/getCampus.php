<?php
// This File prints out entire database
// and formats to JSON to be used via ANGULARJS

// Allow for cross site HTTP requests
header("Access-Control-Allow-Origin: *");
// Define the content of this specific file (if someone goes to this address 
header("Content-Type: application/json; charset=UTF-8");

/*
$server = "mysql1.000webhost.com";
$user = "id95775_parking";					// username is the name of our website hosted on 00webhost
$password = "Unicorns1!";					// password for site
$database = "id95775_parkingdb";
*/


$server = "localhost";						// 00webhost sql db
$user = "id95775_parking";					// username is the name of our website hosted on 00webhost
$password = "Unicorns1!";					// password for site
$database = "id95775_parkingdb";


// Establish connection for fetching database
$conn = new mysqli($server, $user, $password, $database );

if($conn->connect_error){
	// kill the script
	die("Unable to connect to Database: " . $conn->connect_error);
}

$sql = "SELECT * FROM Campus";

// Initialize an output variable to echo to JAVAscript
$outp = "";
$result = $conn->query($sql);

while( $rs = $result->fetch_assoc() ){
	// inject a comma after each object from array is inserted
	if( $outp != "" ){
		$outp .= ",";
	}

	// output the DATABASE into JSON formatted data
	$outp .= '{"Campus":"' .$rs["campus"]. '"}';
}

// wrap up the obects into an array with var name "parkingDB" 
$outp = '{"CampusDB":[' .$outp.']}';
$conn->close();

// print the database to php
echo($outp);
?>
