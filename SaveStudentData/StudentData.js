

$(document).ready(function(){
		var tblRecord=[];
   createRow();
$('#save').click(function(){      
   
			var enterName=$('#fname').val();
			var enterClass=$('#fclass').val();
			var enterMarks=$('#fmarks').val();	
			
		var objRecord={};
				objRecord.enterName=enterName;
				objRecord.enterClass=enterClass;
				objRecord.enterMarks=enterMarks;
				objRecord.studentId= Math.floor(Math.random() * 1000);

				tblRecord.push(objRecord);
		localStorage.stuRecord=JSON.stringify(tblRecord);		
		createRow();
			
	}); //end of click
		
		function createRow(){
			
			if(localStorage.stuRecord){
			tblRecord=JSON.parse(localStorage.stuRecord);
			$('tbody').empty();
			$.each(tblRecord,function(index,value){
		
				enterName=value.enterName;
				enterClass=value.enterClass;
                enterMarks=value.enterMarks;
                studentId=value.studentId;
			
			
				
				var printData='<tr>'
					+'<td id=stuIndex>'+(1+index)+'</td>'
					+'<td id="stuName"><span id=editName>'+enterName+'</span><input type="text" id="editText"/><input type="button" value="save" id="saveData" data-student-id="'+ studentId +'"/></td>'
					+'<td id="second_col">'+enterClass+'</td>'
					+'<td id="third_col">'+enterMarks+'</td>'+'</tr>';
					
					$('tbody').append(printData); 
					
					
					});
		}
		$('#fname').val("");
			$('#fclass').val("");
			$('#fmarks').val("");
		}
				//$('tbody').on('click','#stuName',getInd);

		$('tbody').on('click','#editName',editCell);
		$('tbody').on('click','#saveData',saveNewVal);
		
		function editCell(){
			
			var editedValue=$(this).parent().find('#editName').text();
			var stu=$(this).parent().find('#stuIndex').text();
			console.log(stu);
			$(this).parent().find('#editText').val(editedValue);
			$(this).parent().find('#editText').show();
			$(this).parent().find('#saveData').show();
			$(this).parent().find('#editName').hide();
			
		
		}
			function saveNewVal(event){
				//$.each(tblRecord,function(index,value){
				//console.log(index);
				//var textboxIndex=$('#stuName').parent().index();
				//console.log(textboxIndex);

				$(this).hide();
				var newValue=$(this).parent().find('#editText').val();
				$(this).parent().find('#editText').hide();
				$(this).parent().find('#editName').text(newValue);
				$(this).parent().find('#editName').show();

				var studentId = $(event.target).data('student-id');
				$.each(tblRecord, function(index, value){
					if (value.studentId === studentId){
						value.enterName = newValue;
						localStorage.stuRecord=JSON.stringify(tblRecord);
					}
				});
				

				//var getIndex=$(this).parent().find('#stuIndex').val();
			//console.log(getIndex);
						
					/*	$.each(tblRecord,function(index,value){
						value.enterName=newValue;
						$(this).tblRecord.push(value.enterName);
						localStorage.stuRecord=JSON.stringify(tblRecord);		
						createRow();
						
						}); */
	
	//$(this).parent().find('#saveData').hide();
				
				
				//$.each(array_here,function(index,value){
				//	var vari=$(this).value.name_here
			//	vari=newValue;
				//localStorage.setItem($value.name_here,newValue
				//array_here.push(obj_here);
		//localStorage.local_variable=JSON.stringify(vari);		
				//createRow();
				
				
			} 
	

	}); 