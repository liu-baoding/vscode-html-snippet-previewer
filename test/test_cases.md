# HTML Snippet Previewer Test Cases

This file contains various HTML snippets to test the preview functionality.

## 1. Simple HTML Fragment
<div style="border: 1px solid #ccc; padding: 10px; margin: 5px 0;">
    <h3>Simple HTML Fragment</h3>
    <p>This is a simple HTML fragment with inline styles.</p>
    <button style="background-color: #4CAF50; color: white; padding: 8px 12px; border: none; border-radius: 4px;">Click Me</button>
</div>

## 2. Complete HTML Document
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complete HTML Document</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            text-align: center;
        }
        .highlight {
            background-color: yellow;
            padding: 2px 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Complete HTML Document</h1>
        <p>This is a <span class="highlight">complete HTML document</span> with its own styles.</p>
        <div style="margin-top: 20px;">
            <button onclick="alert('Button clicked!')">Interactive Button</button>
        </div>
    </div>
    <script>
        console.log('Document loaded');
        document.addEventListener('DOMContentLoaded', function() {
            console.log('DOM fully loaded');
        });
    </script>
</body>
</html>

## 3. HTML with JavaScript
<div id="js-test">
    <h3>HTML with JavaScript</h3>
    <p>Current time: <span id="current-time">Loading...</span></p>
    <button onclick="updateTime()">Update Time</button>
    <script>
        function updateTime() {
            const now = new Date();
            document.getElementById('current-time').textContent = now.toLocaleTimeString();
        }
        
        // Initialize time on load
        updateTime();
    </script>
</div>

## 4. HTML Form
<form style="border: 1px solid #ddd; padding: 15px; border-radius: 5px;">
    <h3>Sample Form</h3>
    <div style="margin-bottom: 10px;">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" style="width: 100%; padding: 5px;">
    </div>
    <div style="margin-bottom: 10px;">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" style="width: 100%; padding: 5px;">
    </div>
    <div style="margin-bottom: 10px;">
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" style="width: 100%; padding: 5px;"></textarea>
    </div>
    <button type="submit" style="background-color: #4CAF50; color: white; padding: 8px 12px; border: none; border-radius: 4px;">Submit</button>
</form>

## 5. HTML Table
<table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
    <thead>
        <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Name</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Age</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Country</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">John Doe</td>
            <td style="border: 1px solid #ddd; padding: 8px;">35</td>
            <td style="border: 1px solid #ddd; padding: 8px;">USA</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Jane Smith</td>
            <td style="border: 1px solid #ddd; padding: 8px;">28</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Canada</td>
        </tr>
    </tbody>
</table>

## 6. HTML List
<div style="margin: 10px 0;">
    <h3>Sample Lists</h3>
    <h4>Unordered List:</h4>
    <ul style="background-color: #f9f9f9; padding: 10px; border-radius: 4px;">
        <li>First item</li>
        <li>Second item with <strong>bold text</strong></li>
        <li>Third item with <em>italic text</em></li>
        <li>
            Nested list:
            <ul style="margin-top: 5px;">
                <li>Nested item 1</li>
                <li>Nested item 2</li>
            </ul>
        </li>
    </ul>
    
    <h4>Ordered List:</h4>
    <ol style="background-color: #f9f9f9; padding: 10px; border-radius: 4px;">
        <li>First step</li>
        <li>Second step</li>
        <li>Third step</li>
    </ol>
</div>

## 7. HTML with SVG
<div style="margin: 10px 0; text-align: center;">
    <h3>SVG Graphics</h3>
    <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="100" fill="rgb(0,0,255)" stroke-width="1" stroke="rgb(0,0,0)" />
        <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
        <text x="100" y="55" font-family="Verdana" font-size="12" fill="white">SVG</text>
    </svg>
</div>

## 8. HTML with Media
<div style="margin: 10px 0;">
    <h3>Media Elements</h3>
    <video width="320" height="240" controls style="border: 1px solid #ddd;">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <br><br>
    <audio controls style="width: 100%;">
        <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
</div>

## 9. HTML with Canvas
<div style="margin: 10px 0; text-align: center;">
    <h3>Canvas Element</h3>
    <canvas id="myCanvas" width="200" height="100" style="border: 1px solid #000;">
        Your browser does not support the canvas element.
    </canvas>
    <script>
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        
        // Create gradient
        const grd = ctx.createLinearGradient(0, 0, 200, 0);
        grd.addColorStop(0, "red");
        grd.addColorStop(1, "white");
        
        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(10, 10, 180, 80);
    </script>
</div>

## 10. HTML with CSS Animation
<div style="margin: 10px 0;">
    <h3>CSS Animation</h3>
    <style>
        @keyframes colorChange {
            from {background-color: red;}
            to {background-color: blue;}
        }
        
        .animated-box {
            width: 100px;
            height: 100px;
            background-color: red;
            animation-name: colorChange;
            animation-duration: 4s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
        }
    </style>
    <div class="animated-box"></div>
</div>

## Testing Instructions

1. Select each HTML snippet (from the start tag to the end tag)
2. Use the "Preview HTML Snippet" command (Ctrl+Shift+H)
3. Verify that the preview renders correctly
4. Use the "Show Debug Information" command to see diagnostic details
5. Check the Developer Console (Help > Toggle Developer Tools) for debug logs