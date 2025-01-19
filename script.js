
let dataList = [];
let cardData = {
    name: '',
    image: '',
    color: ''
}

let n=document.getElementById('name');
let img=document.getElementById('image');
let c=document.getElementById('color');
let list=document.getElementById('list');
let al = document.getElementById('alertMessage');

function ajout(){
    if(realTimeVerifName()==true && realTimeVerifImg()==true){
        return 0;
    }
    cardData = {
        name: n.value,
        image: img.value,
        color: c.value,
    }
    dataList.push(cardData);
    n.value='';
    img.value='';
    c.value='#000000';
    updateList();
    
}
function updateList(){
    list.innerHTML='';
    for(let data of dataList){
         
        let element = `
            <div class="col-lg-3">
                <div class="card p-3" style="background-color:${data.color};">
                    <img src=" ${data.image}" alt="" >
                    <h4>${data.name}</h4>
                </div>
            </div>
        `;
        list.innerHTML +=element
    }
}

function realTimeVerifName(){
    let v=document.getElementById('name').value;
    if(v.length == 0){
        document.getElementById('name').style.border = "4px solid red";
        document.getElementById('name').style.color='red';
        return true;
    }
    else{
        document.getElementById('name').style.border = "4px solid green";
        document.getElementById('name').style.color='green';
        return false;
    }
}


function realTimeVerifImg(){
    let v=document.getElementById('image').value;
    if(v.length == 0){
        document.getElementById('image').style.border = "4px solid red";
        document.getElementById('image').style.color='red';
        return true;
    }
    else{
        document.getElementById('image').style.border = "4px solid green";
        document.getElementById('image').style.color='green';
        return false;
    }
}

function realTimeVerif(){
    var v=inp.value;
    if(v.length < 3){
        inp.style.border = "4px solid red";
        inp.style.color='red';
    }
    else{
        inp.style.border = "4px solid green";
        inp.style.color='green';
    }
}