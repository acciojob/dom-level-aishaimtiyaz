//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    // Get the target element
    var targetElement = document.getElementById("level");

    // Function to find the DOM level of the target element
    function findDOMLevel(element) {
        var level = 0;

        while (element.parentElement) {
            element = element.parentElement;
            level++;
        }

        return level+1;
    }

    // Find the DOM level of the target element
    var domLevel = findDOMLevel(targetElement);

    // Display the result using alert
    alert("The level of the element is: " + domLevel);
});
