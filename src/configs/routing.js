export default function router($stateProvider){
    $stateProvider
       /* .state('login',{
            url:'/',
            controller: 'loginController',
            templateUrl: './components/login/login.html',
            controllerAs: 'vm'
        })
        
        .state('prog',{
            url:'/programmes',
            controller: 'proController',
            templateUrl: './components/programmes/progs.html',
            controllerAs: 'vm'
        })
        .state('main',{
            url:'/seance/{prog}',
            controller: 'seancesController',
            templateUrl: './components/seances/seances.html',
            controllerAs: 'vm'
        })

         .state('options',{
            url:'/options',
            controller: 'optionsController',
            templateUrl: './components/options/options.html',
            controllerAs: 'vm'
        })
*/
         .state('test',{
            url:'/hello',
            controller: 'testController',
            templateUrl: './components/test/test.html',
            controllerAs: 'vm'
        })
        
        ;
}
router.$inject = ['$stateProvider'];
