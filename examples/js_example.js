// JavaScript Example for HTML Snippet Previewer

// Function to create a dynamic HTML table
function createTable(data) {
    const tableHTML = `
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
            <tr style="background-color: #f2f2f2;">
                <th style="border: 1px solid #ddd; padding: 8px;">ID</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Name</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Email</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Actions</th>
            </tr>
        </thead>
        <tbody>
            ${data.map(item => `
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">${item.id}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${item.name}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${item.email}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">
                    <button onclick="editUser(${item.id})" style="background-color: #4CAF50; color: white; border: none; padding: 5px 10px; margin-right: 5px; cursor: pointer;">Edit</button>
                    <button onclick="deleteUser(${item.id})" style="background-color: #f44336; color: white; border: none; padding: 5px 10px; cursor: pointer;">Delete</button>
                </td>
            </tr>
            `).join('')}
        </tbody>
    </table>
    `;
    
    return tableHTML;
}

// Sample data
const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com" }
];

// Create a complete HTML page with the table
const fullPageHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Management</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            padding: 20px;
        }
        h1 {
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input[type="text"], input[type="email"] {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }
        button {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
        }
        button:hover {
            background-color: #2980b9;
        }
        .notification {
            padding: 15px;
            margin: 10px 0;
            border-radius: 4px;
            display: none;
        }
        .success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>User Management System</h1>
        
        <div id="notification" class="notification"></div>
        
        <div class="form-group">
            <h2>Add New User</h2>
            <form id="userForm">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" required>
                </div>
                <button type="submit">Add User</button>
            </form>
        </div>
        
        <h2>Existing Users</h2>
        ${createTable(users)}
    </div>
    
    <script>
        // Form submission handler
        document.getElementById('userForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Show success notification
            showNotification('User added successfully!', 'success');
            
            // Reset form
            this.reset();
        });
        
        function editUser(id) {
            showNotification('Edit functionality for user ID: ' + id, 'success');
        }
        
        function deleteUser(id) {
            if (confirm('Are you sure you want to delete this user?')) {
                showNotification('User with ID ' + id + ' deleted', 'success');
            }
        }
        
        function showNotification(message, type) {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.className = 'notification ' + type;
            notification.style.display = 'block';
            
            // Hide after 3 seconds
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        }
    </script>
</body>
</html>
`;

// Export the HTML for use in other parts of the application
module.exports = {
    createTable,
    fullPageHTML,
    users
};