var Observable = require("data/observable").Observable;
var frameModule = require('ui/frame');
var platform = require("platform");
var enums = require("ui/enums");

function animateX(view, x) {
    view.animate({
        translate: { x: x, y: 0},    
        duration: 3000,
        curve: enums.AnimationCurve.spring
    });
}

function animateColor(view, color) {
    view.animate({
        backgroundColor: color,
        duration: 1000
    });
}

function createViewModel() {
    var viewModel = new Observable();

    var mode = 1;
    var width = platform.screen.mainScreen.widthDIPs - 40;
    
    viewModel.animate = function() {
        var viewX = frameModule.topmost().getViewById("simple-translation");
        animateX(viewX, width*Number(mode));

        var viewColor = frameModule.topmost().getViewById("color-animation");
        animateColor(viewColor, mode ? "red" : "green");

        mode = !mode;
    }

    viewModel.animateCSS = function() {
        viewModel.set("cssTranslation", true);
    }

    return viewModel;
}

exports.createViewModel = createViewModel;