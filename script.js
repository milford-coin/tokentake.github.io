document.getElementById('sender').addEventListener("click", sendEmail);

function GetBody() {
  var body = "Assignee : " + document.getElementById('Assignee').value + '\n' + "Requester: " + document.getElementById('Requester').value + '\n';
  return body;
};

function sendEmail() {
  var email = 'someone@gmail.com';
  var body = GetBody();
  var subject = document.getElementById('subject').value;
  var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + encodeURIComponent(body);
  window.location.href = mailto_link;
}
