let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    let fname = document.getElementById("first-name");
    let lname = document.getElementById("last-name");
    let email = document.getElementById("email-addr");
    var pholder_fname_val = document.getElementById("first-name").placeholder;
    var pholder_lname_val = document.getElementById("last-name").placeholder;
    var pholder_email_val = document.getElementById("email-addr").placeholder;

        if (fname.value == "" || fname.value.includes('<','>','&','!')) {
            e.preventDefault();
            console.log(pholder_fname_val, 'preventDefault() executed')
            add_pholder_val("phold_fname", pholder_fname_val);
            add_after(fname);
            
        }

        if (lname.value == "" || fname.value.includes('<','>','&','!')) {
            e.preventDefault();
            console.log(pholder_lname_val, 'preventDefault() executed')
            add_pholder_val("phold_lname", pholder_lname_val);
            add_after(lname);
            
            
        }
        if (email.value == "" || fname.value.includes('<','>','&','!')) {
            e.preventDefault();
            console.log(pholder_email_val, 'preventDefault() executed')
            add_pholder_val("phold_email", pholder_email_val);
            add_after(email);
            
            
    }
    return false;
});

function add_after(element) {
    let x = element;
    x.previousElementSibling.classList.add("required");
    x.style.border = "1px solid red";
    x.style.background = "#ffdddd";
}

function mod_border_bg(element) {
    let y = element;
    x.style.border = "1px solid #ccc";
    x.style.background = "#fff";
}

function add_pholder_val(element, value) {
    // let z = "" + element;
    document.getElementById(element).innerHTML = value;
}


