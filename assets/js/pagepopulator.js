//

$(document).ready(function() {
				  $.getJSON('assets/json/roster.json', function(result){
					$.each(result, function(i, player){
						var playerID = "id"+player.player_id_mlbam;
						if(player.position == "C"){
							var styleClasses = "c";
						}
						else if(player.position == "SS" || player.position == "1B" || player.position == "2B" || player.position == "3B" || player.position == "IF"){
							var styleClasses = "if";
						}
						else if(player.position == "OF" || player.position == "LF" || player.position == "RF" || player.position == "CF"){
							var styleClasses = "of";
						}
						else if(player.position == "LHS" || player.position == "RHS"){
							var styleClasses = "sp";
						}
						else{
							var styleClasses = "rp";
						}
						var playerContainer = "<div class='playerContainer mlb "+styleClasses+"' id='"+playerID+"'><div class='playerInfo'>";
						playerContainer += "<div class='playerNumber'>"+player.player_id_mlbam+"</div>&nbsp;";
						playerContainer += "<div class='playerName'>"+player.lastname+", "+player.firstname+"</div>&nbsp;";
						playerContainer += "<div class='playerPosition'>"+player.position+"</div>&nbsp;";
						playerContainer += "<div class='playerHands'>"+player.bats+"/"+player.throws+"</div>&nbsp;";
						if(player.school){
							playerContainer += "</div><div class='playerExpanded'><div class='playerBio'>Born in "+player.birth_place+" on "+player.dob_dte+", "+player.firstname+" attended "+player.school+" and made his major league debut on "+player.mlb_debut+".</div>";
						}
						else{
							playerContainer += "</div><div class='playerExpanded'><div class='playerBio'>Born in "+player.birth_place+" on "+player.dob_dte+", "+player.firstname+" made his major league debut on "+player.mlb_debut+".</div>";
						}
						playerContainer += "<div class='playerHighlights'></br>";
						if(localStorage.getItem(playerID) !== '' && localStorage.getItem(playerID) !== null && localStorage.getItem(playerID) !== undefined){
							playerContainer += "<div class='existingNotes'>"+localStorage.getItem(playerID)+"</div></br>";
						}
						else{
							playerContainer += "<div class='existingNotes'></div></br>";
						}
						playerContainer += "<form name='notes'><textarea class='newNote'></textarea></form><button class='noteSubmit' type='submit'>Click To Add</button></div>"
						
						$("#fortyMan").append(playerContainer);
						
						/*
						$("div.info").append("<div class='playerContainer' id='id"+field.player_id_mlbam+"'>"+field.lastname + "<div class='formTest'><div class='existingNotes'></div><form name='notes'><textarea></textarea></form><button class='notesubmit'>Click To Add</button></div></div>");
						//insert existing data into existingNotes if localStorage exists
						$("div.info").append("<h1>note:"+ localStorage.getItem('id123123'));
						var playerID = "id"+field.player_id_mlbam;
						if(localStorage.getItem(playerID) !== '' && localStorage.getItem(playerID) !== undefined && localStorage.getItem(playerID) !== null){
							alert(localStorage.getItem(playerID));
						}
						*/
					});
				  });
				
				//button click storage function
				//if form field is empty, deny
				//first capture existing localStorage for this nearest id if it exists, append to top with ***delimiter, adding date time and new form submission
				//$("button.notesubmit").click(function(){
				$(document).on('click', '.noteSubmit', function(){
					if($(this).closest(".playerHighlights").find("textarea").val() == ''){
						alert("No Note Data Entered!");
						return false;
					}
					else{
						var oldNote = $(this).closest(".playerHighlights").find(".existingNotes").html();
						var m = new Date();
						var dateString = m.getFullYear() +"/"+ (m.getMonth()+1) +"/"+ m.getDate() + " " + m.getHours() + ":" + m.getMinutes() + ":" + m.getSeconds();
						if(oldNote !== "" && oldNote !== undefined) {
							newNote = oldNote;
							newNote += "</br> * * * * * * * * * * * * * * * * * * * <br>";
							newNote += dateString;
							newNote += "<br>"
							newNote += $(this).closest(".playerHighlights").find("textarea").val();
						}
						else {
							newNote = dateString;
							newNote += "<br>"
							newNote += $(this).closest(".playerHighlights").find("textarea").val();
						}
						$(this).closest(".playerHighlights").find(".existingNotes").html(newNote);
						$(this).closest(".playerHighlights").find("textarea").val('');
						var storageID = $(this).closest(".playerContainer").attr("id");
						localStorage.setItem(storageID, newNote);
					}
				});
			});