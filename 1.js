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
		list.init();
		view.init();
		this.hide();
		admin.init();
	},
	increase: function(){
		model.currentcat.count++;
		view.render();
	},
	change: function(newcat){
		var cat = model.cats;

		for(var i = 0; i<cat.length; i++)
		{
			if(cat[i] === model.currentcat){
				cat[i].name = newcat.name;
				cat[i].count = newcat.count;
				cat[i].imgurl = newcat.imgurl;
				model.currentcat = newcat;
				list.render();
				view.render();
				admin.render(false);
			}

		}

	},
	hide : function(){
		document.getElementById('cname').value ="";
		document.getElementById('ccount').value ="";
		document.getElementById('csrc').value ="";
		document.getElementById('admindiv').style.visibility = "hidden";
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
			admin.render(false);
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
		this.catlist.innerHTML = '';
		for(var i = 0;i<cats.length;i++){
			var cat = cats[i];
			var e = document.createElement('div');
			e.textContent = cats[i].name;
			
			e.addEventListener('click',(function(cat){
				return function() {
					console.log(cat);
					model.currentcat = cat;
					view.render();
					octopus.hide();
				};
			})(cat));
			
			this.catlist.appendChild(e);
		}
	},
	remove: function(){
		document.getElementById('d1').removeAttribute('div');
	}
};

var admin = {
	init : function(){
		this.adminbtn = document.getElementById('admin');
		this.admindiv = document.getElementById('admindiv');
		this.adminbtn.addEventListener('click',function(){
			admin.render(true);
		})
	},
	render: function(a){
		var current = model.currentcat;
		if(a == false){
			this.admindiv.style.visibility = 'hidden';
		}
		else{
			this.admindiv.style.visibility = 'visible';
			this.save = document.getElementById('save');
			this.cncl = document.getElementById('cancel');
			this.save.addEventListener('click',function(event){
				event.preventDefault();
				var newCat = {
					name : document.getElementById('cname').value,
					count : document.getElementById('ccount').value,
					imgurl : document.getElementById('csrc').value
				};
				console.log(newCat);
				octopus.change(newCat);
			});
		}
		}	
		};

octopus.init();

