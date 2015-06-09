'use strict';

angular.module('users').controller('BirthdayController', ['$scope',
	function($scope) {
        //connect to facebook
        window.fbAsyncInit = function() {
            FB.init({
              appId      : '905974226115519',
              xfbml      : true,
              version    : 'v2.3'
            });
            console.log('connected to facebook');
            console.log(window.auth);
            
            FB.login(function(){
                console.log('Permission has been granted');
                FB.api('/me/taggable_friends/', function(response){
                    console.log(response);
                });
            }, {scope: 'publish_actions, user_friends'});
            
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
}
]);