let span = document.querySelector(".spn")
window.onscroll = (e) => {
    let val = Math.floor(this.scrollY)
    console.log();
    if (val >= 200) {
        span.classList.add("top");
    } else {
        span.classList.remove("top")
    }
}

span.onclick = (e) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}