// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'ios', //ios, md, auto
    modalTitle: 'App La Re-Z', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/entradas/',
    	url: 'entradas.html',
    	name: 'entradas',
  		},
		{
		path: '/desayunos/',
    	url: 'desayunos.html',
    	name: 'desayunos',
  		},
		{
		path: '/tortas/',
    	url: 'tortas.html',
    	name: 'tortas',
  		},
		{
		path: '/tacos/',
    	url: 'tacos.html',
    	name: 'tacos',
  		},
		{
		path: '/combos/',
    	url: 'combos.html',
    	name: 'combos',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

