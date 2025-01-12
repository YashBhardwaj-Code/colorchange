let color;
const change = document.getElementById("change");

change.addEventListener("click", () => {
    color = document.getElementById("color-picker");
    let hexValue = color.value;
    document.body.style.backgroundColor = hexValue;
});
