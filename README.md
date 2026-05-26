# Picture in Picture

A simple web application that captures your screen and displays it in Picture-in-Picture mode, allowing you to watch your screen recording in a floating window while working on other tasks.

## Features

- 🎬 **Screen Capture**: Capture any active screen or application using the Screen Capture API
- 📺 **Picture-in-Picture Mode**: View your screen recording in a resizable, floating window
- 🎨 **Clean UI**: Minimalist design with a stylish button interface
- ⚡ **Lightweight**: No external dependencies, pure vanilla JavaScript
- 🎯 **Easy to Use**: One-click start to begin screen sharing

## How to Use

1. Open `index.html` in your web browser
2. Click the **START** button
3. Select the screen or application window you want to capture
4. The screen will start playing in Picture-in-Picture mode
5. You can resize, move, and control the floating video window using your browser's built-in controls

## Browser Compatibility

This application requires browser support for:

- **Screen Capture API** (`getDisplayMedia`)
- **Picture-in-Picture API** (`requestPictureInPicture`)

**Supported Browsers:**

- ✅ Chrome/Chromium 72+
- ✅ Edge 79+
- ✅ Firefox 66+
- ✅ Safari 13+

## Installation

No installation needed! Simply:

1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. Start capturing your screen

## Project Structure

```
picture-in-picture/
├── index.html      # HTML markup and page structure
├── script.js       # Main JavaScript logic
├── style.css       # Styling and layout
├── favicon.png     # Page icon
└── README.md       # This file
```

## Technical Details

### Technologies Used

- **HTML5** - Page structure
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - No frameworks or libraries
- **Screen Capture API** - For capturing display media
- **Picture-in-Picture API** - For floating window functionality

### Key Functions

- `selectMediaStream()` - Prompts user to select a screen and initializes video playback
- Button click handler - Activates Picture-in-Picture mode and manages button state

## Notes

- The application requires user permission to access screen content
- Picture-in-Picture mode must be initiated by user action (button click)
- The screen capture will continue until the user stops the video or closes the Picture-in-Picture window

## License

Feel free to use and modify this project as needed.
