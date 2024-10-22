export function activateTitle(pageTitleClassName){
    const pageTitle = document.getElementsByClassName(pageTitleClassName)[0]
    setTimeout(() =>{
        pageTitle.id = "activated-title"
        if (pageTitle.hasChildNodes() && pageTitle.children[0]){
            setTimeout(()=>{
                pageTitle.children[0].id = "activated-subtitle"
            }, 1000)
        }
    }, 100)
}