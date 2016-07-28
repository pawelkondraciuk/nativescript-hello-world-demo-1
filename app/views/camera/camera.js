var createViewModel = require("./camera-model").createViewModel;
var navigationModule = require("../../shared/navigation");
var camera = require("camera");
var model = createViewModel();
var pageId;

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = model;
    pageId = page.navigationContext.pageId;
}
exports.onNavigatingTo = onNavigatingTo;

exports.goBack = navigationModule.goBack;
exports.goToNextScreen = function() {
    navigationModule.navigateTo(pageId+1);
}

function takePhoto() {
    camera.takePicture().then(result => {
        model.set("image", result);
    });
}
exports.takePhoto = takePhoto;
