$(document).ready(function()
{	
	$('#password').keyup(function()
	{
		$('#result').html(checkStrength($('#password').val()))
	})	
		
	function checkStrength(password)
	{
		var strength = 0
		
        if (password.length < 1) { 
			
			$('.result').addClass('hidden');
            $('.mypass').removeClass('shorty');
            $('.mypass').removeClass('goody');
            $('.mypass').removeClass('stro');
            $('.mypass').removeClass('weaky');
			return 'aaaa' 
		}
        
		if (password.length < 6) { 
            $('.result').removeClass('hidden');
			$('.result').addClass('short');
            $('.result').removeClass('good');
            $('.result').removeClass('weak');
            $('.result').removeClass('strong');
            $('.mypass').addClass('shorty');
            $('.mypass').removeClass('goody');
            $('.mypass').removeClass('stro');
            $('.mypass').removeClass('weaky');
			return 'قصير جدا' 
		}
		
		if (password.length > 7) strength += 1
		
		//If password contains both lower and uppercase characters, increase strength value.
		if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  strength += 1
		
		//If it has numbers and characters, increase strength value.
		if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  strength += 1 
		
		//If it has one special character, increase strength value.
		if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  strength += 1
		
		//if it has two special characters, increase strength value.
		if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
		
		
		//Calculated strength value, we can return messages
		
		
		
		//If value is less than 2
		
		if (strength < 2 )
		{
            $('.result').removeClass('hidden');
			$('.result').addClass('weak');
            $('.result').removeClass('good');
            $('.result').removeClass('short');
            $('.result').removeClass('strong');
            $('.mypass').addClass('weaky');
            $('.mypass').removeClass('goody');
            $('.mypass').removeClass('stro');
            $('.mypass').removeClass('shorty');
			return 'ضعيف'			
		}
		else if (strength == 2 )
		{
            $('.result').removeClass('hidden');
			$('.result').addClass('good');
            $('.result').removeClass('short');
            $('.result').removeClass('weak');
            $('.result').removeClass('strong');
            $('.mypass').addClass('goody');
            $('.mypass').removeClass('weaky');
            $('.mypass').removeClass('stro');
            $('.mypass').removeClass('shorty');
			return 'جيد'		
		}
		else
		{
            $('.result').removeClass('hidden');
			$('.result').addClass('strong');
            $('.result').removeClass('good');
            $('.result').removeClass('weak');
            $('.result').removeClass('short');
            $('.mypass').addClass('stro');
            $('.mypass').removeClass('weaky');
            $('.mypass').removeClass('shorty');
            $('.mypass').removeClass('goody');
			return 'قوي'
		}
    
	}
});