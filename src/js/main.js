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
			controller: "amigoController"
		})
		.state('travller.friends',{
			url:'/friends',
			templateUrl: TEMPLATEPATH + '_friends.html',
			controller: "friendsController"
		})
		.state('travller.groups',{
			url:'/groups',
			templateUrl: TEMPLATEPATH + '_groups.html',
			controller: "groupsController"
		})
		.state('travller.feeds',{
			url:'/feeds',
			templateUrl: TEMPLATEPATH + '_feeds.html',
			controller: "feedsController"
		})
	}])

	// for setting current user details in root scope
	app.run(['$rootScope',"$window",'localStorage',function($rootScope,$window,localStorage){
		$rootScope.currentUser = localStorage.getCurrentUser();
	}])


	// for login
	app.controller("loginController",['$scope','$rootScope','$window','localStorage','$state', function($scope,$rootScope,$window,localStorage,$state){
		
	}]);
	// for signup 
	app.controller("travllerController",['$scope','$rootScope','$window','localStorage','$state', function($scope,$rootScope,$window,localStorage,$state){
		
	}]);
	app.controller("amigoController",['$scope','$rootScope','$window','localStorage','$state','socket', function($scope,$rootScope,$window,localStorage,$state,socket){
		$rootScope.notificationsCount = 0;
		$rootScope.notifyShow = false;
		socket.on("notification",function(){
			$scope.notification.push({"nId":123,"msg":"Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel."});
		}); 
	}]);
	app.controller("groupsController",['$scope','$rootScope','$window','localStorage','$state', function($scope,$rootScope,$window,localStorage,$state){
		/* socket.on("notification",function(){
			$scope.notification.push({"nId":123,"msg":"Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel."});
		}); */
	}]);
	app.controller("friendsController",['$scope','$rootScope','$window','localStorage','$state', function($scope,$rootScope,$window,localStorage,$state){
		$scope.friends = [{"name":"Srinivas Nagorkar","mobile":"+91-9742015199"},{"name":"Ramabrahmam C","mobile":"+91-9898778778"},{"name":"Raj Kumar Thakur","mobile":"+91-98767767878"},{"name":"Deepanshu Sharma","mobile":"+91-9878765434"},{"name":"Vishnu Vardhan","mobile":"+91-9742015199"}]
		$scope.invites = [{"name":"Taraun Shahi","mobile":"+91-9098989878"},{"name":"Ventak Anna","mobile":"+91-9898778778"},{"name":"Raj Kumar Thakur","mobile":"+91-98767767878"},{"name":"Deepanshu Sharma","mobile":"+91-9878765434"},{"name":"Vishnu Vardhan","mobile":"+91-9742015199"}]
		/* socket.on("notification",function(){
			$scope.notification.push({"nId":123,"msg":"Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel."});
		}); */
	}]);
	app.controller("feedsController",['$scope','$rootScope','$window','localStorage','$state', function($scope,$rootScope,$window,localStorage,$state){
		$scope.notification= [{"nId":123,"msg":"Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel."},{"nId":123,"msg":"Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel."},{"nId":123,"msg":"Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel."},{"nId":123,"msg":"Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel."},{"nId":123,"msg":"Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel."},{"nId":123,"msg":"Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel."},{"nId":123,"msg":"Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel."},{"nId":123,"msg":"Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel."}];
		$rootScope.notificationsCount = $scope.notification.length;
		$scope.testNotify = function(){
			if (Notification.permission !== "granted")
				Notification.requestPermission();
			  else {
				var notification = new Notification('Yatra Amigos Update', {
				  icon: 'https://css.yatra.com/content/fresco/beetle/images/newIcons/yatra_logo.svg',
				  body: "Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel.",
				});

				notification.onclick = function () {
				  window.open("http://localhost:3333/#!/amigos/feeds");      
				};

			  }
		};
		/* socket.on("notification",function(){
			$scope.notification.push({"nId":123,"msg":"Rajnish is Travelling to pune this monday, you may plan to meet him by yatra just by 100KM of Bus Travel."});
		}); */
	}]);
	
	

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
	}]);
	
	app.factory('socketio',['$rootScope',function ($rootScope) {
	  var socket = io.connect();
	  return {
		on: function (eventName, callback) {
		  socket.on(eventName, function () {  
			var args = arguments;
			$rootScope.$apply(function () {
			  callback.apply(socket, args);
			});
		  });
		},
		emit: function (eventName, data, callback) {
		  socket.emit(eventName, data, function () {
			var args = arguments;
			$rootScope.$apply(function () {
			  if (callback) {
				callback.apply(socket, args);
			  }
			});
		  })
		}
	  };
	}]);


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