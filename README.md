# HTML Snippet Previewer

A VS Code extension that allows you to preview HTML code snippets from any file type in real-time.

## Features

- Preview HTML code snippets from any file type (Python, JavaScript, Modelica, etc.)
- Multiple ways to trigger preview:
  - Command palette
  - Keyboard shortcuts
  - Right-click context menu
- Real-time preview updates when selection changes
- Support for inline CSS and JavaScript
- Error handling for invalid HTML
- Responsive preview window with resize capability
- Open preview in external browser

## Installation

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "HTML Snippet Previewer"
4. Click Install

## Usage

1. Open any file containing HTML code snippets
2. Select the HTML code you want to preview
3. Use one of the following methods to open the preview:
   - Press `Ctrl+Shift+H` (Windows/Linux) or `Cmd+Shift+H` (Mac)
   - Right-click and select "Preview HTML Snippet" or "Preview HTML Snippet to Side"
   - Open Command Palette (Ctrl+Shift+P) and search for "HTML Snippet Previewer"
4. The HTML preview will open in a new panel showing the rendered HTML

## Settings

You can configure the extension through VS Code settings:

- `htmlSnippetViewer.enableAutoRefresh`: Enable automatic refresh when selection changes (default: true)
- `htmlSnippetViewer.previewPosition`: Default position for the preview panel - "beside" or "active" (default: "beside")

## Keyboard Shortcuts

- `Ctrl+Shift+H`: Preview HTML Snippet
- `Ctrl+Shift+Alt+H`: Preview HTML Snippet to Side

## Examples

The extension comes with example files in the `examples` directory:

- `python_example.py`: Python code with embedded HTML strings
- `model_example.mo`: Modelica file with HTML documentation
- `js_example.js`: JavaScript code with HTML template literals

## Development

This extension is built with TypeScript and follows VS Code extension development best practices.

### Building

1. Clone the repository
2. Install dependencies: `npm install`
3. Compile TypeScript: `npm run compile`
4. Run tests: `npm test`

### Debugging

1. Open the project in VS Code
2. Press F5 to launch a new VS Code instance with the extension loaded
3. Test the extension in the new instance

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License

## Issues

If you encounter any issues or have suggestions, please report them on the GitHub repository.