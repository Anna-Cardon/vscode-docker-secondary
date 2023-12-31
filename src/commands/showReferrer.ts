import { l10n } from 'vscode';
import { TaskCommandRunnerFactory } from '../support/TaskCommandRunnerFactory';
import * as vscode from 'vscode';



//first try
export async function showReferrer(options: any): Promise<void> {

    try {
        const taskCRF = new TaskCommandRunnerFactory({
            taskName: 'oras', // Specify the task name here
            alwaysRunNew: true, // Optional: Specify whether to always run the command as a new task
            focus: true, // Optional: Specify whether to focus on the task's output panel
        });

        // Construct argument based on the options object
        const args = ['discover', options.fullTag] || ['discover', '-h']; //will take the options if present or go to -h

        // Assuming you want to execute a command and log its output,
        // you can use the command runner returned by getCommandRunner.
        // For example, you can use it to execute the 'echo Hello World' command:
        const result = await taskCRF.getCommandRunner()({
            command: 'C:\\Users\\t-annacardon\\bin\\oras\\oras.exe', //TODO: eventually fix 
            args,
        });

        // The 'result' will contain the output of the executed command.
        console.log('showReferrer Command output:', result);
    } catch (error) {
        console.error('Error executing command:', error);
    }
}

//third try
// export async function activate(context: vscode.ExtensionContext) {
//     let api = {
//         showReferrer: async (options: any) => { // Accept an object called 'options' which will be the full tag being sent
//             try {
//                 const taskCRF = new TaskCommandRunnerFactory({
//                     taskName: 'oras', // Specify the task name here
//                     alwaysRunNew: true, // Optional: Specify whether to always run the command as a new task
//                     focus: true, // Optional: Specify whether to focus on the task's output panel
//                 });

//                 // Construct argument based on the options object
//                 const args = ['discover', '-options.args'] || ['discover', '-h']; //will take the options if present or go to -h

//                 // Execute the command and log its output
//                 const result = await taskCRF.getCommandRunner()({
//                     command: 'C:\\Users\\t-annacardon\\bin\\oras\\oras.exe', // TODO: will eventually fix
//                     args,
//                 });
//                 console.log('showReferrer Command output:', result);
//             } catch (error) {
//                 console.error('Error executing command:', error);
//             }
//         }
//     };

//     return api; //return the api so that it can be used in another extension
// }

//second try
// export async function activate(context: vscode.ExtensionContext) {
//     let api = {
//         showReferrer: async () => {
//             try {
//                 const taskCRF = new TaskCommandRunnerFactory({
//                     taskName: 'oras', // Specify the task name here
//                     alwaysRunNew: true, // Optional: Specify whether to always run the command as a new task
//                     focus: true, // Optional: Specify whether to focus on the task's output panel
//                 });

//                 // Assuming you want to execute a command and log its output,
//                 // you can use the command runner returned by getCommandRunner.
//                 // For example, you can use it to execute the 'echo Hello World' command:
//                 const result = await taskCRF.getCommandRunner()({
//                     command: 'C:\\Users\\t-annacardon\\bin\\oras\\oras.exe', //TODO: eventually fix 
//                     args: ['discover', '-h'],
//                 });

//                 // The 'result' will contain the output of the executed command.
//                 console.log('showReferrer Command output:', result);
//             } catch (error) {
//                 console.error('Error executing command:', error);
//             }
//         }
//     };

//     return api;
// }


