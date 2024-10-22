export function copyOnClipboard(text){
    const input = document.createElement("input")
    const body = document.getElementsByTagName('body')[0]
    input.setAttribute('value', text)
    body.appendChild(input)
    input.select()
    document.execCommand("copy")
    body.removeChild(input)
}