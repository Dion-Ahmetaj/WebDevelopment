document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("myForm")) {
        document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault();
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;
            
            function isValidEmail(email) {
                return email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
            }
            
            if (name && email && message && isValidEmail(email)) {
                document.getElementById("successMessage").style.display = "block";
            } else {
                alert("Please fill all fields correctly.");
            }
        });
    }
});