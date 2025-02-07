import {
    // ConsoleInstrumentation,
    // ConsoleTransport,
    // ErrorsInstrumentation,
    FetchTransport,
    initializeFaro,
    // LogLevel,
    // SessionInstrumentation,
    // WebVitalsInstrumentation,
    getWebInstrumentations,
    type Faro,
} from '@grafana/faro-web-sdk';

let faroInstance: Faro | null = null;

export const initFaro = () => {
    if (!faroInstance) {
        faroInstance = initializeFaro({
            instrumentations: [
                ...getWebInstrumentations(),
                // new ErrorsInstrumentation(),
                // new WebVitalsInstrumentation(),
                // new ConsoleInstrumentation({
                //   disabledLevels: [LogLevel.TRACE, LogLevel.ERROR], // console.log will be captured
                // }),
                // new SessionInstrumentation(),
            ],
            transports: [
                new FetchTransport({
                    url: 'http://172.28.20.221:8030/collect',
                    apiKey: 'secret',
                }),
                // new ConsoleTransport(),
            ],
            app: {
                name: 'frontend',
                version: '1.0.0',
            },
        });
        return faroInstance;
    }
};
