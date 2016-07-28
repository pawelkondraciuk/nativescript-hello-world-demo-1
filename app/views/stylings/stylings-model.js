var Observable = require("data/observable").Observable;

function createViewModel() {
    var viewModel = new Observable();

    viewModel.setRed = function() {
        viewModel.set('color', 'red');
    };
    viewModel.setYellow = function() {
        viewModel.set('color', 'yellow');
    };
    viewModel.setBlue = function() {
        viewModel.set('color', 'blue');
    };
    viewModel.setGreen = function() {
        viewModel.set('color', 'green');
    };

    return viewModel;
}

exports.createViewModel = createViewModel;