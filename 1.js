var model ={
	currentcat: null,
	cats:	[
	{
		count:0,
		name:'ABCC',
		imgurl:'src/1.jpg'
	},
	{
		count:0,
		name:'ABCA',
		imgurl:'src/2.jpg'
	},
	{
		count:0,
		name:'ABCB',
		imgurl:'src/3.jpg'
	},
	{
		count:0,
		name:'ABCD',
		imgurl:'src/4.jpg'
	},
	{
		count:0,
		name:'ABCE',
		imgurl:'src/5.jpg'
	}]
};
	
	
var octopus = {
	init: function(){
		model.currentcat = model.cats[0];
		view.init();
		list.init();
	},
	increase: function(){
		model.currentcat.count++;
		view.render();
	}
};
var view = {
	init:function(){
		this.catElem = document.getElementById('cat');
		this.catname = document.getElementById('catname');
		this.catcount = document.getElementById('catcount');
		this.caturl = document.getElementById('catimg');
		
		this.caturl.addEventListener('click',function(){
			octopus.increase();
		});
		this.render();
	},
	render: function(){
		var currentCat = model.currentcat;
		this.catcount.textContent = currentCat.count;
		this.catname.textContent = currentCat.name;
		this.caturl.src = currentCat.imgurl;
	}
};

var  list = {
	init: function(){
		this.catlist = document.getElementById('d1');
		this.render();
	},
	render: function() {
		var cats = model.cats;
		for(var i = 0;i<cats.length;i++){
			var cat = cats[i];
			var e = document.createElement('div');
			e.textContent = cats[i].name;
			
			e.addEventListener('click',(function(cat){
				return a();
			})(cats));
			
			this.catlist.append(e);
		}
	}
};
function a(){
	model.currentcat = cat;
	view.render();
}

octopus.init();

