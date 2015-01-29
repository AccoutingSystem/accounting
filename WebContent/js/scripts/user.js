var userModel = function()
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

