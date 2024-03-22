let gameDiv = document.querySelectorAll("#game-div>div")

let start = true;

let playagain=document.getElementById("play gain")
playagain.addEventListener("click",()=>{
   window.location.reload()
})


gameDiv.forEach((ele)=>{
     count=0
     ele.addEventListener("click",function handleclick(){
       count++
       ele.textContent= start?"x":"o"
       start =!start
       ele.removeEventListener("click",handleclick)

       if(checkWinner()){
         document.querySelector(".winner-div").classList.add("winner-div-display")
         document.querySelector("#winner").innerHTML=checkWinner()
       }

       if(count==gameDiv.length && !checkWinner()){
         document.querySelector(".winner-div").classList.add("winner-div-display")
         document.querySelector("#winner-h3").innerHTML="It is a Draw"
       }
       
    })
})



function scorematrix(){
    let mat =[]
    let x= [] 

    for(let i=0;i<gameDiv.length;i++){
        x.push(gameDiv[i].textContent)
        if((i+1) % gameDiv.length**.5 ==0){
            mat.push(x)
            x=[]
        }
    }
    
    return mat
}







function checkWinner(){

  let scoremat =scorematrix()
  
  let i=0
  while(i<scoremat.length){
    let j=0
    let y = scoremat[i][j]
    let count=0
    while(j<scoremat.length){
      if(scoremat[i][j] == y && scoremat[i][j]!=""){
        count++
        if(count==scoremat.length){
           return y
        }
      }
      j++
    }
    i++
  }


  let j=0
  while(j<scoremat.length){
    let i=0
    let y = scoremat[i][j]
    let count=0
    while(i<scoremat.length){
      if(scoremat[i][j] == y && scoremat[i][j]!=""){
        count++
        if(count==scoremat.length){
            return y
        }
      }
      i++
    }
    j++
  }


 i=0;
 let count=0
 let firstLdiagonal =scoremat[0][0]
 while(i<scoremat.length ){
     if(scoremat[i][i]==firstLdiagonal && scoremat[i][i] !=""){
        count++
        if(count===scoremat.length){
            return firstLdiagonal
        }
     }
     i++
 }

 j=scoremat.length-1
 i=0
 count=0
 let firstRdiagoanl =scoremat[0][scoremat.length-1]
 while(j>=0){
    if(scoremat[i][j]==firstRdiagoanl && scoremat[i][j] !==""){
        count++
        if(count==scoremat.length){
            return firstRdiagoanl
        }
    }
    i++
    j--
 }
  


}

