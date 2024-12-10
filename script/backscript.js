console.log("hi")
  // Get the link element by its ID
  var goBackLink = document.getElementById('goBackLink');

  // Add a click event listener to the link
  goBackLink.addEventListener('click', function (event) {
      // Prevent the default link behavior (prevent navigation to "#")
      event.preventDefault();

      // Check if the referrer is available
      if (document.referrer) {
          // Navigate to the previous page
          window.location.href = document.referrer;
      } else {
          // If no referrer is available, you can handle this accordingly
          console.log('No referrer available');
      }
  });