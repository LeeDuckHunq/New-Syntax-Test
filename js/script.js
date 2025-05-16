const preImage = document.getElementById('pre');
const nextImage = document.getElementById('next');
const imgElement = document.getElementById('img-content')

const img = [
    '<img src="https://plugin-value-scrum.figma.site/_assets/v8/8c5a21adadebacbd69375684275fb89819b4d967.png?w=2048">',
    '<img src="https://plugin-value-scrum.figma.site/_assets/v8/5e9724c0fed9c02280ed2551aeebd3342e05b3fe.png?w=1024">',
    '<img src="https://plugin-value-scrum.figma.site/_assets/v8/fce3f1e14cf12499508a2ecdf6efd18ebbecbc10.png?w=1024">'
]

let current = 0

preImage.onclick = function() {
    if (current > 0 && current <= 2) {
        current -= 1;
    }
    else {current = 2}
    imgElement.innerHTML = img[current]
}

nextImage.onclick = function() {
    if (current >= 0 && current < 2) {
        current += 1;
    }
    else {current = 0}
    imgElement.innerHTML = img[current]
}