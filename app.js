const questList = ["Angela", "John", "Pam", "jack", "Nathan",]

const questName = prompt("What is your name?")

function quest() {
    if(questList.includes(questName)) {
        alert('Welcome!')
    } else {
        alert('Sorry, you are not invited')
    }
}


quest()
