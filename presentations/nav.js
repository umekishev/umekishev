(function(){
  var pages=["01.html","02.html","03.html","04.html","05.html","06.html","07.html","08.html","09.html","10.html"];
  var idx=typeof window.COD_PAGE==="number"?window.COD_PAGE:0;
  function go(d){
    var n=Math.max(0,Math.min(pages.length-1,idx+d));
    if(n!==idx) location.href=pages[n];
  }
  document.addEventListener("keydown",function(e){
    if(e.key==="ArrowRight"||e.key===" "||e.key==="PageDown"){e.preventDefault();go(1)}
    if(e.key==="ArrowLeft"||e.key==="PageUp"){e.preventDefault();go(-1)}
    if(e.key.toLowerCase()==="f"){
      e.preventDefault();
      var el=document.documentElement;
      if(!document.fullscreenElement){el.requestFullscreen&&el.requestFullscreen()}
      else{document.exitFullscreen&&document.exitFullscreen()}
    }
    if(e.key==="Home"){location.href=pages[0]}
    if(e.key==="End"){location.href=pages[pages.length-1]}
  });
  var fs=document.getElementById("fsBtn");
  if(fs) fs.onclick=function(){
    var el=document.documentElement;
    if(!document.fullscreenElement){el.requestFullscreen&&el.requestFullscreen()}
    else{document.exitFullscreen&&document.exitFullscreen()}
  };
  var tx=null;
  document.addEventListener("touchstart",function(e){tx=e.touches[0].clientX},{passive:true});
  document.addEventListener("touchend",function(e){
    if(tx==null)return;
    var dx=e.changedTouches[0].clientX-tx;
    if(Math.abs(dx)>60)go(dx<0?1:-1);
    tx=null;
  },{passive:true});
})();
