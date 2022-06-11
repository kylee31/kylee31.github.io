function sendPassword() {
    var pass = prompt('비밀번호');
    if (pass == 3031) {
        alert("확인");
        location.href = "page5.html";
    }
    else {
        alert("실패");
    }
}
