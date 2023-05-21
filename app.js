// import html elements
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

// set initial counter value
let count = 0

// button interactions
btns.forEach((btn) => {
  // listen for button clicks
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList
    // change counter value
    if (styles.contains("decrease")) {
      count--
    } else if (styles.contains("increase")) {
      count++
    } else if (styles.contains("multiply")) {
      count *= 2
    } else if (styles.contains("divide")) {
      count /= 2
    } else {
      count = 0
    }

    // change counter color
    if (count < 0) {
      value.style.color = "red"
    }
    if (count > 0) {
      value.style.color = "green"
    }
    if (count == 0) {
      value.style.color = "hsl(209, 61%, 16%)"
    }
    value.textContent = count
  })
})
