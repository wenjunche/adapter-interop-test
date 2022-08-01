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
    interopOverride: async (InteropBroker, wire, provider, options, ...args) => {
        class Override extends InteropBroker {
            async handleFiredIntent(intent) {
                let target: OpenFin.Identity;
                if (intent.name === 'JavaIntent') {
                    target = { uuid: 'com.openfin.desktop.InteropTest', name: 'com.openfin.desktop.InteropTest' };
                } 
                else if (intent.name === 'DotNetIntent') {
                    target = { uuid: 'dotnet-integration-test', name: 'dotnet-integration-test' };
                } else {
                    target = { uuid: 'AdapterInteropTest', name: 'adapter-testing-view' };  // defined in app.json
                }
                super.setIntentTarget(intent, target);
                return { source: { name: target.name }, version: '1.0.1' };
            }
        }

        // options.contextGroups = [
        //     {
        //         id: 'green',
        //         displayMetadata: {
        //             color: '#00CC88',
        //             name: 'green'
        //         }
        //     },
        //     {
        //         id: 'purple',
        //         displayMetadata: {
        //             color: '#8C61FF',
        //             name: 'purple'
        //         }
        //     }
        // ];

        return new Override(wire, provider, options, ...args);
    }    
});
