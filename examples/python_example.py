# Python Example for HTML Snippet Previewer

def generate_html_card(title, content, color="blue"):
    """
    Generate an HTML card with the given title and content.
    
    Args:
        title (str): The title of the card
        content (str): The content of the card
        color (str): The color theme of the card
    
    Returns:
        str: HTML string for the card
    """
    html_card = f"""
    <div style="border: 1px solid #ddd; border-radius: 5px; padding: 15px; margin: 10px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1); background-color: white;">
        <h3 style="color: {color}; margin-top: 0;">{title}</h3>
        <p>{content}</p>
        <button style="background-color: {color}; color: white; border: none; padding: 8px 12px; border-radius: 3px; cursor: pointer;">Click Me</button>
    </div>
    """
    return html_card

# Example usage
if __name__ == "__main__":
    card_html = generate_html_card(
        "Sample Card", 
        "This is a sample card generated from Python code. It demonstrates how HTML can be embedded in Python strings.",
        "green"
    )
    
    # Create a complete HTML page
    full_html = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Python Generated HTML</title>
        <style>
            body {{
                font-family: Arial, sans-serif;
                margin: 20px;
                background-color: #f5f5f5;
            }}
            .container {{
                max-width: 800px;
                margin: 0 auto;
                background-color: white;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }}
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Python Generated HTML Page</h1>
            <p>This page was generated entirely from Python code.</p>
            {card_html}
            <p>Select any of the HTML code blocks above and use the HTML Snippet Previewer extension to preview them.</p>
        </div>
    </body>
    </html>
    """
    
    # Save to file
    with open("python_generated.html", "w") as f:
        f.write(full_html)
    
    print("HTML file generated successfully!")