// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { showReferrer } from './commands/showReferrer';


interface RemoteTagTreeItem {
	readonly fullTag: string;
}

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(vscode.commands.registerCommand('annaPrototype.helloWorld',
		async (remoteTag: RemoteTagTreeItem) => {
			const result = await showReferrer(remoteTag);
			console.log( 'extension output:' + result);
		}
	));
}

// export function activate(context: vscode.ExtensionContext) {
// 	//let NEXT_TERM_ID = 1; //number the term var

// 	//tell me extension was activated in console logs
// 	console.log('Congratulations, your extension "annaPrototype" is now active!');
//     // Register the command
//     const disposable = vscode.commands.registerCommand('annaPrototype.helloWorld', async (arg1 : unknown) => { //arg1 will have the treeItem and we can access it here arg1.fullTag
//         // empty string for the content of the new text document
//         const content = '';
//         // Create a new untitled text document with the specified content, then..
//         vscode.workspace.openTextDocument({ content }).then(doc => {
//             // Show the newly created document in the editor
//             vscode.window.showTextDocument(doc);
//         });
// 		const result = await showReferrer();
// 		console.log( 'extension output:' + result);

//     });

//     // Add the command to the context
//     context.subscriptions.push(disposable);
// }

