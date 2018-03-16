(function (window, angular) {
	'use strict';
	
	var TEMPLATEPATH = '/dist/views/';
	var app = angular.module('website-builder',['ui.router','JsonProvider','btford.socket-io']);

	// for setting the routes
	app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
		$stateProvider
		.state('home',{
			url:'/home',
			templateUrl: TEMPLATEPATH + 'home.html',
			controller: "homeController",
		})
		.state('holidays',{
			url:'/holidays',
			templateUrl: TEMPLATEPATH + 'holidays.html',
			controller: "holidaysController"
		})
		.state('location',{
			url:'/location/:id',
			templateUrl:TEMPLATEPATH + '_holidays_location.html',
			controller: "holidaysController"
		})
		.state('travller',{
			url:'/amigos',
			templateUrl: TEMPLATEPATH + 'travller.html',
			controller: "travllerController"
		})
		.state('travller.friends',{
			url:'/friends',
			templateUrl: TEMPLATEPATH + '_friends.html',
			controller: "travllerController"
		})
		.state('travller.groups',{
			url:'/groups',
			templateUrl: TEMPLATEPATH + '_groups.html',
			controller: "travllerController"
		})
		.state('travller.feeds',{
			url:'/feeds',
			templateUrl: TEMPLATEPATH + '_feeds.html',
			controller: "travllerController"
		})
	}])

	// for setting current user details in root scope
	app.run(['$rootScope',"$window",'localStorage',function($rootScope,$window,localStorage){
		$rootScope.currentUser = localStorage.getCurrentUser();
	}])


	// for login
	app.controller("loginController",['$scope','$rootScope','$window','localStorage','$state', function($scope,$rootScope,$window,localStorage,$state){
		
	}])

	// for signup 
	app.controller("travllerController",['$scope','$rootScope','$window','localStorage','$state',function($scope,$rootScope,$window,localStorage,$state){
		console.log("inside travllerController");
		

	}])


	// home controller for handling all drag drop resize generate code feature
	app.controller("homeController",['$scope','$rootScope','$window','$state','$compile',function($scope,$rootScope,$window,$state,$compile){
		console.log("inside home Controller");
		

	}])

	app.controller("holidaysController",['$scope','$rootScope','$window','$state','$compile',"jsonServiceProvider","$stateParams",function($scope,$rootScope,$window,$state,$compile,jsonServiceProvider,$stateParams){
		console.log("inside holidaysController");
		
		$scope.goToBack = function(){
			$window.history.back();
		}
		$scope.location = $stateParams.id;
		$scope.holidayData = jsonServiceProvider.getHolidayPackage();
		console.log($scope.holidayData);

		$scope.chnageFavourite =function(list){
			list.favourite = list.favourite ? false:true;
		}
		$scope.goToDestination = function(list){
			console.log("destinatin called");
			$state.go("location",{"id":list.destination});
		}
	}])
	


	// service for handle login ,current user and all userList
	app.factory("localStorage",['$window',function($window){
		return {
			getCurrentUser:function(){
				var data = $window.localStorage.getItem('currentUser') ? JSON.parse($window.localStorage.getItem('currentUser')) :{};
				return data;
			},
			setCurrentUser:function(user){
				var data = JSON.stringify(user);
				$window.localStorage.setItem('currentUser',data);
			},
			getUserList:function(){
				var data = JSON.parse($window.localStorage.getItem('userList'));
				return data;
			},
			setUserList:function(user){
				var data = $window.localStorage.getItem('userList')  ? JSON.parse($window.localStorage.getItem('userList')):[];
				data.push(user);
				data = JSON.stringify(data);
				$window.localStorage.setItem('userList',data);
			}


		};
	}])


	// Deirective for editing Droped element
	app.directive("contentEditable",function(){
		return {
			restrict:'A',
			scope:{
				type:'@'
			}, 
			templateUrl:'dist/views/contentEditable.html',
			controller:['$scope','$window',function($scope,$window){
				console.log("inside directive controller",$scope);
				$scope.isEditable = false;
				$scope.shownData = {
					headerMsg : "This is Header Text",
					paragraphMsg : "This is paragraph text",
					imageUrl : "https://imgur.com/P7LmaTe.jpg",
					anchorUrl : "https://www.moengage.com/",
					anchorDescription : "This is our website",
				}

				$scope.data = {};

				$scope.changeEditMode = function(){
					$scope.isEditable = !$scope.isEditable;
					var count = parseInt($window.localStorage.getItem('isPrint'));
					if($scope.isEditable){
						$scope.setData();
						$window.localStorage.setItem('isPrint',count + 1);
					}
					else{
						$window.localStorage.setItem('isPrint',count - 1);
					}
				}

				$scope.setData = function(){
					angular.forEach($scope.shownData,function(value,key){
						$scope.data[key] = value;
					})
				}
				$scope.goToLink = function(){
					$window.open($scope.shownData.anchorUrl, '_blank');
				}

				$scope.updateContent = function(){
					switch($scope.type){
						case 'header' : $scope.shownData.headerMsg = $scope.data.headerMsg;
										break;
						case 'paragraph' : $scope.shownData.paragraphMsg = $scope.data.paragraphMsg;
										break;
						case  'image'	: $scope.shownData.imageUrl = $scope.data.imageUrl;
											break;
						case  'anchor'  : $scope.shownData.anchorUrl = $scope.data.anchorUrl;
											$scope.shownData.anchorDescription = $scope.data.anchorDescription;
											break;
						default :		console.log("undefined type");		
					}

					$scope.data ={};
					$scope.isEditable =false;
					var count = parseInt($window.localStorage.getItem('isPrint'));
					$window.localStorage.setItem('isPrint',count - 1);
				}
			}]
		}
	})

}(window, angular));	