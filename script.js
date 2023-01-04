$("#btn").click(function() {
   
    let atPosition = $("#email").val().indexOf("@");
    let dotPosition = $("#email").val().lastIndexOf(".");

      if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= input.length) {
     
        if ( $("#email").val() == ""){
            $(".form__error").text("Whoops! It looks like you forgot to add your email");
        } else {
            $(".form__error").text("Please provide a valid email address");
        }

        $(".form__error").addClass("show");
        $("#email").addClass("border-red");
        return false;

      }
})