'use strict';
class cocoButtomSheetJS{
	constructor(code) {
		console.log('constructor');
		this.code = code;
	}
	sethtml(code){
		this.code = code;
	}
	gethtml(){
		return this.code;
	}
	get initdom(){
		console.log('initdom');
		document.body.innerHTML = 'test';
	}
	show(){
		console.log(this.code);
	}
	hide(){
		
	}
};