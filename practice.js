function myFunction(){
    document.getElementById('body').style.background = "black";
}

const body = document.body
const div = document.createElement('div')
body.append(div)
div.style.width = '50px'
div.style.height = '50px'
div.style.background = "red"
body.style.padding = '0'
body.style.margin = '0'
