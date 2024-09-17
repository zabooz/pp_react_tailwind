




export const thinker = () => {
    const randomIndex = Math.floor(Math.random() * thinkWords.length);
    const verb = thinkWords[randomIndex];
    return verb
  };
  
  export const thinkWords = [
    "denken",
    "rechnen",
    "überlegen",
    "analysieren",
    "planen",
    "abstrahieren",
    "interpretieren",
    "kalkulieren",
    "schätzen",
    "kombinieren",
    "spekulieren",
    "ermitteln",
    "nachdenken",
    "ableiten",
    "schlussfolgern",
    "reflektieren",
    "synthesieren",
  ];