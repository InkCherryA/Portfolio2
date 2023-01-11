const layerImage = {
    1:'https://i.ibb.co/wBrp9kR/layer1.png',
    2:'https://i.ibb.co/bR1FzGx/layer2.png',
    3:'https://i.ibb.co/tsZr5gp/layer3.png',
    4:'https://i.ibb.co/ZBZ5SkY/layer4.png',
    5:'https://i.ibb.co/NT2dx2Y/layer5.png',
    6:'https://i.ibb.co/nbzZHzh/layer6.png',
    7:'https://i.ibb.co/f2vvLWQ/layer7.png',
    8:'https://i.ibb.co/cQSP0Jc/layer8.png',
    9:'https://i.ibb.co/ckCG58g/layer9.png',
    10:'https://i.ibb.co/tsVxmcF/layer10.png',
    11:'https://i.ibb.co/CJ8cf6Q/layer11.png',
    12:'https://i.ibb.co/q1dn6Tv/layer12.png',
   }
   
   
   function checkScroll() {
     const y = window.scrollY;
     const scrollPixels = Math.min(Math.floor(y/100) + 1, 12);
     const imageToUse = layerImage[scrollPixels];
     // Change the background image
     $('.imageBox').css('background-image', `url('${imageToUse}')`);
   }
   $(document).ready(()=>{
     $(window).scroll(()=>{
       checkScroll();
     })
   })