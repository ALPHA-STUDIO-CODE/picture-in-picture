const videoElement = document.querySelector("video");
const button = document.querySelector("#button");

// Prompt the user to select a media stream
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.play();
  } catch (error) {
    console.error("Failed to get display media:", error);
  }
}

button.addEventListener("click", async () => {
  try {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
  } catch (error) {
    console.error("Failed to enter Picture-in-Picture mode:", error);
  } finally {
    button.disabled = false;
  }
});

// Initialize on load
selectMediaStream();
