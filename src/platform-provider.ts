export {}
fin.Platform.init({
    overrideCallback: async (Provider) => {
        class Override extends Provider {
            // async getSnapshot() {
            //     const snapshot = await super.getSnapshot();

            //     //we add an externalWindows section to our snapshot
            //     const externalWindows = await generateExternalWindowSnapshot(externalWindowsToTrack);
            //     return {
            //         ...snapshot,
            //         externalWindows
            //     };
            // }

            async applySnapshot({ snapshot, options }) {

                const originalPromise = super.applySnapshot({ snapshot, options });

                //if we have a section with external windows we will use it.
                if (snapshot.externalWindows) {
//                    await Promise.all(snapshot.externalWindows.map(async (i) => await restoreExternalWindowPositionAndState(i)));
                }

                return originalPromise;
            }
        };
        return new Override();
    },
    interopOverride: async (InteropBroker, provider, options, ...args) => {
        class Override extends InteropBroker {
            async handleFiredIntent(intent) {
                if (intent.name === 'JavaIntent') {
                    super.setIntentTarget(intent, { uuid: 'com.openfin.desktop.InteropTest', name: 'com.openfin.desktop.InteropTest' });
                } 
                else if (intent.name === 'DotNetIntent') {
                    super.setIntentTarget(intent, { uuid: 'donet-integration-test', name: 'donet-integration-test' });
                } else {
                    super.setIntentTarget(intent, { uuid: 'AdapterInteropTest', name: 'adapter-testing-view' });  // defined in app.json
                }
            }
        }
        return new Override(provider, options, ...args);
    }    
});
