let data = [
    {
        "name": "الليل",
        "index": "وَٱلَّيۡلِ إِذَا يَغۡشَىٰ (1) وَٱلنَّهَارِ إِذَا تَجَلَّىٰ (2) وَمَا خَلَقَ ٱلذَّكَرَ وَٱلۡأُنثَىٰٓ (3) إِنَّ سَعۡيَكُمۡ لَشَتَّىٰ (4) فَأَمَّا مَنۡ أَعۡطَىٰ وَٱتَّقَىٰ (5) وَصَدَّقَ بِٱلۡحُسۡنَىٰ (6) فَسَنُيَسِّرُهُۥ لِلۡيُسۡرَىٰ (7) وَأَمَّا مَنۢ بَخِلَ وَٱسۡتَغۡنَىٰ (8) وَكَذَّبَ بِٱلۡحُسۡنَىٰ (9) فَسَنُيَسِّرُهُۥ لِلۡعُسۡرَىٰ (10) وَمَا يُغۡنِي عَنۡهُ مَالُهُۥٓ إِذَا تَرَدَّىٰٓ (11) إِنَّ عَلَيۡنَا لَلۡهُدَىٰ (12) وَإِنَّ لَنَا لَلۡأٓخِرَةَ وَٱلۡأُولَىٰ (13) فَأَنذَرۡتُكُمۡ نَارٗا تَلَظَّىٰ (14) لَا يَصۡلَىٰهَآ إِلَّا ٱلۡأَشۡقَى (15) ٱلَّذِي كَذَّبَ وَتَوَلَّىٰ (16) وَسَيُجَنَّبُهَا ٱلۡأَتۡقَى (17) ٱلَّذِي يُؤۡتِي مَالَهُۥ يَتَزَكَّىٰ (18) وَمَا لِأَحَدٍ عِندَهُۥ مِن نِّعۡمَةٖ تُجۡزَىٰٓ (19) إِلَّا ٱبۡتِغَآءَ وَجۡهِ رَبِّهِ ٱلۡأَعۡلَىٰ (20) وَلَسَوۡفَ يَرۡضَىٰ (21)"
    }
]
var index = data[0]["index"].split(/\)/);
var index = index.slice(0, index.length - 1);
document.title += ` ${data[0]["name"]}`
const nameaya = document.querySelectorAll(".name")
const aya = document.querySelector(".index");
const btn = document.querySelectorAll("#btn")
const btnSpan = document.querySelectorAll("#btn span")
const text3 = document.querySelector(".text3");
const icon = document.querySelectorAll(".fa-solid")
nameaya.forEach((e, i) => {
    e.innerHTML = data[0]["name"]
})

var rand = randoms()
btn.forEach((e, i) => {
    e.onclick = () => {
        let span = btnSpan[i].innerHTML
        if (span != rand + 1) {
            icon[i].classList.remove("fa-check")
            icon[i].classList.add("fa-xmark")
        } else {
            const audio = new Audio("true.mp3");
            audio.play()
        }
        icon[i].className += " icon"
        setTimeout(() => {
            icon[i].classList.remove("fa-xmark")
            icon[i].classList.add("fa-check")
            randoms()
            icon[i].classList.remove("icon")
        }, 500)
    }
})

function randoms() {
    var random = Math.floor(Math.random() * 20) + 1
    aya.innerHTML = index[random].replace(/[0-9\()]/g, "")
    let randomIndex = [random + 1];
    while (randomIndex.length < btn.length) {
        let index = (Math.floor(Math.random() * 20) + 1)
        if (!randomIndex.includes(index)) {
            randomIndex.push(index)
        }
    }
    let i = 0
    let arry = []
    while (i < btnSpan.length) {
        let index = Math.floor(Math.random() * randomIndex.length)
        if (!arry.includes(index)) {
            btnSpan[i].innerHTML = randomIndex[index]
            arry.push(index)
            i++
        }
    }
    rand = random;
    return random
}