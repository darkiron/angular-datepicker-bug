import angular from 'angular';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngMessage from 'angular-messages';
import ngCookies from 'angular-cookies';

import uirouter from 'angular-ui-router';


import appTest from './components/test/test.module.js';

import router from './configs/routing.js';
import run from './run/run.js';

angular.module('app', [
    ngMaterial,
    ngAnimate,
    ngMessage,
    uirouter,
    appTest,
])
.config(router)
.run(run)
;
