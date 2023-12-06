
baseURL = "https://tea-web.onrender.com/";
cafination = false;  
namText = document.getElementById("name");




//tea api 
let names = ['white','yellow','green','oolong', 'pu-erh','black','lavender chamomile','blood orange'];
let teaProperty = ['pairing','taste','color','procession'];
let parsTea;
let x,y,z = 0; 
let teaContainers = document.querySelectorAll(".t1");


const updateTeaInfo = async function () {
    try {
      const response = await fetch(`${baseURL}name/${names[x]}/${teaProperty[y]}`);
      const teaData = await response.text();
       parsTea = teaData.split(':');
       let namContainer = teaContainers[z].querySelector(".name");
        if (namContainer) {
          namContainer.innerText = names[x] + " tea's " + teaProperty[y] + " is " + parsTea[1];
        }

       let tasContainer = teaContainers[z].querySelectorAll(".taste");
       if (tasContainer) {
           tasContainer.innerText = "taste is" + parsTea[1];
       }

       let pairContainer = teaContainers[z].querySelectorAll(".pairing");
       if (pairContainer){
          pairContainer.innerText = parsTea[1];
       }

       let procContainer = teaContainers[z].querySelectorAll(".procession");
       if (procContainer) {
        pairContainer.innerText = parsTea[1];
       }

       
       let colContainer = teaContainers[z].querySelectorAll(".color");
       if (colContainer) {
        colContainer.innerText = parsTea[1];
       }


    } catch (error) {
      console.error(error);
    }
  };

const foodReq = async function (){
  try {
    const response = await fetch(`${baseURL}food`);
    const foodData = await response.json();
    let foodContainer = teaContainers[z].querySelector(".name");
    if (foodContainer){
      foodContainer.innerText = foodData; 
    }

  } catch(error){
    console.log(error);
  }
}




//dropdown click
function handleClick(value) {
//cafe drop down
{
    if (value == 'caf') {
      x = Math.floor(Math.random()*9)
      y = Math.floor(Math.random()*4)
        updateTeaInfo(); 
        console.log(parsTea[1]);
       
    }
{

}
    if (value == 'decaf')
    {
      foodReq();

    }

}
//food drop down
//     {
//         if (value == 'Yes')
//         {
//             console.log("yes");
//             foodReq();
            
//         }
//         if (value == 'No')
//         {
//             console.log("no");
//         }
//     }
// }

}



