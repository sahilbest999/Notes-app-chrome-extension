const getNodes = ()=> {
         const pTags = document.querySelectorAll('p') || []
         return [...pTags]
}

const createNpdBtn = ()=>{
    let ele = document.getElementById('npdContainer')
    if(ele) return ele

    const container = document.createElement('div')
    container.classList.add('hide')
    container.id = 'npdContainer'

    const btn =  document.createElement('button')
    btn.classList.add('npdBtn')
    btn.classList.add('animation')

    const img =  document.createElement('img')
    img.classList.add('npdIcon')
    img.src = 'https://img.icons8.com/fluency/96/null/notepad.png'

    const span =  document.createElement('span')
    span.innerText = 'Save it!'


    btn.appendChild(img)
    btn.appendChild(span)
    container.appendChild(btn)

    document.querySelector('body').prepend(container)

    return container
}
 
 if (document.readyState !== 'loading') {
    console.log('DOM is already ready');
    InitScript();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        console.log('DOM was not ready');
        InitScript();
    });
}
 
 
 

async function InitScript(){
    console.log('script loaded!')

    const DOMnodes = getNodes()
    // const DOMnodes = getNodes() as HTMLParagraphElement[];
    console.log('DOMnodes',DOMnodes);

    let isIconVisible = false
    const npdNode = createNpdBtn();

    const showIcon = ()=>{
    // npdNode.classList.remove('hide')
    npdNode.classList.add('show')
    }

    const removeIcon = ()=>{
    npdNode.classList.remove('show')
    // npdNode.classList.add('hide')
    }
    
    function getPosition(element) {
        var clientRect = element.getBoundingClientRect();
        return {left: clientRect.left + document.body.scrollLeft,
                top: clientRect.top + document.body.scrollTop};
    }

    const moveIconToNode =(node)=>{
    const pos = getPosition(node)
    console.log(pos)
        npdNode.style.top = pos.top + 'px'
        npdNode.offsetLeft= pos.left + 'px';
    }

    


    let timeout = 0;
    DOMnodes.forEach(node =>{
        node.addEventListener('mouseenter', (event)=>{
            moveIconToNode(node)
            showIcon()
            console.log("onenter")
        })

        node.addEventListener('mouseleave', (event)=>{
        clearTimeout(timeout)
        timeout = setTimeout(() => removeIcon(), 2000) 
        console.log('onleave')
        })
    })
}