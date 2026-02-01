document.addEventListener("DOMContentLoaded", () => {

  /* FLOWERS */
  const flowers = ["🌸","💮"];
  setInterval(()=>{
    const f=document.createElement("div");
    f.className="falling-flower";
    f.textContent=flowers[Math.floor(Math.random()*flowers.length)];
    f.style.left=Math.random()*100+"vw";
    f.style.fontSize=Math.random()*20+20+"px";
    f.style.animationDuration=Math.random()*5+6+"s";
    document.body.appendChild(f);
    setTimeout(()=>f.remove(),10000);
  },100);

  /* PAGE 1 */
  const yes=document.getElementById("yes-btn");
  const no=document.getElementById("no-btn");

  if(yes && no){
    let s=1;
    yes.onclick=()=>{
      s+=.2;
      yes.style.transform=`scale(${s})`;
      setTimeout(()=>location.href="love.html",400);
    };
    no.onmouseenter=()=>{
      no.style.left=Math.random()*(innerWidth-no.offsetWidth)+"px";
      no.style.top=Math.random()*(innerHeight-no.offsetHeight)+"px";
    };
  }

  /* HEART POPUP - Only on love.html page */
  const popup=document.getElementById("heartPopup");
  const loveBtn=document.getElementById("love-btn");
  
  // Make absolutely sure popup is hidden on page load
  if(popup){
    popup.classList.add("hidden");
  }
  
  if(popup && loveBtn){
    // Show popup ONLY when button is clicked
    loveBtn.onclick=(e)=>{
      e.preventDefault();
      e.stopPropagation();
      popup.classList.remove("hidden");
      loveBtn.style.transform="scale(1.1)";
      setTimeout(()=>loveBtn.style.transform="scale(1)",200);
    };
    
    // Close popup when clicking outside (on the backdrop)
    popup.onclick=(e)=>{
      if(e.target===popup){
        popup.classList.add("hidden");
      }
    };
  }
});
