function sendPassword() {
    var pass = prompt('비밀번호');
    if (pass == 3031) {
        location.href = "page5.html";
    }
    else {
        alert("로그인 실패");
    }
}
