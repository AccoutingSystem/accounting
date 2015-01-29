$(document).ready(function(){
	
	$("#").click(function(){
		var name = $("#name").val();
		var surname = $("#surname").val();
		var email = $("#email").val();
		var password = $("#password").val();
		var id = $("#id").val();
		var address = $("#address").val();
		
		var gende="";
    	var len = document.register.gender.length;
    	var i;
    	for (i = 0; i < len; i++) {
    		if ( document.register.gender[i].checked ) {
    		gende = document.gender.gebder[i].value;
    		break;
    		}
    		}
	 	
    	var admin = {
    			name:name,
    			surname: surname,
    			email: email,
    			password: password,
    			id: id,
    			address : address,
    			gender: gende
    	};
  
    	$.ajax({
            type: 'POST',
            url: '',
            data: admin,
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