const objects = [
    {
        name: "Java",
        state: "DONE",
        topics: ["ES6", "Promise", "Functions", "DOM"]
    },
    {
        name: "Python",
        state: "DONE",
        topics: ["OpenCV", "Async", "Decorators"]
    },
    {
        name: "JavaScript",
        state: "ONGOING",
        topics: ["Encapsulation", "OOP", "Inheritance", "Classes", "Lombok", "SpringBoot"]
    },
    {
        name: "React",
        state: "SOON",
        topics: ["Hooks", "Component", "Router", "Fetching"]
    },

]


for (const object of objects) {
    
    let mainDiv = document.createElement('div')
    mainDiv.className = 'mainDiv'
    

    let name = document.createElement('p')
    name.textContent=object.name

    let innerDiv = document.createElement('div')
    innerDiv.className='yanyana'

    let details = document.createElement('details')
    
    let summary = document.createElement('summary')
    summary.textContent="Konular"

    for(topic of object.topics){
        let li = document.createElement('li')
        li.textContent=topic
        li.style.fontWeight=200
        details.appendChild(li)
    }

    
    
    let state = document.createElement('p')
    state.textContent = object.state

    if(object.state=="DONE"){
        mainDiv.style.backgroundColor='#66cd00'
    }
    if(object.state=="ONGOING"){
        mainDiv.style.backgroundColor='#eeee00'
    }
    if(object.state=="SOON"){
        mainDiv.style.backgroundColor='#cd2626'
    }

    details.appendChild(summary)
    innerDiv.appendChild(details)
    mainDiv.appendChild(name)
    mainDiv.appendChild(innerDiv)
    mainDiv.appendChild(state)

    
    document.body.appendChild(mainDiv)
}


let spans = document.getElementsByTagName('span')
function tarihSaat() {
    let date = new Date().toLocaleString('tr-TR');
    let zaman = document.getElementById("zaman")
    zaman.innerHTML = date;
    zaman.style.backgroundColor='#'+Math.floor(Math.random()*16777215).toString(16);
    spans[0].style.color='#'+Math.floor(Math.random()*16777215).toString(16);
}
// her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(tarihSaat, 1000);

