const heading = document.getElementById("heading");


const p = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Promise resolved");

    }, 10000)
})



const p2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("p2 Promise resolved");

    }, 5000)
})


async function getData() {
    heading.innerText = "Promise coming";

    const val = await p;
    console.log("val");
    heading.innerText = val;

    const p2value = await p2;
    console.log("p2 value")

    heading.innerText = p2value;


}
getData();

