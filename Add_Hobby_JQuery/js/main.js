const root = $("#root");
const ul = root.append("<ul></ul>");

function addHobby() {   

    const item = $("#hobby").val();
    $("#hobby").val("");
     ul.append("<li>"+item+"</li>");

}

