
        function show() {
            document.getElementById('woolf').style.height="400px"
            document.getElementById('woolf').style.display="block"
            document.getElementById('show').style.display="none"
        }
        function hide() {
            document.getElementById('woolf').style.height="0px"
            document.getElementById('woolf').style.display="none"
            document.getElementById('show').style.display="inline"
        }


        var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "تم استلام رسالتك";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)




    

    function checkPswd() {
        var password = ("bitcoin");
        var confirmPassword = password;
        var password = document.getElementById("btn1").value;
        if (password == confirmPassword) {
             alert('اجابة صحيحة');
        }
        if (password == confirmPassword) {
            window.location="level1.html";
       }
        else{
            alert("كلمة المرور غير صحيحه");
        }
    }