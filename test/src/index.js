"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const mocha_1 = require("mocha");
const vscode = require("vscode");
suite('Extension Test Suite', () => {
    let extension;
    (0, mocha_1.before)(async () => {
        // Get the extension
        extension = vscode.extensions.getExtension('html-snippet-previewer');
        // Wait for the extension to activate
        if (extension && !extension.isActive) {
            await extension.activate();
        }
    });
    (0, mocha_1.after)(() => {
        // Clean up after tests
    });
    test('Extension should be present', () => {
        assert.ok(extension);
    });
    test('Extension should activate', async () => {
        if (extension && !extension.isActive) {
            await extension.activate();
        }
        assert.ok(extension?.isActive);
    });
    test('Commands should be registered', async () => {
        const commands = await vscode.commands.getCommands();
        assert.ok(commands.includes('html-snippet-previewer.preview'));
        assert.ok(commands.includes('html-snippet-previewer.previewToSide'));
    });
    test('Configuration should be available', () => {
        const config = vscode.workspace.getConfiguration('htmlSnippetViewer');
        assert.ok(config.has('enableAutoRefresh'));
        assert.ok(config.has('previewPosition'));
    });
    test('Preview command should handle no selection', async () => {
        // Create a new untitled document
        const document = await vscode.workspace.openTextDocument({ content: '' });
        await vscode.window.showTextDocument(document);
        // Execute the preview command without any selection
        await vscode.commands.executeCommand('html-snippet-previewer.preview');
        // The command should show a warning message
        // Note: We can't easily test the message itself in this environment
        assert.ok(true); // If we get here, the command didn't crash
    });
    test('Preview command should handle non-HTML selection', async () => {
        // Create a new untitled document with non-HTML content
        const document = await vscode.workspace.openTextDocument({ content: 'This is just plain text without any HTML tags.' });
        const editor = await vscode.window.showTextDocument(document);
        // Select all the text
        editor.selection = new vscode.Selection(0, 0, 0, document.lineAt(0).text.length);
        // Execute the preview command
        await vscode.commands.executeCommand('html-snippet-previewer.preview');
        // The command should show a warning message
        assert.ok(true); // If we get here, the command didn't crash
    });
});
//# sourceMappingURL=index.js.map