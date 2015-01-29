/**
 * @Boby love
 */



	var studentViewModel = function(){
	
	var self = this;
	
	self.name = ko.observable();
	self.surname = ko.observable();
	self.CourseCode = ko.observable();
	self.DateOfJoining = ko.observable();
	self.gender = ko.observable();
	self.email = ko.observable();
	self.address = ko.observable();
	
	var studentObject = {
			
			name:	self.name,
			surname:self.surname,
			CourseCode:self.CourseCode,
			DateOfJoining:self.DateOfJoining,
			gender:self.gender,
			email:self.email,
			address:self.address
	}
	/*
	
	var updateStudent = {
			
			studentName:	self.name,
			studentSurname:self.surname,
			studentCourseCstudentObjectode:self.CourseCode,
			studentDateOfJoining:self.DateOfJoining,
			studentGender:self.gender,
			studentEmail:self.email,
			studentAddress:self.address
	};
	
	var update = {
			
			studentName:	self.name,
			studentSurname:self.surname,
			studentCourseCstudentObjectode:self.CourseCode,
			studentDateOfJoining:self.DateOfJoining,
			studentGender:self.gender,
			studentEmail:self.email,
			studentAddress:self.address
	};*/
	
	//saveStudent
	self.saveStudent = function(){
		$.ajax({
			type:'POST',
			url:'http://localhost:8080/StudentInfoSystem/REST/student/saveStudent',
			data:ko.toJSON(studentObject),			
			dataType:'json',
			contentType:'application/json;charset=utf-8',
			success:function(data){
				alert("Student is added " );
			},
			error:function(XHR,status,er){
				alert("Failed!");
			}
			
		});
	};
	
	//update
	self.update = function(){	
		$.ajax({			
			type:'PUT',
			data:ko.toJSON(updateDepartment),
			url:'http://localhost:8080/StudentInfoSystem/REST/student/update',
			contentType:'application/json;charset=utf-8',
			dataType:'json',
			success:function(data
					){
				alert("Student is successfully updated")
			},
			error:function(XHR,status,er){
				alert("Student update failed!")
			}
		});
	};
	
	//deleteStudent
	self.deleteStudent = function(){
		$.ajax({
			type:'DELETE',
			data:ko.toJSON(studentObject),
			url:'http://localhost:8080/StudentInfoSystem/REST/student/deleteStudent',
			dataType:'json',
			contentType:'application/json;charset=utf-8',
			success:function(data){
				alert("Student is successfully deleted " );
			},
			error:function(XHR,status,er){
				alert("Failed!");
			}
			
		});
	};
	
	//viewStudent
	self.viewStudent = function(){
		$.ajax({
			type:'GET',
			data:ko.toJSON(studentObject),
			url:'http://localhost:8080/StudentInfoSystem/REST/student/viewStudent',
			dataType:'json',
			contentType:'application/json;charset=utf-8',
			success:function(data){
				alert("Student List " );
			},
			error:function(XHR,status,er){
				alert("Failed!");
			}
			
		});
	};
	
};
   
	//  ko.applyBindings(new studentViewModel()); 
	$(document).ready(function()
		{
		    var model = new studentViewModel();
		   // model.search();
		    ko.applyBindings(model);
		});


/*var userModel = function()
{
    var self = this;
    this.users = ko.observableArray([]);
    this.username = ko.observable();
    this.password = ko.observable();
    this.email = ko.observable();
    this.dialoque = ko.observable("search");
    var userObject = {
        email: self.email,
        username: self.username,
        password: self.password
    };
    self.showSearch = function()
    {
        alert("here");
       self.dialoque("search"); 
    }
    
     self.showUpdate = function()
    {
       self.dialoque("update"); 
    }
     self.showDelete = function()
    {
       self.dialoque("delete_"); 
    }
    
     self.showSave = function()
    {
       self.dialoque("save"); 
    }

    
    self.save = function()
    {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/demo/rest/user/saveUser',
            data: ko.toJSON(userObject),
            contentType: 'application/json',
            dataType: "json",
            success: function(data)
            {
                console.log(data);
                self.username(data.username);

            },
            error: function()
            {
                alert(XHR.status + " : " + er + " : " + status);
            }
        });
    };
    self.update = function()
    {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/demo/rest/user/updateUser',
            data: ko.toJSON(userObject),
            contentType: 'application/json',
            dataType: "json",
            success: function(data)
            {
                console.log(data);
                self.chartId(data.chartId);

            },
            error: function()
            {
                alert(XHR.status + " : " + er + " : " + status);
            }
        });
    };
    self.delete_ = function() {

        $.ajax({
            url: 'http://localhost:8080/demo/rest/user/getUsers' + self.username(),
            cache: false,
            type: 'DELETE',
            contentType: 'application/json; charset=utf-8',
            data: {},
            success: function(data) {
                alert(data);

            }
        }).fail(
                function(xhr, textStatus, err) {
                    alert(err);
                });
    };


    this.search = function() {
        $.ajax({
            url: 'http://localhost:8080/demo/rest/user/getUsers',
            cache: false,
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            data: {},
            success: function(data) {
                for(x=0;x<data.listUsr.leghth();x++){
                self.users.push(data);
               // self.users(data);
           }
            }
        });
    };

};

$(document).ready(function()
{
    var model = new userModel();
    model.search();
    ko.applyBindings(model);
});

*/