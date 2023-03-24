// point systemet
const getPointId = document.getElementById("point")
let pointAntal = 0;
document.getElementById("highscore").innerHTML = localStorage.getItem("highscore")


const ANIMALS = document.querySelectorAll(".animal")
const FOODS = ["lettuce", "straws", "bottle", "screw", "bacon", "egg", "potato", "beans", "falafel", "olive", "croissant", "avocado", "noodles", "rice", "takeaway", "canned"]

// liste af dyrene, og hvad de kan lide
const animals_arr = [
    {
        // tortoise
        name: ANIMALS[0].id,
        eats: ["straws", "noodles", "falafel", "canned"]
    },
    {
        // worm
        name: ANIMALS[1].id,
        eats: ["lettuce", "noodles", "olive", "canned"]
    },
    {
        // baby
        name: ANIMALS[2].id,
        eats: ["bottle", "croissant", "rice", "takeaway"]
    },
    {
        // blobfish
        name: ANIMALS[3].id,
        eats: ["screw", "avocado", "falafel", "takeaway"]
    },
    {
        // shrimp
        name: ANIMALS[4].id,
        eats: ["potato", "avocado", "croissant", "canned"]
    },
    {
        // bird
        name: ANIMALS[5].id,
        eats: ["egg", "noodles", "olive", "beans", "rice"]
    },
    {
        // pig
        name: ANIMALS[6].id,
        eats: ["bacon", "avocado", "falafel", "beans"]
    },
]
for (i = 0; i < FOODS.length; i++) {
    document.getElementById(FOODS[i]).addEventListener("dragstart", function (element) {
        dragged = element.target.id
        console.log(dragged);
    })
}
for (let i = 0; i < animals_arr.length; i++) {
    var getid = document.getElementById(animals_arr[i].name);
    getid.addEventListener("dragover", event => {
        event.preventDefault();
    });

    getid.addEventListener("drop", (function (index) {
        return function (event) {
            if (animals_arr[index].eats.includes(dragged)) {
                document.getElementById(dragged).remove()
                pointAntal += 1;
                let alertTriggered = false
                if (document.getElementById("foods").children.length == 0 && !alertTriggered) {
                    alertTriggered = true
                    document.body.classList.add("won")
                }
            } else {
                document.getElementById(dragged).remove()
                location.reload()

            }
            getPointId.innerHTML = pointAntal
            if (pointAntal > localStorage.getItem("highscore")) {
                localStorage.setItem("highscore", pointAntal)
                document.getElementById("highscore").innerHTML = localStorage.getItem("highscore")
            }
        };

    })(i));
}