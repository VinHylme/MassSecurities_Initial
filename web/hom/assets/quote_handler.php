<?php
$to = $_POST['email_1'];
$subject = "Thank you, We will be in touch with you soon";
// Get HTML contents from file
$htmlContent1 = file_get_contents("email_template.html");
$htmlContent  = "<h1>Quote by:</h1> " . "<br />";
$htmlContent .= "<h3>Name: </h3>" . $_POST['name'] ."<br />";
$htmlContent .= "<h3>Phone Number: </h3>" . $_POST['phone_nu'] ."<br />";
$htmlContent .= "<h3>Home Address: </h3>" . $_POST['home_address'] ."<br />";
$htmlContent .= "<h3>Post Code: </h3>" . $_POST['p_code'] ."<br />";

$selectedService = $_POST['select_service'];
switch($selectedService){
    case 1: $htmlContent .= "<h2> Service Type: CCTV Systems </h2>" ;
            $htmlContent .= "<h3>Do you have an existinf CCTV System </h3>" . $_POST['yes_an_no']."<br />";
            $htmlContent .= "<h3>What type of property is the CCTV system required for? </h3>" . $_POST['property_type']."<br />";
            $htmlContent .= "<h3>How many security cameras do you require? </h3>" . $_POST['cam_nu']."<br />";
            $htmlContent .= "<h3>How long do you want to keep the recorded CCTV footage? </h3>" . $_POST['length_fot']."<br />";
            $htmlContent .= "<h3>When do you want the CCTV system installed? </h3>" . $_POST['datepicker']."<br />";
            break;
    case 2: $htmlContent .= "<h2> Alarm Systems </h2>";
            $htmlContent .= "<h3> Do you want a wired or wireless Alarm System?</h3> " . $_POST['wired_wireless'];
            $htmlContent .= "<h3> How many rooms do you want to cover with Alarm motion sensors? </h3>" . $_POST['select_PIR'];
            $htmlContent .= "<h3> How many doors or windows do you want to secure with magnetic intruder sensors? </h3>" . $_POST['intruder_select'];
            $htmlContent .= "<h3> When do you need the Alarm System Installed? </h3>" . $_POST['datepicker2'];
            break;
    
    case 3: $htmlContent .= "<h2> Fire Alarm Systems</h2>";
            $htmlContent .= "<h3> Fire Alarm sensors required? </h3>";
            if(!empty($_POST['sensors_t'])){
                foreach($_POST['sensors_t'] as $_POST['sensors_t']=>$value){
                        $htmlContent .= " " .$value ",";
                }
            }

            $htmlContent .= "<h3> Type of property is the fire alarm system required for?</h3>" . $_POST['cg2_fas'];

            $htmlContent .= "<h3> The size of your premises that needs fire protection? </h3>" .$_POST['fp_select'];
            $htmlContent .= "<h3> When do you want the fire alarm system to be installed? </h3>" .$_POST['datepicker3'];
            break;
            
    case 4: $htmlContent .="<h2> Electrical Services </h2>";
            $htmlContent .="<h3> What service do you require? </h3>";
            if(!empty($_POST['s_main'])){
                foreach($_POST['s_main'] as $_POST['s_main']=>$value){
                        $htmlContent .= " " .$value ",";
                }
            }
            $htmlContent .="<h3> Please specify the number of rooms that will need work to be done </h3>" . $_POST['room_select'];
            $htmlContent .="<h3> When do you require this service?</h3>" . $_POST['datepicker4'];
            break;
    
    case 5: $htmlContent .="<h2> Maintenance Services </h2>";
            $htmlContent .="<h3> What maintenance service do you require? </h3>";
            if(!empty($_POST['m_services'])){
                foreach($_POST['m_services'] as $_POST['m_services']=>$value){
                        $htmlContent .= " ".$value ",";
                }
            }
            $htmlContent .="<h3> When do you require this service? </h3>" .$_POST['datepicker5'];
            break;
}


// Set content-type for sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// Additional headers
$headers .= 'From: MassSecurities<info@masssecurities.co.uk>' . "\r\n";
$headers .= "Reply-To: info@masssecurities.com\r\n";
$headers .= "Return-Path: info@masssecurities.com\r\n";
$headers .= 'Cc: info@masssecurities.com' . "\r\n";
$headers .= "BCC:info@masssecurities.com\r\n";
$to1 = "info@masssecurities.co.uk";
$subject1 = "New Quote from " . $_POST['name'];
if (mail($to, $subject, $htmlContent1, $headers)):
    $successMsg = 'Email has sent successfully';
else: 
    $errorMsg = "some problem occurred, please try again";
endif;
// Send email
if(mail($to1,$subject1,$htmlContent,$headers)):
	$successMsg = 'Email has sent successfully.';
else:
	$errorMsg = 'Some problem occurred, please try again.';
endif;
header('Refresh: 1; url=../index.html#booking');
echo '<h1 style="font-size:28px; margin:0 auto; text-align:center;"> Thank you your message has been send, we will redirect you...</h1>';
?>