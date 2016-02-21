var d3chartSample = angular.module('d3chartSample', ['ngMaterial'])
d3chartSample.controller('d3ForceCtrl',['$scope',function($scope){

	$scope.loadData = function(){
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
                    }, {
                        "name": "HierarchicalCluster",
                        "size": 6714
                    }, {
                        "name": "MergeEdge",
                        "size": 743
                    }]
                }, {
                    "name": "graph",
                        "children": [{
                        "name": "BetweennessCentrality",
                        "size": 3534
                    }, {
                        "name": "LinkDistance",
                        "size": 5731
                    }, {
                        "name": "MaxFlowMinCut",
                        "size": 7840
                    }, {
                        "name": "ShortestPaths",
                        "size": 5914
                    }, {
                        "name": "SpanningTree",
                        "size": 3416
                    }]
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