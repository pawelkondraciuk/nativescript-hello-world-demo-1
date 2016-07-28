var Observable = require("data/observable").Observable;
var camera = require("camera");

function createViewModel() {
    var viewModel = new Observable();

    viewModel.isBlack = true;
    viewModel.fontSize = 20;

    return viewModel;
}

exports.createViewModel = createViewModel;