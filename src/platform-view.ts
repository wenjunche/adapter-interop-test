export {}

window.addEventListener('DOMContentLoaded', () => {
    initContextHandler();
    initIntentHandler();
});

async function initContextHandler() {
    await fin.me.interop.joinContextGroup('red');
    const name = fin.Application.getCurrentSync().identity.uuid;
    await fin.me.interop.addContextHandler(context => {
        console.log('got context', context);
        if (context.name !== name) {
            const contextResp = { id: context.id, name, type: context.type };
            contextResp.id.ticker += "1";
            fin.me.interop.setContext(contextResp);
        }
    });
}

async function initIntentHandler() {
    await fin.me.interop.registerIntentHandler(data => {
        console.log('got intent', data);
        const context = data.context;
        context.id.ticker += "1";
        const intent = { name: 'JavaIntent', context }
        if (context.type === 'dotnet') {
            intent.name = 'DotNetIntent';
        }
        fin.me.interop.fireIntent(intent);
    }, 'JsTestIntent');
}