const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]");

checkbox.disabled = true;
submitBtn.disabled = true;

const elements = document.querySelectorAll(".element");
const selectcolor = document.getElementById("selectColor");

elements.forEach(function (element) {
    const color = getRandomColor();

    element.style.backgroundColor = color;
    element.innerHTML = color;
    selectcolor.innerHTML = color;
})

// Generate random color function
function getRandomColor() {
    const letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += letter[Math.floor(Math.random() * 16 )];
    }
    return color;
}

elements.forEach(function (element) {
    element.addEventListener('click', function () {
        if (element.innerHTML === selectcolor.innerHTML) {
            //alert('You are human.')
            checkbox.checked = true;
            submitBtn.disabled = false;
            submitBtn.classList.add('greeny');
        }
        else {
            //alert('Please verify that You are human.');
            location.reload(true);
        }
    })
})
