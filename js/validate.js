let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    let fname = document.getElementById("first-name");
    let lname = document.getElementById("last-name");
    let email = document.getElementById("email-addr");
    let q_box = document.getElementById("qstn-box");
    let q_box_cont = document.getElementById("question-box");
    var pholder_fname_val = document.getElementById("first-name").placeholder;
    var pholder_lname_val = document.getElementById("last-name").placeholder;
    var pholder_email_val = document.getElementById("email-addr").placeholder;
    var pholder_qbox_val = document.getElementById("qstn-box").placeholder;

        if (fname.value == "" || fname.value.includes('<','>','&','!')) {
            
            e.preventDefault(); //prevents submission
            // console.log(pholder_fname_val, 'preventDefault() executed')
            add_pholder_val("phold_fname", pholder_fname_val);
            add_after(fname);
        }

        if (lname.value == "" || lname.value.includes('<','>','&','!')) {
            e.preventDefault();
            // console.log(pholder_lname_val, 'preventDefault() executed')
            add_pholder_val("phold_lname", pholder_lname_val);
            add_after(lname);
        }

        if (email.value == "" || email.value.includes('<','>','&','!')) {
            e.preventDefault();
            // console.log(pholder_email_val, 'preventDefault() executed')
            add_pholder_val("phold_email", pholder_email_val);
            add_after(email);  
        }
        if (q_box.value == "" || q_box.value.includes('<','>','&','!')) {
            e.preventDefault();
            // console.log(pholder_lname_val, 'preventDefault() executed')
            add_pholder_val("phold_qbox", pholder_qbox_val);
            add_after(q_box);
            
        }

        if (fname.value != "" && lname.value != "" && email.value != "" && q_box.value != "") {
            document.getElementById("id-txt-container").style.display = "none";
            document.getElementById("contact-us-container").style.display = "none";
            document.getElementById("submit-success").style.display = "block";
            document.getElementById("active-email").innerHTML = email.value;
            e.preventDefault();
        }
        q_box_cont.style.marginBottom = "30px";
    return false;
});

function add_after(element) {
    let x = element;
    x.previousElementSibling.classList.add("required");
    x.style.border = "1px solid red";
    x.style.background = "#ffdddd";
}

function disable_inps(element) {
    let inp = document.getElementById(element);
    document.getElementById(element).disabled = true;
}


function add_pholder_val(element, value) {
    // let z = "" + element;
    document.getElementById(element).innerHTML = value;
}


