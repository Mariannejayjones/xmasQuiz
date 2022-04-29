//this would be the object shape for storing the questions  

const questions = [
  {
    question: "I’m similar in size to a large egg but I’m not a pebble, I’m fuzzy but I’m not a stuffed toy, I’m green on the inside but I’m not a lawnmower that’s just been used, I have the same name as a type of bird but I’m not a crane, I’m a fruit but I’m not a grape What am I?",
    optionA: "Grape",
    optionB: "Apple",
    optionC: "Peach",
    optionD: "Kiwi",
    correctOption: "optionD"
  },

  {
    question: "I’m hard but I’m not a stone, I’m cold but I don’t need a coat, If I get warmed up I change appearance but I’m not popcorn, I get put in drinks but I’m not a straw, I’m made of H20 but I’m not running water. What am I?",
    optionA: "Popcorn",
    optionB: "Ice",
    optionC: "Water",
    optionD: "Polar bear",
    correctOption: "optionB"
  },

  {
    question: "I’m a city but I’m not London, I have a famous parade but I’m not Rio, I’m in the US but I’m not Washington DC. I have two baseball teams but I’m not Chicago, I‘m known as a large piece of fruit but I’m not Banana Republic. What am I?",
    optionA: "Paris",
    optionB: "Texas",
    optionC: "Georgia",
    optionD: "New York",
    correctOption: "optionD"
  },

  {
    question: "I have four legs but I’m not a chair, I have a long tongue but I’m not a frog, I eat trees but I’m not a koala, I live in Africa but I’m not a lion, I have a long neck but I’m not a bottle. What am I?",
    optionA: "Koala",
    optionB: "Rino",
    optionC: "Giraffe",
    optionD: "Llama",
    correctOption: "optionC"
  },

  {
    question: "I have a lot of teeth but I’m not a cog, I scare a lot of people but I’m not a spider, I have a fin but I’m not a boat, I’m found in the ocean but I’m not a buoy, I sometimes have a hammerhead but I don’t hit nails. What am I?",
    optionA: "Snake",
    optionB: "Eel",
    optionC: "Dolphin",
    optionD: "Shark",
    correctOption: "optionD"
  },

  {
    question: "I grow on trees but I’m not a leaf, I’m spherical but I’m not a soccer ball, I provide juice but I’m not an apple, I’m sometimes naval but I’m not a sailor, I’m a color but I’m not red. What am I?",
    optionA: "Orange",
    optionB: "Apple",
    optionC: "Olive",
    optionD: "Blue",
    correctOption: "optionA"
  },

  {
    question: "I’m a country but I’m not Iceland, I have red, white and blue on my flag but I’m not the USA, I’m in Europe but I’m not the UK, I have a famous tower but I’m not Italy, I have my language spoken in many countries around the world but I’m not Spain. What am I?",
    optionA: "Germany",
    optionB: "Ireland",
    optionC: "France",
    optionD: "Portugal",
    correctOption: "optionC"
  },

  {
    question: "I represent a star sign but I’m not a bull, I like to sleep during the day but I’m not a bat, I’m found in Africa and Asia but I’m not an elephant, I was a character in The Wizard Of Oz but I’m not a scarecrow, I’m the king of the jungle but I don’t have a crown. What am I?",
    optionA: "Lion",
    optionB: "Crab",
    optionC: "Fish",
    optionD: "Sheep",
    correctOption: "optionA"
  },

  {
    question: "I have a red and white flag but I’m not Japan, I have a Prime Minister but I’m not Canada, I’m a country in Europe but I’m not Switzerland, I have a commonly spoken language but I’m not France, I have a royal family but I’m not Denmark. What am I?",
    optionA: "Spain",
    optionB: "New Zealand",
    optionC: "Australia",
    optionD: "England",
    correctOption: "optionD"
  },

  { 
    question: "I have many layers but I’m not someone wearing winter clothes, I can be red, white or yellow but I’m not a rose, I can be made into rings but I’m not gold, I can be peeled but I’m not a banana, I’m a bulb but I don’t shine, I can make you cry but I’m not a sad movie. What am I?",
    optionA: "Flower",
    optionB: "Potato",
    optionC: "Lemon",
    optionD: "Onion",
    correctOption: "optionD"
  },

  {
    question: "I’m thin but I’m not a piece of wire, I’m sharp but I’m not a pencil, I’m made of metal but I’m not a nail, I have an eye but I can’t see, I’m used for sewing but I’m not a piece of thread. What am I?",
    optionA: "Pen",
    optionB: "Screw",
    optionC: "Needle",
    optionD: "Pin",
    correctOption: "optionC"
  },

]


let shuffledQuestions = questions //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 10) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 10) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 1) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}








