const userInput = document.querySelector("#userInputFiled");
const userAddBtn = document.querySelector("#addToContainer");
const showDataHere = document.querySelector("#showDataHere");
const adddText = document.querySelector(".addd-text");
// user function
const TodoApp = () => {
    let userTypied = userInput.value;
    const userData = document.createElement("div");
    userData.style.marginTop = "5px";
    userData.innerHTML = `
    <div class="addd-text">
    <box class="userInputs">${userTypied}</box>

    <div class="remove-icon">
    <i class="fa-solid fa-trash" id="trashBox"></i>
    </div>


    </div>
    `;

    const trashIcon = userData.querySelector(".fa-trash");
    trashIcon.addEventListener("click", () => {
        userData.remove();

    });


    userInput.value = "";
    showDataHere.appendChild(userData);
};





// userCLickl function
userAddBtn.addEventListener("click", function() {
    let p = document.createElement("p");
    if (userInput.value === "") {
        alert("Please enter task");
        setTimeout(() => {
            p.remove();
        }, 1000);
        document.body.appendChild(p);
    } else {
        TodoApp();
    }
});