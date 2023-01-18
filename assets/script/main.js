let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', ShakeHandler)
frontend.addEventListener('animationend', ShakeHandler)

function ShakeHandler() {
  frontend.classList.toggle('frontend')
}

let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('click', RotateHandler)
design.addEventListener('animationend', RotateHandler)

function RotateHandler() {
  design.classList.toggle('design')
}

let and = document.querySelector('a:nth-of-type(3)')

and.addEventListener('click', BorderHandler)
and.addEventListener('animationend', BorderHandler)

function BorderHandler() {
  and.classList.toggle('and')
}

let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('click', ColorHandler)
development.addEventListener('animationend', ColorHandler)

function ColorHandler() {
  development.classList.toggle('development')
}

let sprint = document.querySelector('a:nth-of-type(5)')

sprint.addEventListener('click', FlashHandler)
sprint.addEventListener('animationend', FlashHandler)

function FlashHandler() {
  sprint.classList.toggle('sprint')
}

let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener('click', PushHandler)
fix.addEventListener('animationend', PushHandler)

function PushHandler() {
  fix.classList.toggle('fix')
}

let the = document.querySelector('a:nth-of-type(7)')

the.addEventListener('click', TurnHandler)
the.addEventListener('animationend', TurnHandler)

function TurnHandler() {
  the.classList.toggle('the')
}

let flow = document.querySelector('a:nth-of-type(8)')

flow.addEventListener('click', SwipeHandler)
flow.addEventListener('animationend', SwipeHandler)

function SwipeHandler() {
  flow.classList.toggle('flow')
}

let user = document.querySelector('a:nth-of-type(9)')

user.addEventListener('click', ScaleHandler)
user.addEventListener('animationend', ScaleHandler)

function ScaleHandler() {
  user.classList.toggle('user')
}

let interface = document.querySelector('a:nth-of-type(10)')

interface.addEventListener('click', LastHandler)
interface.addEventListener('animationend', LastHandler)

function LastHandler() {
  interface.classList.toggle('interface')
}

