function serchFimrFunc() {
    const serchList = document.querySelector(".serchList");
    const section1 = document.querySelector(".section1");
    serchList.classList.toggle("displayNone");
    section1.classList.toggle("marginTop")
};


function displayAddForm() {
    const AddForm = document.querySelector(".addForm");
    AddForm.classList.toggle("displayNone")
}

let formAdd = [];
const boxWraper = document.querySelector(".boxWraper");

async function formData() {
    try {
        const formLine = await fetch("https://639906d5fe03352a94e469c0.mockapi.io/addForm");
        const formList = await formLine.json();

        formAdd = formList

        formAdd.map((item) => {
            const smollBox = document.createElement("div");
            smollBox.setAttribute("class", "smollBox")

            const image1 = document.createElement("img");
            image1.setAttribute("class", "smollBoxImg");
            image1.setAttribute("alt", item.address);
            image1.setAttribute("src", `${item.image}?random=${Math.random() * 10000}`);

            const roomHistori = document.createElement("div");
            roomHistori.setAttribute("class", "roomHistori");

            const hotSell = document.createElement("p");
            hotSell.setAttribute("class", "hotSell");
            hotSell.innerHTML = "Hot sell";

            const sellMany = document.createElement("p");
            sellMany.setAttribute("class", "sellMany");
            sellMany.innerHTML = item.price;

            const spanName = document.createElement("span");
            spanName.innerHTML = item.description;

            const pointNumber = document.createElement("div");
            pointNumber.setAttribute("class", "pointNumber");


            const starIcon = document.createElement("img");
            starIcon.setAttribute("src", "https://cdn3.iconfinder.com/data/icons/stars-5/512/red_alert_star-512.png")
            starIcon.setAttribute("width", "15")
            starIcon.setAttribute("alt", "star")

            const rate = document.createElement("p");
            rate.setAttribute("class", "pointNum");
            rate.innerHTML = item.rate;

            const housAdress = document.createElement("div");
            housAdress.setAttribute("class", "housAdress");


            const mapAddress = document.createElement("a");
            mapAddress.setAttribute("href", item.address);
            mapAddress.innerHTML = "See map";

            const mobNumber = document.createElement("a");
            mobNumber.setAttribute("href", `tel:${item.number}`);
            mobNumber.innerHTML = "Call mobile";

            const emailAddress = document.createElement("a");
            emailAddress.setAttribute("href", `mailto:${item.email}?subject=hello i need home !&body=hello i see you home and i need it`);
            emailAddress.innerHTML = "Mesige email";

            smollBox.appendChild(image1);
            smollBox.appendChild(roomHistori);
            roomHistori.appendChild(hotSell);
            roomHistori.appendChild(sellMany);
            roomHistori.appendChild(spanName);
            roomHistori.appendChild(pointNumber);
            pointNumber.appendChild(starIcon);
            pointNumber.appendChild(rate);
            smollBox.appendChild(housAdress);
            housAdress.appendChild(mapAddress);
            housAdress.appendChild(mobNumber);
            housAdress.appendChild(emailAddress);

            boxWraper.appendChild(smollBox)

            console.log(item)
        })

    } catch (err) {
        console.log("error", err)
    }
}
formData();
// async function renderData() {
//     const addFormMain = document.querySelector(".addform")
//     try {
//         await costomPromise();

//         if (result.hasChildNodes()) {
//             result.replaceChildren();
//         }

//         formAdd.map((item) => {
//             const image = document.
//         })
//     } catch (err) {
//         console.log("the is error")
//     }
// }