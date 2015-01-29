$(document).ready(function(){
	
	$("#").click(function(){
		var name = $("#name").val();
		var surname = $("#surname").val();
		var email = $("#email").val();
		var password = $("#password").val();
		var mobile = $("#mobile").val();
		var subject = $("#subject").val();
	 	
    	var teacherObject = {
    			name:name,
    			surname: surname,
    			email: email,
    			password: password,
    			mobile: id,
    			subject : subject
    	};
  
    	$.ajax({
            type: 'POST',
            url: '',
            data: teacherObject,
            contentType: 'application/json',
            dataType: "json",
            success: function(status,http)
            {
            	 alert(" :bingo.. " +status);

            },
            error: function(status,XHR)
            {
                //alert(" :not " + status);
                alert(XHR.status + " : "+ " status" + status);
            }
        });
    	
	});
});