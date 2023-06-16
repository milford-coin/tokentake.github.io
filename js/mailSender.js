function mailTo()
{
    var body = document.getElementById("Message").value;
    var Subject = "Comment"
    window.location.href = "mailto:aydynlotta18@gmail.com?subject="+SubjectLine+"&body="+body;
}
