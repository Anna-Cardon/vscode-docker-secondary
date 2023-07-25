import { l10n } from 'vscode';
import { TaskCommandRunnerFactory } from '../support/TaskCommandRunnerFactory';


export async function showReferrer(): Promise<void> {

    try {
        const taskCRF = new TaskCommandRunnerFactory({
            taskName: 'oras', // Specify the task name here
            alwaysRunNew: true, // Optional: Specify whether to always run the command as a new task
            focus: true, // Optional: Specify whether to focus on the task's output panel
        });

        // Assuming you want to execute a command and log its output,
        // you can use the command runner returned by getCommandRunner.
        // For example, you can use it to execute the 'echo Hello World' command:
        const result = await taskCRF.getCommandRunner()({
            command: 'C:\\Users\\t-annacardon\\bin\\oras\\oras.exe',
            args: ['discover', '-h'],
        });

        // The 'result' will contain the output of the executed command.
        console.log('showReferrer Command output:', result);
    } catch (error) {
        console.error('Error executing command:', error);
    }
}