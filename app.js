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
    name.textContent = object.name

    let innerDiv = document.createElement('div')
    innerDiv.className = 'yanyana'

    let details = document.createElement('details')

    let summary = document.createElement('summary')
    summary.textContent = "Konular"

    for (topic of object.topics) {
        let li = document.createElement('li')
        li.textContent = topic
        li.style.fontWeight = 200
        details.appendChild(li)
    }



    let state = document.createElement('p')
    state.textContent = object.state

    if (object.state == "DONE") {
        mainDiv.style.backgroundColor = '#66cd00'
    }
    if (object.state == "ONGOING") {
        mainDiv.style.backgroundColor = '#eeee00'
    }
    if (object.state == "SOON") {
        mainDiv.style.backgroundColor = '#cd2626'
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
    zaman.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    spans[0].style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
}
// her 1 saniyede tarihSaat fonksiyonunu yeniden ??al????t??r
setInterval(tarihSaat, 1000);






const connects=[
    {
        url:"https://github.com/mrtSahin",
        img:"images/gitHub.jpg"
    },
    {
        url:"https://www.linkedin.com/in/murat-%C5%9Fahin-0a04ab17b/",
        img:"images/linkedIn.jpg"
    },
    {
        url:"https://www.instagram.com/mihendisoluyorumben/",
        img:"images/instagram.jpg"
    }
]


let othersDiv = document.createElement('div')
othersDiv.className = 'others'

let personName = document.createElement('h1')
personName.style="margin: 5px;align-items: center; display: flex; justify-content: center;"
personName.innerHTML='Murat ??ahin'

let othersConnectDiv=document.createElement('div')
othersConnectDiv.style="margin:0px auto ;display:flex; align-items: center;justify-content: center;"

for(const connect of connects){
    let a = document.createElement('a')
    a.href=connect.url
    a.target="_blank"

    let img= document.createElement('img')
    img.src=connect.img

    a.appendChild(img)
    othersConnectDiv.appendChild(a)
}

othersDiv.appendChild(personName)
othersDiv.appendChild(othersConnectDiv)

let p=document.createElement('p')
p.innerHTML=`Ben bir Web Geli??tiricisiyim. Sivas/T??rkiye de ailemle birlikte ya????yorum. 
Java, Python hakk??nda orta seviyede; C++, Matlab, Kotlin, C# hakk??nda ba??lang???? seviyesinde bilgiye sahibim. 
Python ??zerinde OpenCV k??t??phanesiyle ilgili ??al????malar??m mevcut.  ??u an HTML, CSS ve JS ??zerine ??al??????yorum. 
Planlar??m aras??nda JS in pop??ler k??t??phanelerinden React' ?? ????renmek var ve kariyerimi de bu y??nde ilerletmek istiyorum.`;

let center=document.createElement('center')
center.appendChild(p)

othersDiv.appendChild(center)

const topics=[
    {
        title:"Ba??l??klar",
        list:['???? Computer Engineer','???? Web Developer']
    },
    {
        title:'Yetenekler',
        list:['?????? Java','?????? Python','?????? Js']
    },
    {
        title:'E??itim',
        list:['???? SC?? Bilgisayar M??hendisli??i']
    }
]


let othersTopicsDiv = document.createElement('div')
othersTopicsDiv.style="display: flex; justify-content: space-between; margin: 25px;"


for(const topic of topics){
    let topicDiv = document.createElement('div')
    let topicSummary=document.createElement('summary')
    topicSummary.style="font-size: 20px;"
    topicSummary.textContent=topic.title
    topicDiv.appendChild(topicSummary)
    for(const list of topic.list){
        let li=document.createElement('li')
        li.textContent=list
        topicDiv.appendChild(li)
    }
    othersTopicsDiv.appendChild(topicDiv)
}


othersDiv.appendChild(othersTopicsDiv)
document.body.appendChild(othersDiv)

