const clientArgs = [ 'run build' ];
const clientOpts = { stdio: 'inherit', cwd: 'client', shell: true };
require('child_process').spawn('npm', clientArgs, clientOpts);