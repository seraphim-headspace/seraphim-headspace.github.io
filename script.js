document.addEventListener("DOMContentLoaded", function () {
  // Get references to the buttons and other elements
  const peopleButton = document.getElementById("peopleButton");
  const homeButton = document.getElementById("homeButton");
  const structButton = document.getElementById("structButton");
  const historyButton = document.getElementById("historyButton");
  const infoButton = document.getElementById("infoButton");

  const people = document.getElementById("people");
  const structure = document.getElementById("structure");
  const history = document.getElementById("history");
  const info = document.getElementById("info");
  
  const htmlContent = document.getElementById("htmlContent");
  const contentBG = document.getElementById("contentBG");
  const content = document.getElementById("content");


  
  // Store the original content of contentBG
  const originalContentBG = contentBG.innerHTML;
  const originalhtmlContent = htmlContent.innerHTML;

  // Function to reset to the default state
  function resetToDefaultState() {
    content.style.gridTemplateRows = "";
    htmlContent.innerHTML = originalhtmlContent;
    htmlContent.innerHTML = originalhtmlContent; // Clear the htmlContent

    // Restore the original content of contentBG
    contentBG.innerHTML = originalContentBG;
  }

  homeButton.addEventListener("click", function (event) {
    event.preventDefault();
    contentBG.style.overflow = "auto";
    resetToDefaultState();
  });

  peopleButton.addEventListener("click", function (event) {
    event.preventDefault();
  
    const contentToCopy = people.innerHTML;
  
    htmlContent.innerHTML = contentToCopy;
  
    const linkParagraph = peopleButton.querySelector("a > p");
    if (linkParagraph) {
      const paragraphText = linkParagraph.textContent;
      contentBG.style.overflow = "hidden";
      contentBG.innerHTML = `<h1 class="contH1">${paragraphText}</h1>`;
      content.style.gridTemplateRows = 'calc(2em + 60px) auto';
    }
  });
  
  // Similar code for other buttons
  structButton.addEventListener("click", function (event) {
    event.preventDefault();
  
    const contentToCopy = structure.innerHTML;
  
    htmlContent.innerHTML = contentToCopy;
  
    const linkParagraph = structButton.querySelector("a > p");
    if (linkParagraph) {
      const paragraphText = linkParagraph.textContent;
      contentBG.style.overflow = "hidden";
      contentBG.innerHTML = `<h1 class="contH1">${paragraphText}</h1>`;
      content.style.gridTemplateRows = 'calc(2em + 60px) auto';
    }
  });
  
  historyButton.addEventListener("click", function (event) {
    event.preventDefault();
  
    const contentToCopy = history.innerHTML;
  
    htmlContent.innerHTML = contentToCopy;
  
    const linkParagraph = historyButton.querySelector("a > p");
    if (linkParagraph) {
      const paragraphText = linkParagraph.textContent;
      contentBG.style.overflow = "hidden";
      contentBG.innerHTML = `<h1 class="contH1">${paragraphText}</h1><br>
      <a id="Headspace">Headspace</a> &#183 <a id="System">System</a>`;
      content.style.gridTemplateRows = 'calc(3em + 84px) auto';
    }
  });
  
  infoButton.addEventListener("click", function (event) {
    event.preventDefault();
  
    const contentToCopy = info.innerHTML;
  
    htmlContent.innerHTML = contentToCopy;
  
    const linkParagraph = infoButton.querySelector("a > p");
    if (linkParagraph) {
      const paragraphText = linkParagraph.textContent;
      contentBG.style.overflow = "hidden";
      contentBG.innerHTML = `<h1 class="contH1">${paragraphText}</h1>`;
      content.style.gridTemplateRows = 'calc(2em + 60px) auto';
    }
  });
  
  });
