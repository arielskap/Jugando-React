function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

function toggleDropdown(id) {
    var object = document.querySelector(id);
    var dropdown = window.getComputedStyle(object,null).getPropertyValue("display");
    if (dropdown === "none") {
        object.style.display = 'block';
    } else {
        object.style.display = 'none';
    }
}