!function(factory){"function"==typeof define&&define.amd?define(["jquery","../version","../effect"],factory):factory(jQuery)}(function($){return $.effects.define("fade","toggle",function(options,done){var show="show"===options.mode;$(this).css("opacity",show?0:1).animate({opacity:show?1:0},{queue:!1,duration:options.duration,easing:options.easing,complete:done})})});