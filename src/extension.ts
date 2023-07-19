// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	//tell me extension was activated in console logs
	console.log('Congratulations, your extension "annaPrototype" is now active!');
    // Register the command
    const disposable = vscode.commands.registerCommand('annaPrototype.helloWorld', () => {
        // Create an empty string for the content of the new text document
        const content = '';

        // Create a new untitled text document with the specified content
        vscode.workspace.openTextDocument({ content }).then(doc => {
            // Show the newly created document in the editor
            vscode.window.showTextDocument(doc);
        });
    });

    // Add the command to the context
    context.subscriptions.push(disposable);
}

export function deactivate() {
    // Clean up resources when the extension is deactivated
}
