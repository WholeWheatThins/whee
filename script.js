import {all, loweffort, higheffort, goingout} from './activities.js'
const tagsEl = document.getElementById('tags')
const everythingButton = document.getElementById('everything')
const loweffortButton = document.getElementById('loweffort')
const higheffortButton = document.getElementById('higheffort')
const touchgrassButton = document.getElementById('goingout')


everythingButton.addEventListener('click', hideButton)
everythingButton.addEventListener('click', function() {createTags(all)})
everythingButton.addEventListener('click', randomSelect)

loweffortButton.addEventListener('click', hideButton)
loweffortButton.addEventListener('click', function() {createTags(loweffort)})
loweffortButton.addEventListener('click', randomSelect)

higheffortButton.addEventListener('click', hideButton)
higheffortButton.addEventListener('click', function() {createTags(higheffort)})
higheffortButton.addEventListener('click', randomSelect)

touchgrassButton.addEventListener('click', hideButton)
touchgrassButton.addEventListener('click', function() {createTags(goingout)})
touchgrassButton.addEventListener('click', randomSelect)


function hideButton() {
    everythingButton.style.display = 'none'
    loweffortButton.style.display = 'none'
    higheffortButton.style.display = 'none'
    touchgrassButton.style.display = 'none'
}

function createTags(list) {
    const tags = list
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
	
	if (randomTag !== undefined) {
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
	}
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}