window.addEventListener('load', function() {
    // Hide the loading screen
    var loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = 0;
  
    // Fade in the main screen
    var mainScreen = document.getElementById('main-screen');
    mainScreen.style.opacity = 1;
    mainScreen.classList.remove('hidden');
  
    // Remove the loading screen from the DOM after the fade-out animation
    setTimeout(function() {
      loadingScreen.parentNode.removeChild(loadingScreen);
    }, 1000); // Adjust the delay as needed
  });
  