'use strict';
class cocoButtomSheetJS{
	gethtmlcode(code){
		console.log('gethtmlcode');
		this.sethtml = code;
	}
	set sethtml(code){
		console.log('sethtml');
		document.body.innerHTML = code;
	}
	get initdom(){
		console.log('initdom');
		document.body.innerHTML = 'test';
	}
	show(){
		
	}
};