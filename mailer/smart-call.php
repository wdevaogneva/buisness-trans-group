<?php 

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->isSMTP();                                     
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;          
$mail->Username = 'ayuogneva@mail.ru';                
$mail->Password = '88lytq88';                     
$mail->SMTPSecure = 'ssl';                         
$mail->Port = 465;                                   
 
$mail->setFrom('ayuogneva@mail.ru', 'Анастасия Огнева');  
$mail->addAddress('ogneva_work@bk.ru');                 
$mail->isHTML(true);

$mail->Subject = 'Заказ на звонок с сайта BTG';
$mail->Body    = '
	Пользователь ' . $name . ' <br>
	заказал звонок на телефон: <br> 
	' . $phone . '';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    echo "Error";
} else {
    echo "Sucsess";
}

?>