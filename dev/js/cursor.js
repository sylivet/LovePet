const root = document.querySelector('html')
const cursor = document.createElement('div')
cursor.classList.add('cursor')
root.appendChild(cursor)
root.addEventListener('mousemove', (e) => {
  setPosition(cursor, e)
})

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
}