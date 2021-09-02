import App from './App.svelte';
import GlobalData from './data/GlobalData';

const app = new App({
	target: document.body,
	props: GlobalData
});

export default app;