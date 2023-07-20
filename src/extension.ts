// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let NEXT_TERM_ID = 1;

	//tell me extension was activated in console logs
	console.log('Congratulations, your extension "annaPrototype" is now active!');
    // Register the command
    const disposable = vscode.commands.registerCommand('annaPrototype.helloWorld', () => {
        // empty string for the content of the new text document
        const content = '';
        // Create a new untitled text document with the specified content
        vscode.workspace.openTextDocument({ content }).then(doc => {
            // Show the newly created document in the editor
            vscode.window.showTextDocument(doc);
        });
    });

    // Add the command to the context
    context.subscriptions.push(disposable);

	//this creates a terminal and names it Ext Terminal #1... then shows a info message based on success
	context.subscriptions.push(vscode.commands.registerCommand('terminalTest.createTerminal', () => {
		try {
			const terminal = vscode.window.createTerminal(`Ext Terminal #${NEXT_TERM_ID++}`);
			terminal.sendText("echo 'Sent text immediately after creating'"); //this puts in a command			
			vscode.window.showInformationMessage('Hello World 2!');
		} catch (error) {
			console.error('Failed to create terminal:', error);
			vscode.window.showErrorMessage('Failed to create terminal. See console for details.');
		}
	}));
	//this will show the terminals currently running and if not running it'll say no terminals available
	context.subscriptions.push(vscode.commands.registerCommand('terminalTest.show', () => {
		if (ensureTerminalExists()) {
			selectTerminal().then(terminal => {
				if (terminal) {
					terminal.show();
				}
			});
		}
	}));
}

export function deactivate() {
    // Clean up resources when the extension is deactivated
}

//this function makes sure terminals exist, called in showTerminal function
function ensureTerminalExists(): boolean {
	if ((<any>vscode.window).terminals.length === 0) {
		vscode.window.showErrorMessage('No active terminals');
		return false;
	}
	return true;
}
//when a terminal exists it'll show them as a option to show in the command pallette.
function selectTerminal(): Thenable<vscode.Terminal | undefined> {
	interface TerminalQuickPickItem extends vscode.QuickPickItem {
		terminal: vscode.Terminal;
	}
	const terminals = <vscode.Terminal[]>(<any>vscode.window).terminals;
	const items: TerminalQuickPickItem[] = terminals.map(t => {
		return {
			label: `name: ${t.name}`,
			terminal: t
		};
	});
	return vscode.window.showQuickPick(items).then(item => {
		return item ? item.terminal : undefined;
	});
}