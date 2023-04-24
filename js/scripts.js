$(document).ready(function() {
	
	$(document).on('click', '.doMinus', function() {
		
		var thisInput = $(this).next();
		var thisInputVal = parseInt(thisInput.val());
		
		if (thisInputVal <= 1) {
			return;
		}
		
		thisInput.val(thisInputVal - 1);
		
		return;
		
	});
	$(document).on('click', '.doPlus', function() {
		
		var thisInput = $(this).prev();
		var thisInputVal = parseInt(thisInput.val());
		
		alert(thisInputVal);
		thisInput.val(thisInputVal + 1);
		
		return;
		
	});
	
});
