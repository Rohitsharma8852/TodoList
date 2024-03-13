var item = document.querySelector("#item");
var toDoBox = document.querySelector("#to-do-box");

item.addEventListener(
    "keyup",
    function (event) {
        if(event.key == "Enter"){
            var task = item.value;
            item.value ="";
            var listitem = document.createElement("li");

            listitem.addEventListener(
                "click",
                function (e) {
                    e.target.classList.toggle("done");
                }
            )

            listitem.innerHTML = `${task} <span onclick="closeMe(this)"> x </span> `;

            toDoBox.appendChild(listitem);
        }
    }
)

function closeMe(span) {
    span.parentNode.remove();
}