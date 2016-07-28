var navigationModule = require("../../shared/navigation");
var createViewModel = require("./animations-model").createViewModel;
var pageId;

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
    pageId = page.navigationContext.pageId;
}
exports.onNavigatingTo = onNavigatingTo;
exports.goBack = navigationModule.goBack;
exports.goToNextScreen = function() {
    navigationModule.navigateTo(pageId+1);
}
