$('form').on('submit', function(e){
  e.preventDefault();
  $.post("/csv", data => {
    console.log('data', data);
  })
});

