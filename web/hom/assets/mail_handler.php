<?php
$to = $_POST['email'];
$subject = "Thank you, We will be in touch with you soon";
$subject2 = "CONTACT BY " . $_POST['name_full'];
// Get HTML contents from file
$htmlContent = file_get_contents("email_template.html");
$htmlContent1 = $_POST['name_full'] . "<h4>said</h4> " . $_POST['msg'] . "<h4>here is the phone number</h4>" . $_POST['phone_nu'] . "<h4>and his email</h4>" . $_POST['email'];
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
// Send email
if(mail($to,$subject,$htmlContent,$headers)):
	$successMsg = 'Email has sent successfully.';
else:
	$errorMsg = 'Some problem occurred, please try again.';
endif;

if(mail($to1,$subject2,$htmlContent1,$headers)):
	$successMsg = 'Email has sent successfully.';
else:
	$errorMsg = 'Some problem occurred, please try again.';
endif;
header('Refresh: 1; url=../index.html#contact');
echo '<h1 style="font-size:28px; margin:0 auto; text-align:center;"> Thank you your message has been send, we will redirect you...</h1>';
?>