import * as vscode from 'vscode';
import { HtmlPreviewPanel } from './htmlPreviewPanel';

/**
 * Manages HTML preview panels and handles preview requests
 */
export class HtmlPreviewManager implements vscode.Disposable {
    private _panels: Map<string, HtmlPreviewPanel> = new Map();
    private _disposables: vscode.Disposable[] = [];
    
    constructor(private _context: vscode.ExtensionContext) {
        // Listen for text editor selection changes
        const selectionChangeHandler = vscode.window.onDidChangeTextEditorSelection(
            this._onSelectionChange.bind(this),
            this,
            this._disposables
        );
        
        // Listen for active editor changes
        const activeEditorChangeHandler = vscode.window.onDidChangeActiveTextEditor(
            this._onActiveEditorChange.bind(this),
            this,
            this._disposables
        );
        
        this._disposables.push(selectionChangeHandler, activeEditorChangeHandler);
    }
    
    public showPreview(previewColumn: vscode.ViewColumn = vscode.ViewColumn.Beside): void {
        const editor = vscode.window.activeTextEditor;
        
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }
        
        const selection = editor.selection;
        
        if (selection.isEmpty) {
            vscode.window.showWarningMessage('Please select some HTML code first');
            return;
        }
        
        const selectedText = editor.document.getText(selection);
        
        if (!this._containsHtml(selectedText)) {
            vscode.window.showWarningMessage('Selected text does not contain valid HTML');
            return;
        }
        
        // Create or update preview panel
        const panelKey = `${editor.document.uri.toString()}_${selection.start.toString()}`;
        
        let panel = this._panels.get(panelKey);
        
        if (!panel) {
            panel = new HtmlPreviewPanel(
                this._context.extensionUri,
                selectedText,
                previewColumn
            );
            
            panel.onDidDispose(() => {
                this._panels.delete(panelKey);
            });
            
            this._panels.set(panelKey, panel);
        } else {
            panel.updateContent(selectedText);
            panel.reveal(previewColumn);
        }
    }
    
    private _onSelectionChange(event: vscode.TextEditorSelectionChangeEvent): void {
        const config = vscode.workspace.getConfiguration('htmlSnippetViewer');
        
        if (!config.get('enableAutoRefresh')) {
            return;
        }
        
        const editor = event.textEditor;
        const selection = event.selections[0];
        
        if (selection.isEmpty) {
            return;
        }
        
        const selectedText = editor.document.getText(selection);
        
        if (!this._containsHtml(selectedText)) {
            return;
        }
        
        // Update existing preview if it exists
        const panelKey = `${editor.document.uri.toString()}_${selection.start.toString()}`;
        const panel = this._panels.get(panelKey);
        
        if (panel) {
            panel.updateContent(selectedText);
        }
    }
    
    private _onActiveEditorChange(editor: vscode.TextEditor | undefined): void {
        // Close all preview panels when switching to a different file
        if (!editor) {
            return;
        }
        
        // Check if any panels belong to a different file
        const panelsToClose: string[] = [];
        
        this._panels.forEach((panel, key) => {
            const [fileUri] = key.split('_');
            if (fileUri !== editor.document.uri.toString()) {
                panelsToClose.push(key);
            }
        });
        
        panelsToClose.forEach(key => {
            const panel = this._panels.get(key);
            if (panel) {
                panel.dispose();
                this._panels.delete(key);
            }
        });
    }
    
    /**
     * Check if the text contains valid HTML tags
     */
    private _containsHtml(text: string): boolean {
        const htmlTagRegex = /<\s*([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>(.*?)<\s*\/\s*\1\s*>|<\s*(br|hr|img|input|meta|link|div|span|p|h1|h2|h3|h4|h5|h6|ul|ol|li|table|tr|td|th|thead|tbody|section|article|header|footer|nav|aside|main|form|button|select|option|textarea|label|fieldset|legend|canvas|svg|video|audio|source|track)\b[^>]*\/?>/i;
        return htmlTagRegex.test(text);
    }
    
    public dispose(): void {
        this._panels.forEach(panel => panel.dispose());
        this._panels.clear();
        this._disposables.forEach(d => d.dispose());
    }
}