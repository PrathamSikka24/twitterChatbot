// Function to set user profile information
function setUserProfile(profileImageURL, userHandle) {
    const userProfile = document.getElementById('user-profile');
    const userProfileImage = userProfile.querySelector('img');
    const userHandleSpan = userProfile.querySelector('#user-handle');

    userProfileImage.src = profileImageURL;
    userHandleSpan.innerText = userHandle;
}

// Call this function when your page loads or when the user logs in
setUserProfile('user-profile-image.jpg', 'UserHandle123');

require('dotenv').config();
const Twit = require('twit');

const T = new Twit({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_KEY_SECRET,
});

// Example: Get user's DMs
T.get('direct_messages/events/list', { count: 5 }, (err, data, response) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
    // Process and suggest responses based on DMs
  }
});
