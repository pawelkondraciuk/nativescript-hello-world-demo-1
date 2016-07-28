var createViewModel = require("./main-view-model").createViewModel;
var navigationModule = require("../../shared/navigation");
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