document.getElementById('sender').addEventListener("click", sendEmail);

function GetBody() {
  var body = "Requester: " + document.getElementById('Requester').value + '\n';
  return body;
};

function sendEmail() {
  var email = 'aydynlotta18@gmail.com';
  var body = "отправьте нам это письмо, ваш комментарий скоро будет на сайте!" + GetBody();
  var subject = document.getElementById('subject').value;
  var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + encodeURIComponent(body);
  window.location.href = mailto_link;
}
