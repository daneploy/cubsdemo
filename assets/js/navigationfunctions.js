
			$(document).ready(function(){
				$("#numberGet").keyup(function(event){
    					if(event.keyCode == 13){
        					var playerNumber = "id"+document.getElementById("numberGet").value;
							if($("div#"+playerNumber).size() > 0){
								if(localStorage.getItem(playerNumber)){
									var searchResult = "<div id='playerNotes'>"+localStorage.getItem(playerNumber)+"</div>";
								}
								else{
									var searchResult = "<div id='playerNotes'>No Stored Notes For Player</div>";
								}
							}
							else{
								var searchResult = "<div id='playerNotes'>Invalid Player ID</div>";
							}
							
							$("#outerMenu").show();
							$("#innerMenu").html(searchResult);
							
							
    					}
				});
				
				<!-- Triple A Menu Button -->
				$("#colorGuide div.tripleA").click(function() {
					$("#fortyMan").children().hide();
					$("#fortyMan").children("div.of").show();
					$("#filterName").text("Listing All Outfielders");
				});
				<!-- End of Triple A Menu Button -->
				<!-- Single A Menu Button -->
				$("#colorGuide div.singleA").click(function() {
					$("#fortyMan").children().hide();
					$("#fortyMan").children("div.c").show();
					$("#filterName").text("Listing All Catchers");
				});
				<!-- End of Single A Menu Button -->
				<!-- Double A Menu Button -->
				$("#colorGuide div.doubleA").click(function() {
					$("#fortyMan").children().hide();
					$("#fortyMan").children("div.if").show();
					$("#filterName").text("Listing All Infielders");
				});
				<!-- End of Double A Menu Button -->
				<!-- MLB Menu Button -->
				$("#colorGuide div.mlb").click(function() {
					$("#fortyMan").children().hide();
					$("#fortyMan").children("div.sp").show();
					$("#filterName").text("Listing All Starters");
				});
				<!-- End of MLB Menu Button -->
				<!-- NPB Menu Button -->
				$("#colorGuide div.jpn").click(function() {
					$("#fortyMan").children().hide();
					$("#fortyMan").children("div.rp").show();
					$("#filterName").text("Listing All Relief Pitchers");
				});
				<!-- End of NPB Menu Button -->
				$(document).on('click', 'div.playerInfo', function(){
				//$("div.playerInfo").click(function(){
					$(this).siblings("div.playerExpanded").slideToggle('fast');
				});

				$("#menuController").click(function(){
					$("#outerMenu").slideToggle('fast');
					$("#innerMenu ul").children('ul').slideUp('fast');
				});
				
				$("#logo").click(function(){
					window.location.href = "index.html";
					location.reload();
				});

				$("#fielderBtn").click(function(){
					$("#fielderSub").slideToggle('fast');
				});
				
				$("#pitcherBtn").click(function(){
					$("#pitcherSub").slideToggle('fast');
				});
				
				$("#filterName").click(function(){
					$("#colorGuide").slideToggle('fast');
				});
				
			});


			
			function menuReset() {
				$("#outerMenu").slideToggle('fast');
				$("#innerMenu ul").children('ul').slideUp('fast');
			};
