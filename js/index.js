

function handleNavigationClick(event) {
    event.preventDefault();
    
    const linkText = event.target.textContent;
    console.log("Clicked on:", linkText);
    
  }
  
  
  const navigationLinks = document.querySelectorAll("nav ul li a");
  navigationLinks.forEach(link => {
    link.addEventListener("click", handleNavigationClick);
  });
  