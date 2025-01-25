const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const response = document.querySelector("p");

btn1.addEventListener("click", () => {
  // Code à exécuter lorsque btn1 est cliqué
//   Console.log( "click sur le bouton") ;
  });

  questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle('question-click')
    });

    btn1.addEventListener("click", () => {
      btn1.style.background = 'green';
      response.style.background = 'green';
      response.classList.add('show-response');
      });

      btn2.addEventListener("click", () => {
        btn2.style.background = 'red';
        response.style.background = 'red';
        response.classList.add('show-response');
        });

        //--------mousemove------
const mousemove = document.querySelector('.mousemove');
        window.addEventListener('mousemove',
            (e)=> {

                // console.log(e.pageX);
                
                mousemove.style.left = e.pageX + "px";
                mousemove.style.top = e.pageY + "px";
            });

    //----mousedown------

            window.addEventListener('mousedown',
                ()=>{
                    mousemove.style.transform = "scale(2) translate(-25%,-25%)";
                })

    //---mouseup---

    window.addEventListener('mouseup',
        ()=>{
            mousemove.style.transform = "scale(1)translate(-50%,-50%)";
        });

        //---mouseenter---

        questionContainer.addEventListener(
            "mouseenter", () => {
                questionContainer.style.background = "prink";
            });

            //---mouseout---

            questionContainer.addEventListener(
                "mouseout", () =>{
                    questionContainer.style.background = "rgba(0,0,0,0.3)";
                });
            //---mouseover---

            response.addEventListener(
                "mouseover", () =>{
                    response.style.transform = "rotate(2deg)";
                });




             
// Dépréciation : L'événement keypress est déprécié dans les versions récentes de JavaScript. Il est recommandé d'utiliser keydown ou keyup à la place.

// Propriétés de l'événement :

// event.key : Renvoie la valeur de la touche pressée.
// event.code : Renvoie le code physique de la touche.
// Alternatives
// keydown : Détecte quand une touche est enfoncée.
// keyup : Détecte quand une touche est relâchée.
// Exemple avec keydown

document.addEventListener('keydown', function(event) {
    // console.log('Touche enfoncée :', event.key);
    key.textContent = event.key;
});
const keydownContainer = document.querySelector(".keydown");
// console.log(keydown);
document.addEventListener("keydown",
    (e) =>{
        // console.log(e);
        // console.log(e.key);

        key.textcontent = e.key;
        if(e.key === "j"){
        keydownContainer.style.background = "pink";
        }else if(e.key === "h"){
        keydownContainer.style.background = "teal";
        }else{
        keydownContainer.style.background = "red";
        } 
    });


    const menu = document.querySelector("#menu");
    console.log(menu);

    window.addEventListener("scroll",
        ()=>{
           console.log(window.scrollY);
         if(window.scrollY > 400){
           menu.style.top = 0;
        }else{
             menu.style.top = -50 +"px";
             menu.style.visibility = "visible";

         }
        });
    

        //formulaire

        const inputname = document.querySelector("input[type='text']");
        const inputselect = document.querySelector("select");
        const form = document.querySelector("form");
        const userName = document.querySelector("#userName");
        const langage = document.querySelector("#langage");
        let user;
        let lang;



        inputname.addEventListener("input",(e)=>{
             user = e.target.value;
           userName.textContent = e.target.value;
           userName.innerHTML =` 
           <div style="color: yellow;">

           ${e.target.value}
           </div>
           `;

            // console.log(e.target.value);
            
        })
        inputselect.addEventListener("input",(e)=>{
             lang = e.target.value;
            langage.textContent = e.target.value;


            // console.log(e.target.value);
            
        })
        

        
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            if (cgu.checked){
            // alert(Merci ${user} pour votre selection du langage ${lang})
            console.log(`Merci ${user} pour votre selection du langage ${lang}`);
            }else{
              // alert(Veuilez acceptez les CGU );
              console.log("Veuilez acceptez les CGU");
            }
          });

          //load event

          const image = document.getElementById("image");
          console.log(image);

          function loadResource(){
          console.log("page entierement chargee");
          
          }

          window.addEventListener("load",loadResource);

          image.addEventListener("load",()=>{
            // console.log('image chargee');
            
          })

          //blur event : se produit lorsqu'un element perd le focus


          document.getElementById('inpute').addEventListener('blur', function(){
            this.style.backgroundColor = 'red'
          }
          )
          

          //focus event : se produit lorsqu'un element obtient le focus.

          const inputnom = document.getElementById('nom')

          //ajouter un ecouteur d'evenement 'focus' au au champ de saisie


          inputnom.addEventListener('focus', function(){
            this.classList.add('green')
          })
           //ajouter un ecouteur d'evenement 'blur' au au champ de saisie

          inputnom.addEventListener('blur', function(){
            this.classList.remove('green')
          })

          //forEach

          const boxes = document.querySelectorAll('.box')
        //   console.log(boxes);

          boxes.forEach((box) =>{
            box.addEventListener('click',(e)=>{
                // console.log(e.target);

                e.target.style.transform = 'scale(0.5)'
                
            })
          })


          //1-window

          console.log(window.innerWidth)//largeur de la fenetre;
          console.log(window.innerWidth)//largeur de la fenetre;
          
          