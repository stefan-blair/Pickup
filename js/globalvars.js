var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var setpos = false;
var pos;
var start;
var waypts = [];
var mapPage=0;
var posMarker;
var bookmarks=[1,2,3,4,5,6,7,8,9];
Parse.initialize("CcQUX3Cw9udiaakPdfsrV2vMGYvamsJ40eUfABrH", "KDJPIzQz1tdTLuW7oh3NVyOv42GJPaLJYpBDXsN5");
var user = new Parse.User();
var username;
var password;
var invitesShown = [];
var fInvitesShown = [];
var userSessionId;
var insession = false;
var friends = [];