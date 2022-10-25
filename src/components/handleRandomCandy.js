let nextId = 7
const newCandy = [
    { id: 1 ,name: "reeses", image: "https://i.imgur.com/nQY1VK2.png" },
    { id: 2 ,name: "milkyway", image: "https://i.imgur.com/m4qs5hl.png" },
    { id: 3 ,name: "skittles", image: "https://i.imgur.com/isYGa3l.png" },
    { id: 4 ,name: "kitkat", image: "https://i.imgur.com/1sUatkE.png" },
    { id: 5 ,name: "snickers", image: "https://i.imgur.com/nXh6Xbf.png" },
    { id: 6 ,name: "lollipop", image: "https://i.imgur.com/CXsNvwJ.png" },
    { id: 7 ,name: "candy", image: "https://i.imgur.com/IMhchCb.png" },
]
function getNewRandomCandy() {
    const index = Math.floor(Math.random() * newCandy.length);
    const newCandies = { ...newCandy[index] };
    newCandies.id = nextId;
    nextId++;
    return newCandies;
}
function handleRandomCandy() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    let randomNum = getRandomInt(5)
    let candiesArray = []
    for (let i = randomNum; i >= 0; i--) {
        if (i > 0) {
            candiesArray.push(getNewRandomCandy())
        } else {

            return candiesArray
        }
    }
}

export default handleRandomCandy