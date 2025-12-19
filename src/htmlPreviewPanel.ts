import * as vscode from 'vscode';

/**
 * Manages the HTML preview webview panel
 */
export class HtmlPreviewPanel implements vscode.Disposable {
    private _panel: vscode.WebviewPanel | undefined;
    private _disposables: vscode.Disposable[] = [];
    private _onDisposeEmitter = new vscode.EventEmitter<void>();
    
    public readonly onDidDispose = this._onDisposeEmitter.event;
    
    constructor(
        private _extensionUri: vscode.Uri,
        private _htmlContent: string,
        private _column: vscode.ViewColumn = vscode.ViewColumn.Beside
    ) {
        this._createPanel();
    }
    
    private _createPanel(): void {
        this._panel = vscode.window.createWebviewPanel(
            'htmlPreview',
            'HTML Preview',
            this._column,
            {
                enableScripts: false,
                retainContextWhenHidden: true,
                localResourceRoots: [this._extensionUri]
            }
        );
        
        this._panel.webview.html = this._getHtmlForWebview();
        
        // Handle panel disposal
        this._panel.onDidDispose(
            () => {
                this.dispose();
            },
            undefined,
            this._disposables
        );
    }
    
    public updateContent(htmlContent: string): void {
        this._htmlContent = htmlContent;
        if (this._panel) {
            this._panel.webview.html = this._getHtmlForWebview();
        }
    }
    
    public reveal(column: vscode.ViewColumn): void {
        if (this._panel) {
            this._panel.reveal(column);
        }
    }
    
    private _getHtmlForWebview(): string {
        // Generate the HTML document for the webview with the user's HTML content embedded
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Preview</title>
    <style>
        body {
            font-family: var(--vscode-font-family);
            font-size: var(--vscode-font-size);
            margin: 0;
            padding: 10px;
            background-color: #ffffff;
            color: #000000;
        }
        
        .preview-container {
            max-width: 100%;
            overflow: auto;
        }
    </style>
</head>
<body>
    <div class="preview-container">
        ${this._htmlContent}
    </div>
</body>
</html>`;
    }
    
    public dispose(): void {
        this._onDisposeEmitter.fire();
        this._onDisposeEmitter.dispose();
        
        if (this._panel) {
            this._panel.dispose();
            this._panel = undefined;
        }
        
        this._disposables.forEach(d => d.dispose());
        this._disposables = [];
    }
}
