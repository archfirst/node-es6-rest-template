import { createLogger } from 'bunyan';

// ----- Log levels -----
// fatal (60): The service/app is going to stop or become unusable now.
// error (50): Fatal for a particular request, but the service/app continues servicing other requests.
// warn  (40): A note on something that should probably be looked at by an operator eventually.
// info  (30): Detail on regular operation.
// debug (20): Anything else, i.e. too verbose to be included in "info" level.
// trace (10): Logging from external libraries used by your app or very detailed application logging.

const log = createLogger({
    name: 'server',
    streams: [
        {
            level: 'info',
            stream: process.stdout // log INFO and above to stdout
        },
        {
            level: 'error',
            path: 'app-error.log' // log ERROR and above to a file
        }
    ]
});

export default log;
