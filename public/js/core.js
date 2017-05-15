(function(){
/**
 * Création de l'application app
 * @type angular.module.angular-1_3_6_L1749.moduleInstance
 */
let app = angular.module('app', ['ngRoute','ngSanitize','ngResource']);

/**
 * factory requêtes sur URL ressource query et create
 * @param {type} $resource
 * @return {requêtes}
 */
app.factory('TransportsFactory',($resource) => {
                return $resource('api/transports',{},{
                    query: {method: 'GET', isArray:true},
                    create: { method: 'POST'}
                });
});
		
/**
 * factory requêtes sur ressource paramétrées show,delete,updazte
 * @param {module} $resource
 * @return {requêtes}
 */		
app.factory('TransportFactory',($resource) =>{
    return $resource('api/transports/:id',{},{
        show : {method:'GET'},
        delete : {method: 'DELETE', params: {id: '@id'}},
        update : { method: 'PUT', params: {id: '@id'}}
    });
});

/**
 * contrôleur principal TrnsListCtrl de la page d'accueil
 * @param {module} $scope
 * @param {module} $sce
 * @param {module} TransportsFactory
 * @param {module} TransportFactory
 * @param {module} $location
 */
app.controller('TrnsListCtrl', ['$scope','$sce','TransportsFactory','TransportFactory','$location',
    function($scope,$sce,TransportsFactory,TransportFactory,$location){
        /** 
         * permet l'affichage des iframe
         *  @param (String) src source de l'iframe*/
        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
          };
        /** 
         * ng-click 'deleteTransport' supprime transport
         * @param (Number) transportId identifiant du transport */
        $scope.deleteTransport = function(transportId){
            TransportFactory.delete({ id : transportId });
            $scope.liste = TransportsFactory.query();
        };
        /**
         * ng-click 'editTransport' redirige vers edition transport
         * @param (Number)  transportId identifiant du transport*/
         $scope.editTransport = function(transportId){
            $location.path('/transport-detail/' + transportId);
        };
        /** ng-click 'createTransport' redirige vers création transport */
        $scope.createTransport = function(){
            $location.path('/transport-create');
        };
        
        /** récupère la liste des transports */
        $scope.liste = TransportsFactory.query();    
}]);
/**
 * contrôleur TrnDetailCtrl pour mise à jour transport
 */
app.controller('TrnDetailCtrl',['$scope','$routeParams','TransportFactory','$location',
    function($scope,$routeParams,TransportFactory,$location){
        /** ng-click 'updateTransport' mise à jour transport */
        $scope.updateTransport = function(){
            TransportFactory.update($scope.transport);
            $location.path('/transports');
        };
        /** ng-click 'cancel' retour liste */
        $scope.cancel = function(){
            $location.path('/transports');
        };
        /** retourne un transport */
        $scope.transport = TransportFactory.show({ id : $routeParams.id });
    }
]);
/**
 * contrôleur TrnsCreateCtrl pour création d'un transport
 */
app.controller('TrnsCreateCtrl', ['$scope','TransportsFactory','$location',
    function($scope,TransportsFactory,$location){
        /** ng-click 'createTransport' création transport */
        $scope.createTransport = function(){
            TransportsFactory.create($scope.transport);
        };
         /** ng-click 'cancel' retour liste */
        $scope.cancel = function(){
            $location.path('/transports');
        };
    }
]);
/**
 * configuration du routage
 */
app.config(function($locationProvider,$routeProvider){
     $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'TrnsListCtrl'
      })
      .when('/transport-detail/:id',{
        templateUrl: '/partials/transport-detail.html',
        controller: 'TrnDetailCtrl'
      })
      .when('/transport-create',{
          templateUrl: 'partials/transport-create.html',
        controller: 'TrnsCreateCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
});
})();


