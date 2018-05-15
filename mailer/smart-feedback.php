<?php 

$name = $_POST['user_name'];
$surname = $_POST['user_surname'];
$feedback = $_POST['user_feedback'];

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

$mail->Subject = 'Новый отзыв с сайта BTG';
$mail->Body    = '
	Пользователь ' . $name . ' ' . $surname . '<br>
	оставил отзыв: <br>' . $feedback . '';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    echo "Error";
} else {
    echo "Sucsess";
}

?>