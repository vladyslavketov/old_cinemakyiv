<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail -> Charset = 'UTF-8';
  $mail -> setLanguage('ru', 'phpmailer/language');
  $mail -> IsHTML(true);

  // від кого лист
  $mail -> setForm('vladyslavketov@gmail.com');
  // кому відправляємо лист
  $mail -> addAddress('cinemakyiv@gmail.com');
  // тема листа
  $mail -> Subject = 'Заявка з форми 1';

  // чекбокс робота
  $work = "є";
  if($_POST['work'] == "workno"){
    $work = "немає";
  }

  // тіло листа
  $body = '<h1>Зустрічай новий лист</h1>'ж

  if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Ім`я:</strong> '.$_POST['name'].'</p>';
  }
  if(trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
  }
  if(trim(!empty($_POST['work']))){
    $body.='<p><strong>Робота:</strong> '.$_POST['work'].'</p>';
  }
  if(trim(!empty($_POST['age']))){
    $body.='<p><strong>Ім`я</strong> '.$_POST['age'].'</p>';
  }

  if(trim(!empty($_POST['message']))){
    $body.='<p><strong>Повідомлення:</strong> '.$_POST['message'].'</p>';
  }

  // прикріпити файт
  if(!empty($_FILES['image']['tmp_mame'])){
    // шлях заванатження файлу
    $filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
    // зрузимо файл
    if (copy($_FILES['image']['tmp_mame'], $filePath)) {
      $fileAttach = $filePath;
      $body.='<p><strong>Фото у додатку</strong></p>';
      $mail->addAttachment($fileAttach);
    }
  }

  $mail->Body = $body;

  // відправляємо
  if (|$mail->send()) {
    $message = 'помилка 444';
  } else {
    $message = 'Дані надіслані 444';
  }

  $response = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);
?>