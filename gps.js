
function wolf1() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var img = document.getElementById("img");
    var fakt = document.getElementById("fakt");
    var show = document.getElementById("show");
    var wolf = document.getElementById("bas_2");
    var par = document.getElementById("par");
    var voise5 = new Audio('D.mp3');

    if(username == 'mhmodmaamri' && password == '123') {
        img.style.display="block";
        wolf.style.display="none";
        show.style.display="block";



        setTimeout(function() {
                var voise6 = new Audio('sound2.m4a');
                    voise6.play();
            }, 5000); // 5000 milliseconds = 5 seconds



        // setTimeout(function() {
        //         window.location = 'http://example.com';
        //     }, 5000); // 5000 milliseconds = 5 seconds

        //     // set target attribute of link to "_parent"
        //     var link = document.createElement("a");
        //     link.setAttribute("href", "http://example.com");
        //     link.setAttribute("target", "_parent");
        //     document.body.appendChild(link);
        //     link.click();



        setTimeout(function() {
            var color5 = document.getElementById("color_5");
            var hide = document.getElementById("hide1");
            var bas_1 = document.getElementById("bas_1");
            var ch = document.getElementById("body");
            var audio1 = new Audio('voise1.m4a');
            var color12 = document.getElementById("c");
            color5.style.color = "#41ff4b";
            hide.style.display = "none";
            ch.style.background = "black";
            ch.style.color = "#00FF00";
            ch.style.fontSize = "13px";
            ch.style.fontFamily = "Source Code Pro";
            color12.style.display = "block";
            bas_1.style.display = "none";
            audio1.play();
            }, 8000); // 5000 milliseconds = 5 seconds
    }else {
        fakt.style.display="block";
        wolf.style.display="none";
        show.style.display="block";
        setTimeout(function() {
            voise5.play();
            par.style.display="block"
            function changeTextColor2() {
        const textElement = document.getElementById("par");
        const currentColor2 = textElement.style.color;
        const newColor2 = currentColor2 === "white" ? "red" : "white";
        textElement.style.color = newColor2;
    }
    
    setInterval(changeTextColor2, 300);
        }, 3000);

    setTimeout(function() {
            window.location = 'https://www.instagram.com/mhmod_635/';
            var link = document.createElement("a");
            link.setAttribute("href", "https://www.instagram.com/mhmod_635/");
            link.setAttribute("target", "_parent");
            document.body.appendChild(link);
            link.click();
            }, 30000); // 5000 milliseconds = 5 seconds
    

        }
    
}
var mhmod = document.getElementById("bas_2");
    function wolfteam5() {
        if(mhmod.style.display!=="block"){
            mhmod.style.display="block";
        }else{
             mhmod.style.display="none";
        }
        
           
        
        
    }




//             function wolf1() {
//   setTimeout(function() {
//     window.location = 'http://example.com';
//     var link = document.createElement("a");
//   link.setAttribute("href", "http://example.com");
//   link.setAttribute("target", "_parent");
//   document.body.appendChild(link);
//   link.click();
//   }, 5000); // 5000 milliseconds = 5 seconds

//   // set target attribute of link to "_parent"
// }