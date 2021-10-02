const root=document.getElementById("root");
const ol=document.createElement("ul");

function addHobby(){
    const item=document.getElementById("hobby").value;  
    document.getElementById("hobby").value= "";
    const li=document.createElement("li");  
    li.innerHTML=item;
    ol.appendChild(li);
    root.appendChild(ol);
    
}

   


