export {}

async function init() {
    if (typeof fin === 'undefined') {
        console.error('this app can only run in an OpenFin environment');
        return;
    }

    const app = fin.Application.getCurrentSync();
    await app.addListener('run-requested', (ev: any) => {
        const startupAppUrl = ev?.manifest?.startup_app?.url;
        if (startupAppUrl) {
            window.location.href = startupAppUrl;
        }
    });
}

window.addEventListener('DOMContentLoaded', init);
