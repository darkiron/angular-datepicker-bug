export default function run($rootScope){
    $rootScope.$on("$stateChangeError", console.log.bind(console));
}
run.$inject = ['$rootScope'];