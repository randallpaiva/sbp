// Small Animation
			$(document).ready(function(){
			$("div").click(function(){
					var div = $("body");
					div.animate({height: '500px', opacity: '0.4'}, "slow");
					div.animate({width: '300px', opacity: '0.8'}, "slow");
					div.animate({height: '100px', opacity: '0.4'}, "slow");
					div.animate({width: '100%', opacity: '1'}, "slow");
				});
			});
		
			$("document").scroll(function){
			
				$("nav").css("background-color","#000");
			
			};
			


			$(document).ready(function(){
					$("#vision").focus(function(){
				alert("You entered p1!");
				},
					function(){
				alert("Bye! You now leave p1!");
				}); 
			});
			


	$(document).ready(function(){
		$("input").focus(function(){
			$(this).css("background-color", "#000");
		});
		$("input").blur(function(){
			$(this).css("background-color", "#ffd700");
		});
	});