
  export const fadeInUp = {
    initial:{
      opacity:0,
      y:60,
    },
    animate:{
      opacity:1,
      y:0,
    },
  };

  
  export const stagger = {
    initial:{},
    animate:{
   transition:{
       staggerChildren:0.1,
   }
    },
  };
  export const routeAnimation = {
    initial:{
        opacity:0
    },
    animate:{
   transition:{
       opacity:1,
       delay:0.1,
       duration:0.1
   }
    },
  };