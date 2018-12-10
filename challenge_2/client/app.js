$('form').on('submit', function(e){
  e.preventDefault();
  var formData = document.getElementById("info").value

  $.post("/csv", { formData }, data => {
    console.log('Success!', data);
  }, "json")
});

