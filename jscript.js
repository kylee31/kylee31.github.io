function moveTop() {
    if (window.pageYOffset > 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}