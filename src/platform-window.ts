import '../public/frame-styles.css';
import '../public/light-theme.css';

export const CONTAINER_ID = 'layout-container';
window.addEventListener('DOMContentLoaded', () => {
    console.log('test');
    fin.Platform.Layout.init({containerId: CONTAINER_ID});
});
