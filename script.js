const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");


function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";


    if (h > 12) {
        ampmEl.innerText ="PM";
        h = h-12;
    }
  
   
    h = h<10 ? "0"+h : h;
    s = s<10 ? "0"+s : s;
    m = m<10 ? "0"+m : m;


    hourEl.innerText = h;
    minuteEl.innerText =m;
    secondEl.innerText =s;
    

    setTimeout(()=>{
        updateClock()
    },1000)
}
updateClock()


//responsive

const hourEl1 = document.getElementById("hour1");
const minuteEl1 = document.getElementById("minutes1");
const secondEl1 = document.getElementById("seconds1");
const ampmEl1 = document.getElementById("ampm1");


function updateClocks() {
    let ho = new Date().getHours();
    let mi = new Date().getMinutes();
    let se = new Date().getSeconds();
    let ampm1 = "AM";


    if (ho > 12) {
        ampmEl1.innerText ="PM";
        ho = ho-12;
    }
  
   
    ho = ho<10 ? "0"+ho : ho;
    se = se<10 ? "0"+se : se;
    mi = mi<10 ? "0"+mi : mi;


    hourEl1.innerText = ho;
    minuteEl1.innerText =mi;
    secondEl1.innerText =se;
    

    setTimeout(()=>{
        updateClocks()
    },1000)
}
updateClocks()
