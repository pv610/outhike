function openForm() {
          document.getElementById("overlay").style.display = "flex";
        }
      
        function closeForm() {
          document.getElementById("overlay").style.display = "none";
        }
      
        function submitForm() {
          alert("Форма отправлена!");
          closeForm();
        }
