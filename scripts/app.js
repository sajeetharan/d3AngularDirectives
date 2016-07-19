/**
 * Created by Sajeetharan on 06-07-2016.
 */
var d3DirectiveApp = angular.module('d3chartSample', ['ngMaterial', 'ui.router'])

d3DirectiveApp.run(['$rootScope', function($rootScope) {
        $rootScope.title = "Angular-D3 Directives By Sajeetharan";
    }])
    /*Ui router configuration*/
d3DirectiveApp.config(function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('landing-page', {
                    url: "/landing-page",
                    templateUrl: "views/landing-page.html",
                    controller: 'LandingCtrl'
                })
                .state('app', {
                    url: "/app",
                    abstract: true,
                    templateUrl: "views/menu.html",
                    controller: 'AppCtrl'
                })
                .state('app.overview', {
                    url: "/",
                    views: {
                        'menuContent': {
                            templateUrl: "views/overview.html"
                        }
                    }
                })
                .state('app.about', {
                    url: "/about",
                    views: {
                        'menuContent': {
                            templateUrl: "views/about.html"
                        }
                    }
                })

            ;

            $urlRouterProvider.otherwise("/landing-page");


        })
    /*Theming*/
    d3DirectiveApp.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-orange')
            .accentPalette('red')
            .warnPalette('blue-grey');
    })
    /*Landing page controller*/
    d3DirectiveApp.controller('LandingCtrl', ['$scope', function($scope) {

    }])
    /*Main application controller*/
    d3DirectiveApp.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
        console.log("AppCtrl");
        $scope.cuisines = [
            'Indian',
            'Chinese'
        ];
        $scope.visualizations =   [{
                Name: "D3 Force",
                img : "",
                url : "views/d3ForceSample.html"
            }, {
                Name: "SunBurst",
                img : "",
                url : "views/d3SunBurst.html"
            } ];
        
        $scope.click = function() {
            console.log("Clicked");
        }
        $scope.toggleSidenav = toggleSidenav;

        function toggleSidenav(name) {
            $mdSidenav(name).toggle();
        }
    }])
    d3DirectiveApp.controller('d3DataCtrl', ['$scope', function($scope) {

        $scope.loadData = function() {
            $scope.data = {
                "name": "flare",
                "children": [{
                    "name": "analytics",
                    "children": [{
                        "name": "cluster",
                        "children": [{
                            "name": "AgglomerativeCluster",
                            "size": 3938
                        }, {
                            "name": "CommunityStructure",
                            "size": 3812
                        } ]
                    }, {
                        "name": "graph",
                        "children": [{
                            "name": "BetweennessCentrality",
                            "size": 3534
                        }, {
                            "name": "LinkDistance",
                            "size": 5731
                        } ]
                    }, {
                        "name": "optimization",
                        "children": [{
                            "name": "AspectRatioBanker",
                            "size": 7074
                        }]
                    }]
                }]
            };


        }
    }])
    




 