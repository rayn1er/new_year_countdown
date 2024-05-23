const day = document.querySelector('.day')
const hour = document.querySelector('.hour')
const minute = document.querySelector('.minutes')
const second = document.querySelector('.second')

const newYear = new Date('Jan 1, 2025 00:00:00').getTime()

updateCountDown() 

function updateCountDown() {
    const now = new Date().getTime()
    const gap = newYear - now

    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24

    
    const d = Math.floor(gap / days)
    const h = Math.floor((gap % days) / hours)
    const m = Math.floor((gap % hours) / minutes)
    const s = Math.floor((gap % minutes) / seconds)

    day.innerText = d;
    hour.innerText = h
    minute.innerText = m
    second.innerText = s

    setTimeout(updateCountDown,1000)

}