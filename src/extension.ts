import * as vscode from 'vscode';
import { HtmlPreviewManager } from './htmlPreviewManager';

export function activate(context: vscode.ExtensionContext) {
    const previewManager = new HtmlPreviewManager(context);
    
    // Register preview command (show in current column)
    const previewCommand = vscode.commands.registerCommand('html-snippet-previewer.preview', () => {
        previewManager.showPreview(vscode.ViewColumn.Active);
    });
    
    // Register preview to side command
    const previewToSideCommand = vscode.commands.registerCommand('html-snippet-previewer.previewToSide', () => {
        previewManager.showPreview(vscode.ViewColumn.Beside);
    });
    
    // Register debug command for troubleshooting
    const debugCommand = vscode.commands.registerCommand('html-snippet-previewer.debug', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('No active editor');
            return;
        }
        
        const selection = editor.selection;
        const selectedText = editor.document.getText(selection);
        
        const diagnosticInfo = {
            fileName: editor.document.fileName,
            languageId: editor.document.languageId,
            selection: {
                start: selection.start,
                end: selection.end,
                isEmpty: selection.isEmpty
            },
            selectedTextLength: selectedText.length,
            selectedTextPreview: selectedText.substring(0, 100) + (selectedText.length > 100 ? '...' : ''),
            containsHtml: /<\s*[a-zA-Z][a-zA-Z0-9]*\b[^>]*>/.test(selectedText)
        };
        
        vscode.window.showInformationMessage(
            `Debug info: ${diagnosticInfo.languageId} file, selection: ${diagnosticInfo.selection.isEmpty ? 'empty' : 'has content'}, contains HTML: ${diagnosticInfo.containsHtml}`,
            'Show Details'
        ).then(selection => {
            if (selection === 'Show Details') {
                const channel = vscode.window.createOutputChannel('HTML Snippet Previewer Debug');
                channel.appendLine(JSON.stringify(diagnosticInfo, null, 2));
                channel.appendLine('\nSelected Text:');
                channel.appendLine(selectedText);
                channel.show();
            }
        });
    });
    
    context.subscriptions.push(previewCommand, previewToSideCommand, debugCommand, previewManager);
}

export function deactivate() {}