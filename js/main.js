window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
   // showBackToTopOnScroll()
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(sobre)
    activateMenuAtCurrentSection(habilidades)
    activateMenuAtCurrentSection(projetos)
  }




  function activateMenuAtCurrentSection(section){
    const targetLine = scrollY + innerHeight / 2
    
    
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
    
    
    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
    
    
    const sectionBoundaries = 
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
    
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
    
    menuElement.classList.remove('active')
    if(sectionBoundaries){
      menuElement.classList.add('active')
    }
    }



    /*function showBackToTopOnScroll(){
        if(scrollY > 400){
          backToTopButton.classList.add('show')
      }
      else{
        backToTopButton.classList.remove('show')
      }
      }*/