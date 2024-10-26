const list = [
    { name: 'Milanese steak', img: 'imgFood/Bife à milanesa.jfif' },
    { name: 'Beef Wellington', img: 'imgFood/Bife Wellington.jfif' },
    { name: 'Brownie', img: 'imgFood/Brownie.jfif' },
    { name: 'Bruschetta', img: 'imgFood/Bruschetta.jfif' },
    { name: 'Burrito', img: 'imgFood/Burrito.jfif' },
    { name: 'Cheesecake', img: 'imgFood/Cheesecake.jfif' },
    { name: 'Indian curry', img: 'imgFood/Curry indiano.jfif' },
    { name: 'Falafel', img: 'imgFood/Falafel.jfif' },
    { name: 'Kung Pao chicken', img: 'imgFood/Frango xadrez.jfif' },
    { name: 'Hamburger', img: 'imgFood/Hambúrguer.jfif' },
    { name: 'Bolognese lasagna', img: 'imgFood/Lasanha à bolonhesa.jfif' },
    { name: 'Carbonara pasta', img: 'imgFood/Macarrão carbonara.jfif' },
    { name: 'Fresh oysters', img: 'imgFood/Ostras frescas.jfif' },
    { name: 'Paella', img: 'imgFood/Paella.jfif' },
    { name: 'Pancakes', img: 'imgFood/Panquecas.jfif' },
    { name: 'Pavlova', img: 'imgFood/Pavlova.jfif' },
    { name: 'Pizza', img: 'imgFood/Pizza.jfif' },
    { name: 'Ramen', img: 'imgFood/Ramen.jfif' },
    { name: 'Mushroom risotto', img: 'imgFood/Risotto de funghi.jfif' },
    { name: 'Caesar salad', img: 'imgFood/Salada Caesar.jfif' },
    { name: 'Grilled salmon', img: 'imgFood/Salmão grelhado.jfif' },
    { name: 'French onion soup', img: 'imgFood/Sopa de cebola francesa.jfif' },
    { name: 'Lentil soup', img: 'imgFood/Sopa de lentilha.jfif' },
    { name: 'Tomato soup', img: 'imgFood/Sopa de tomate.jfif' },
    { name: 'Beef stroganoff', img: 'imgFood/Strogonoff.jfif' },
    { name: 'Sushi and sashimi', img: 'imgFood/Sushis e sashimis.jfif' },
    { name: 'Mexican tacos', img: 'imgFood/Tacos mexicanos.jfif' },
    { name: 'Tiramisu', img: 'imgFood/Tiramisu.jfif' },
    { name: 'Chocolate cake', img: 'imgFood/Torta de chocolate.jfif' },
    { name: 'Waffles', img: 'imgFood/Waffles.jfif' }
];

//generate random numbers
const randomNumberList = []
function randomNumber(){
    while(randomNumberList.length < 3){
        const randomNumber = Math.floor(Math.random() * 30)
        if (!randomNumberList.includes(randomNumber)){
            randomNumberList.push(randomNumber)
        }
    }
}
randomNumber()


//getting the food
const foodListSelected = []
function getTheFood(){
    for(let i = 0; i < 3; i++){
        let indexList = randomNumberList[i]
        foodListSelected.push(list[indexList])
    }
}
getTheFood()

//Putting the food in html
function puttingFoodHtml(){
    for(let i = 0; i < 3; i++){
        const imgCard = document.querySelector('#img'+i)
        const nameCard = document.querySelector('#name'+i)

        imgCard.src = foodListSelected[i].img
        nameCard.innerText = foodListSelected[i].name
    }
}
puttingFoodHtml()

//Condition to pass the game
let canPass = [0, 0, 0]
function canPassTheGame(){
    const notZero = !canPass.includes(0)
    const isAllDiferent = new Set(canPass).size === 3

    if (notZero && isAllDiferent){
        setTimeout(() => {window.location.reload()}, 3000)

        // Function to show time to change
        let countDownNumber = 2;
        function showCountDown(){
            const countDownHTML = document.querySelector("#countDownHTML")
            countDownHTML.innerText = ''
            countDownHTML.innerText = countDownNumber
            countDownNumber--
        }
       
        setInterval(()=> {showCountDown()},1000) 
        
        
    }
}

//Avoid repeat choice
function repeatEat(){
    for(let i = 0; i < 3; i++){
        if(canPass[i] === 1){
            canPass[i] = 0
        
            const nameCard = document.querySelector('#name'+i)
            nameCard.innerText = ''
            nameCard.innerText = foodListSelected[i].name
        }
    }
}
function repeatGive(){
    for(let i = 0; i < 3; i++){
        if(canPass[i] === 2){
            canPass[i] = 0
        
            const nameCard = document.querySelector('#name'+i)
            nameCard.innerText = ''
            nameCard.innerText = foodListSelected[i].name
        }
    }
}
function repeatThrow(){
    for(let i = 0; i < 3; i++){
        if(canPass[i] === 3){
            canPass[i] = 0
        
            const nameCard = document.querySelector('#name'+i)
            nameCard.innerText = ''
            nameCard.innerText = foodListSelected[i].name
        }
    }
}

//function buttons
// function eat
function eatA(){
    repeatEat()
    canPass[0] = 1
    const nameCard = document.querySelector("#name0")
    nameCard.innerText = ''
    nameCard.innerText = 'Eat ' + foodListSelected[0].name
    canPassTheGame()
}
function eatB(){
    repeatEat()
    canPass[1] = 1
    const nameCard = document.querySelector("#name1")
    nameCard.innerText = ''
    nameCard.innerText = 'Eat ' + foodListSelected[1].name
    canPassTheGame()
}
function eatC(){
    repeatEat()
    canPass[2] = 1
    const nameCard = document.querySelector("#name2")
    nameCard.innerText = ''
    nameCard.innerText = 'Eat ' + foodListSelected[2].name
    canPassTheGame()
}

// function give
function giveA(){
    repeatGive()
    canPass[0] = 2
    const nameCard = document.querySelector("#name0")
    nameCard.innerText = ''
    nameCard.innerText = 'Give ' + foodListSelected[0].name
    canPassTheGame()
}
function giveB(){
    repeatGive()
    canPass[1] = 2
    const nameCard = document.querySelector("#name1")
    nameCard.innerText = ''
    nameCard.innerText = 'Give ' + foodListSelected[1].name
    canPassTheGame()
}
function giveC(){
    repeatGive()
    canPass[2] = 2
    const nameCard = document.querySelector("#name2")
    nameCard.innerText = ''
    nameCard.innerText = 'Give ' + foodListSelected[2].name
    canPassTheGame()
}

// function throw
function throwA(){
    repeatThrow()
    canPass[0] = 3
    const nameCard = document.querySelector("#name0")
    nameCard.innerText = ''
    nameCard.innerText = 'Throw ' + foodListSelected[0].name
    canPassTheGame()
}
function throwB(){
    repeatThrow()
    canPass[1] = 3
    const nameCard = document.querySelector("#name1")
    nameCard.innerText = ''
    nameCard.innerText = 'Throw ' + foodListSelected[1].name
    canPassTheGame()
}
function throwC(){
    repeatThrow()
    canPass[2] = 3
    const nameCard = document.querySelector("#name2")
    nameCard.innerText = ''
    nameCard.innerText = 'Throw ' + foodListSelected[2].name
    canPassTheGame()
}

