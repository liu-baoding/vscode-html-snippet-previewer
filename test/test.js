// Simple test file for HTML Snippet Previewer

// Test 1: Basic HTML fragment
const basicHtml = `
<div style="border: 1px solid #ccc; padding: 10px;">
    <h3>Basic HTML Fragment</h3>
    <p>This is a simple HTML fragment with inline styles.</p>
    <button style="background-color: #4CAF50; color: white;">Click Me</button>
</div>
`;

// Test 2: Complete HTML document
const completeHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Complete Document</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Complete HTML Document</h1>
        <p>This is a complete HTML document with styles.</p>
        <button onclick="alert('Hello!')">Interactive Button</button>
    </div>
</body>
</html>
`;

// Test 3: HTML with JavaScript
const htmlWithJs = `
<div id="test-div">
    <h3>HTML with JavaScript</h3>
    <p>Current time: <span id="time">Loading...</span></p>
    <button onclick="updateTime()">Update Time</button>
</div>
<script>
    function updateTime() {
        document.getElementById('time').textContent = new Date().toLocaleTimeString();
    }
    updateTime();
</script>
`;

// Test 4: HTML form
const htmlForm = `
<form style="padding: 15px; border: 1px solid #ddd; border-radius: 5px;">
    <h3>Sample Form</h3>
    <div style="margin-bottom: 10px;">
        <label>Name:</label>
        <input type="text" name="name" style="width: 100%; padding: 5px;">
    </div>
    <div style="margin-bottom: 10px;">
        <label>Email:</label>
        <input type="email" name="email" style="width: 100%; padding: 5px;">
    </div>
    <button type="submit" style="background-color: #4CAF50; color: white;">Submit</button>
</form>
`;

// Test 5: HTML table
const htmlTable = `
<table style="width: 100%; border-collapse: collapse;">
    <thead>
        <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #ddd; padding: 8px;">Name</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Age</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Country</th>
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
`;

console.log('Test HTML snippets loaded. Select any of the variables above and use the preview command.');