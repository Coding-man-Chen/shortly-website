const input = document.getElementById('link-input')
const form = document.getElementById('link-form')
const errMsg = document.getElementById('err-msg')
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

const validURL = (url) => {
    var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    )
    return !!pattern.test(url)
}

const handleSubmit = (e) => {
    e.preventDefault()
    if(input.value === ''){
        errMsg.innerHTML = 'Please enter something'
        input.classList.add('border-red')
    }else if(!validURL(input.value)){
        errMsg.innerHTML = 'Please enter a valid URL'
        input.classList.add('border-red')
    }else{
        errMsg.innerHTML = ''
        input.classList.remove('border-red')
    }

}

const handleClickMenu = () => {
    btn.classList.toggle('open')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
}

form.addEventListener('submit',handleSubmit)

btn.addEventListener('click',handleClickMenu)
