export default {
  methods: {
    scrollToSection(id) {
      if(id[0] === '#') id = id.slice(1)
      let section = document.querySelector("#" + id);

      let number = 80
      // if(id === 'buy'){
      //   number = 100
      // }else if(id === 'tokenomics'){
      //   number = 110
      // }

      let sectionOffset = section.offsetTop - number

      window.scroll({ 
        top: sectionOffset,
        left: 0, 
        behavior: 'smooth' 
      });
    },
  }
}