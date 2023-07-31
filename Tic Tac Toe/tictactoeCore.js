const elements = document.querySelectorAll(".stroke-place");
const resetBotten = document.getElementById("reset-button");
const circle = '<svg fill="#ffd47f" viewBox="-1.6 -1.6 35.20 35.20"> <g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M0 16q0 3.264 1.28 6.208t3.392 5.12 5.12 3.424 6.208 1.248 6.208-1.248 5.12-3.424 3.392-5.12 1.28-6.208-1.28-6.208-3.392-5.12-5.088-3.392-6.24-1.28q-3.264 0-6.208 1.28t-5.12 3.392-3.392 5.12-1.28 6.208zM4 16q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016-1.6 6.048-4.384 4.352-6.016 1.6-6.016-1.6-4.384-4.352-1.6-6.048z"></path></g></svg>';
const X = '<svg fill="#ffd47f" height="10rem" width="10re,"viewBox="-23.04 -23.04 506.85 506.85" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g stroke-linecap="round" stroke-linejoin="round"></g><g><path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" ></path></g></svg>';
let isX = false;
let StrokeCount = 0;

resetBotten.addEventListener("click", () => reset());

elements.forEach(element => {
    element.addEventListener("click", () => clicked(element));
});


function clicked(element) {
    if (element.hasAttribute("id")
        && element.getAttribute("id") === "clicked") {
        return;
    }
    element.setAttribute("id", "clicked");
    element.innerHTML = (isX ? X : circle);
    isX = !isX;
    StrokeCount++;
    if (StrokeCount >= 5) {
        if (isStroke()) {
            reset();
        }
    }
}

function reset() {
    isX = false;
    StrokeCount = 0;

    elements.forEach(element => {
        if (element.hasAttribute("id")
            && element.getAttribute("id") === "clicked") {
            element.removeAttribute("id", "clicked");
            element.innerHTML = "";
        }
    });
}





