var navigationModule = require("../../shared/navigation");
var page; 

function onNavigatingTo(args) {
    page = args.object;
    page.bindingContext = {
        pages: navigationModule.pages
    };
}

exports.onNavigatingTo = onNavigatingTo;

function onItemTap(args) {
    var tappedItemIndex = args.index;
    var moduleName = page.bindingContext.pages[tappedItemIndex].moduleName;
    navigationModule.navigateTo(tappedItemIndex);
}

exports.onItemTap = onItemTap;