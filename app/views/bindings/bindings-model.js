var Observable = require("data/observable").Observable;

function createViewModel(navigationContext) {
    var viewModel = new Observable();
    viewModel.fontSize = 20;
    viewModel.hint = 'This is hint';
    return viewModel;
}

exports.createViewModel = createViewModel;