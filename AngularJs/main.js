var CrudApp = angular.module("crudApp", []);

CrudApp.controller("crudController", function ($scope,$http) {

    $http({
        method:'GET',
        url:'People.json'
    })
    .then(function(response){
        console.log(response);
    },
    function(res){
        console.log("hjmg")
    }
    )


    $scope.records = [
        { name: "ishika", phnno: 5458439434, conPhnno: 5458439434, gender: "Female", email: "i@gmail.com", confemail: "i@gmail.com", serviceOpted: "Send an Email" },
        { name: "mudita", phnno: 978564658, conPhnno: 9887556433, gender: "Female", email: "mudita@gmail.com", confemail: "mudita@gmail.com", serviceOpted: "Send an Email" }
    ];

    $scope.delete = function () {
        if (confirm("Are you sure you want to delete this?")) {
            var index = this.$index;
            $scope.records.splice(index, 1);
        }
    }

    $scope.form = {};
    $scope.clickedData = {};
    $scope.editData = {};
    $scope.submit = function () {
        if (confirm("Are you sure you want to submit?")) {
            $scope.records.push($scope.form);
        }
        $scope.form = {};
    }

    $scope.view = function (data) {
        $scope.clickedData = data;
    }

    $scope.update = function () {
        if (confirm("Are you sure you want to update?")) {

        }
    }

    $scope.edit = function (data) {
        $scope.editData = data;
    }

  

});
