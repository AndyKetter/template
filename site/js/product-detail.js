/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	$(function () {
	    $('#JS_send').on('click', function (event) {
	        event.preventDefault();
	        /* Act on the event */
	        var name = $('.f-name').val();
	        var company = $('.f-company').val();
	        var email = $('.f-email').val();
	        var phone = $('.f-phone').val();
	        var message = $('.f-message').val();
	        $.ajax({
	            url: 'http://zhan.esmtong.cn/index.php?c=applicationform&a=post',
	            type: 'POST',
	            dataType: 'json',
	            data: {
	                name: name,
	                company: company,
	                email: email,
	                phone: phone,
	                message: message
	            }
	        }).done(function (res) {
	            if (res.status === 1) {
	                $('#JS-save-success').find('.modal-body').text('保存成功');
	                $('#JS-save-success').modal();
	                $('.f-name').val("");
	                $('.f-company').val("");
	                $('.f-email').val("");
	                $('.f-phone').val("");
	                $('.f-message').val("");
	            } else {
	                $('#JS-save-success').find('.modal-body').text('保存失败');
	                $('#JS-save-success').modal();
	            }
	        });
	    });
	});

/***/ }
/******/ ]);