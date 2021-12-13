let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    let fname = document.getElementById("first-name");
    let lname = document.getElementById("last-name");
    let email = document.getElementById("email-addr");
    const res_char = [,]

        if (fname.value == "" || fname.value.includes('<','>','&','!')) {
            add_after(fname);
            e.preventDefault();
        }

        if (lname.value == "" || fname.value.includes('<','>','&','!')) {
            add_after(lname);
            e.preventDefault();
        }
        if (email.value == "" || fname.value.includes('<','>','&','!')) {
            add_after(email);
            e.preventDefault();
    }
    return false;
});

function add_after(varbl) {
    let x = varbl;
    x.previousElementSibling.classList.add("required");
    x.style.border = "2px solid red";
    x.style.background = "#ffdddd";
}

function mod_border_bg(varbl) {
    let y = varbl;
    x.style.border = "1px solid #ccc";
    x.style.background = "#fff";
}
