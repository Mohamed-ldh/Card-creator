
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
    let v=document.getElementById('name');
    if(v.value.length == 0){
        v.style.border = "4px solid red";
        v.style.color='red';
        return true;
    }
    else{
        v.style.border = "4px solid green";
        v.style.color='green';
        return false;
    }
}


function realTimeVerifImg(){
    let v=document.getElementById('image');
    if(v.value.length == 0){
        v.style.border = "4px solid red";
        v.style.color='red';
        return true;
    }
    else{
        v.style.border = "4px solid green";
        v.style.color='green';
        return false;
    }
}
