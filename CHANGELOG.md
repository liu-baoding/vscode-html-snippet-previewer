# Change Log

All notable changes to the "HTML Snippet Previewer" extension will be documented in this file.

## [1.0.0] - 2025-12-19

### Initial Release

#### Features
- Preview HTML code snippets from any file type
- Multiple ways to trigger preview:
  - Command palette
  - Keyboard shortcuts (Ctrl+Shift+H, Ctrl+Shift+Alt+H)
  - Right-click context menu
- Real-time preview updates when selection changes
- Support for inline CSS and JavaScript
- Error handling for invalid HTML
- Responsive preview window with resize capability
- Open preview in external browser
- Configuration options for auto-refresh and preview position

#### Technical Details
- Built with TypeScript
- Uses VS Code Webview API for preview functionality
- Compatible with VS Code v1.60.0 and above
- Includes comprehensive test suite
- Example files for testing with various file types