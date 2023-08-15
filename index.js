const subahanallahDisplay = document.getElementById('subahanallahDisplay')
const subahanallahIncrimentButton = document.getElementById('subahanallahIncrimentButton')
const subahanallahDecrementtButton = document.getElementById('subahanallahDecrementtButton')

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay')
const alhamdulillahIncrimentButton = document.getElementById('alhamdulillahIncrimentButton')
const alhamdulillahDecrementtButton = document.getElementById('alhamdulillahDecrementtButton')


const allahAkberDisplay = document.getElementById('allahAkberDisplay')
const allahuakberIncrimentButton = document.getElementById('allahuakberIncrimentButton')
const allahuakberDecrementtButton = document.getElementById('allahuakberDecrementtButton')


const resetButton = document.getElementById('resetButton')



let subahanallahInitialValue = 0;
let alhamdulillahlValue = 0;
let allahAkberInitialValue = 0;

// 1. subahanallahInitialValue
subahanallahIncrimentButton.addEventListener('click', function () {
    if (subahanallahInitialValue === 33) {
        return alert('You are success')
    }
    subahanallahInitialValue += 1
    subahanallahDisplay.innerText = subahanallahInitialValue
})

subahanallahDecrementtButton.addEventListener('click', function () {
    if (subahanallahInitialValue === 0) {
        return alert('Please start Tashbih')
    }
    subahanallahInitialValue -= 1
    subahanallahDisplay.innerText = subahanallahInitialValue
})

// 2.alhamdulillahlValue 
alhamdulillahIncrimentButton.addEventListener('click', function () {
    if (alhamdulillahlValue === 33) {
        return alert('You are success again')
    }
    alhamdulillahlValue += 1;
    alhamdulillahDisplay.innerText = alhamdulillahlValue
})

alhamdulillahDecrementtButton.addEventListener('click', function () {
    if (alhamdulillahlValue === 0) {
        return alert('Please start Tasbih')
    }
    alhamdulillahlValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahlValue
})



// 3.allahAkberInitialValue

allahuakberIncrimentButton.addEventListener('click', function () {
    if (allahAkberInitialValue === 34) {
        return alert('Yes You are Compelete Full Task')
    }
    allahAkberInitialValue = allahAkberInitialValue + 1;
    allahAkberDisplay.innerText = allahAkberInitialValue
})

allahuakberDecrementtButton.addEventListener('click', function () {
    if (allahAkberInitialValue === 0) {
        return alert('No No You cant do this')
    }
    allahAkberInitialValue = allahAkberInitialValue - 1;
    allahAkberDisplay.innerText = allahAkberInitialValue
})


// reset button work final

resetButton.addEventListener('click', function () {
    subahanallahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahAkberDisplay.innerText = 0;

    subahanallahInitialValue = 0;
    alhamdulillahlValue = 0;
    allahAkberInitialValue = 0;


})