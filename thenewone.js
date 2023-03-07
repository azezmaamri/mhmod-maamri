let count = 100;
let count1 = 92;
let count2 = 042;
    
    function incrementCounter() {
      if (count === 120) {
        count = 100;
      } else {
        count++;
      }

      if (count1 === 95) {
            count1 = 92;
          } else {
            count1++;
          }


          if (count2 === 047) {
            count2 = 042;
          } else {
            count2++;
          }
      
      document.getElementById("count").innerHTML = count;
      document.getElementById("count1").innerHTML = count1;
      document.getElementById("count2").innerHTML = count2;
    }
    setInterval(incrementCounter, 2000);
    // setInterval(incrementCounter, 1000);



    // let count1 = 92;
    
    // function incrementCounter1() {
    //   if (count1 === 95) {
    //     count1 = 92;
    //   } else {
    //     count1++;
    //   }
      
    //   document.getElementById("count1").innerHTML = count1;
    // }
    
    // setInterval(incrementCounter1, 2000);




    function changeColor() {
        const colors = ["aqua", "#05100f"];
        const circle = document.getElementById("circle");
        const currentColor = circle.style.backgroundColor;
        let index = colors.indexOf(currentColor) + 1;
        if (index >= colors.length) {
          index = 0;
        }
        const newColor = colors[index];
        circle.style.backgroundColor = newColor;
      }
      
      setInterval(changeColor, 1000);











          function changeTextColor1() {
            const textElement = document.getElementById("myText");
            const currentColor1 = textElement.style.color;
            const newColor1 = currentColor1 === "lawngreen" ? "red" : "lawngreen";
            textElement.style.color = newColor1;
          }
          
          setInterval(changeTextColor1, 100);


          function changeTextColor2() {
            const textElement = document.getElementById("color_5");
            const currentColor2 = textElement.style.color;
            const newColor2 = currentColor2 === "white" ? "red" : "white";
            textElement.style.color = newColor2;
          }
          
          setInterval(changeTextColor2, 1000);
        


      











      function voise1() {
        var color1 = document.getElementById("color_2");
        var voise1 = new Audio('voise3.m4a');
        if (color1.style.backgroundColor = "none") {
              voise1.play();
        } else {
          b.style.display = "none";
        }
      }

      function voise2() {
        var color1 = document.getElementById("color_2");
        var voise2 = new Audio('voise5.m4a');
        if (color1.style.backgroundColor = "none") {
              voise2.play();
        } else {
          b.style.display = "none";
        }
      }

      function voise3() {
        var color1 = document.getElementById("color_2");
        var voise3 = new Audio('voise6.m4a');
        if (color1.style.backgroundColor = "none") {
            voise3.play();
        } else {
          b.style.display = "none";
        }
      }

      function voise4() {
        var color1 = document.getElementById("color_2");
        var voise4 = new Audio('voise7.m4a');
        if (color1.style.backgroundColor = "none") {
            voise4.play();
        } else {
          b.style.display = "none";
        }
      }


      function voise5() {
        var color1 = document.getElementById("color_2");
        var voise5 = new Audio('sound1.m4a');
        if (color1.style.backgroundColor = "none") {
            voise5.play();
        } else {
          b.style.display = "none";
        }
      }









