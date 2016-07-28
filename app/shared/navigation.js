var frameModule = require('ui/frame');

exports.pages = pages = [{
    name: "Intro",
    moduleName: "views/main-page/main-page"
},{
    name: "Bindings",
    moduleName: "views/bindings/bindings"
},{
    name: "Styling",
    moduleName: "views/stylings/stylings"
},{
    name: "Animations",
    moduleName: "views/animations/animations"
},{
    name: "Camera",
    moduleName: "views/camera/camera"
}, {
    name: "Simple page",
    moduleName: "views/simple-page/simple-page"
}]

function navigateTo(pageId, context) {
    var topmost = frameModule.topmost();
    topmost.navigate({
        moduleName: pages[pageId].moduleName,
        context: {
            pageId: pageId
        },
        animated: true,
        backstackVisible: false,
        transition: {
            name: "fade",
            duration: 380,
            curve: "easeIn"
        }
    });
}

exports.navigateTo = navigateTo;

function navigationWrapper(moduleName) {
    return function() { navigateTo(moduleName); };
}

exports.navigationWrapper = navigationWrapper;

exports.goBack = function() {
    var topmost = frameModule.topmost();
    topmost.goBack();
} 