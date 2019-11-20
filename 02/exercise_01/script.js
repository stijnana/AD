var submitBtnSmalest = document.getElementById("submit_button_smal");
var submitBtnSort = document.getElementById("submit_button_sort");
var arr = [5,3,6,2,12];

function addButtonAction() {
    submitBtnSmalest.addEventListener("click", function() {
        findSmalest(arr);
    });

    submitBtnSort.addEventListener("click", function() {
        sort(arr);
    });
}

function fillArr() {

}

function findSmalest(randomN) {
    var smallest = arr[0];
    var smallest_index = 0;
    randomN.forEach(function(item) {
        if (item < smallest){
            smallest = item;
            smallest_index = item;

        }
    });
    console.log(smallest_index);
}

function sort(randomN) {
    randomN.sort(function(a, b){return a - b});
    console.log(randomN);
}

addButtonAction();