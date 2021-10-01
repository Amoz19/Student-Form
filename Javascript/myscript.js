localStorage.clear();

function showStudentForm(){
   document.getElementById('student_list_div').style.display = "none";
   document.getElementById('edit_student_form_div').style.display = "none";
   document.getElementById('student_form_div').style.display = "block";
   document.getElementById('image').style.display = "none";
   
   
   //dob's student form
   var years = document.getElementById('years');
    var opt = document.createElement('option');
    opt.value = 2000;
    opt.innerHTML = 2000;
    years.appendChild(opt);
    for (var i = 2001; i<=2021; i++){
        opt = document.createElement('option');
        opt.value= i;
        opt.innerHTML=i;
        years.appendChild(opt);
    }

     var months = document.getElementById('months');
     var opt = document.createElement('option');
     opt.value = 1;
      opt.innerHTML = 1;
      months.appendChild(opt);
      for (var j =2; j<=12; j++){
          opt = document.createElement('option');
          opt.value= j;
          opt.innerHTML=j;
         months.appendChild(opt);
     } 
     
     var days = document.getElementById('days');
     var opt = document.createElement('option');
     opt.value = 1;
      opt.innerHTML = 1;
      days.appendChild(opt);
      for (var k=2; k<=31; k++){
          opt = document.createElement('option');
          opt.value= k;
          opt.innerHTML=k;
         days.appendChild(opt);
        }
		
    var years=document.getElementById('years').value;
    var months=document.getElementById('months').value;
    var days=document.getElementById('days').value;
    var date_of_birth=years+"-"+months+"-"+days; 
}

function saveStudentForm(){
    alert('Congratulation! Your registration was submitted');
    document.getElementById('stb').style.display="block";
    var full_name=document.getElementById('full_name').value;
    var years=document.getElementById('years').value;
    var months=document.getElementById('months').value;
    var days=document.getElementById('days').value;
    var date_of_birth=(years+'-'+months+'-'+days);
    var gend=document.getElementsByClassName('gender');
    for(var i=0; i<gend.length; i++){
        if(gend[i].checked){
            var gender = gend[i].value;
        }
    }
  
   var eduction_level=document.getElementById('education_level').value;
    var cty_cod=document.getElementById('cty_cod').value;
    var ph_no=document.getElementById('ph_no').value;
    var mobile_no=(cty_cod+'  '+ph_no);
    var old_data=localStorage.getItem('old_data')?JSON.parse(localStorage.getItem('old_data')):[];

    var new_data = {
        'full_name':full_name,
        'date_of_birth':date_of_birth,
        'gender':gender,
        'education_level':eduction_level,
        'mobile_no':mobile_no,
    };
    old_data.push(new_data);
    localStorage.setItem('old_data',JSON.stringify(old_data));
	studentListTable(old_data);
	return false;
}

function studentListTable(old_data){
   var new_table = document.getElementById('student_list_table');
     new_table.innerHTML = '';
      //insert header row
      var new_row = new_table.insertRow(0);
      //add class to header row
      //new_row.classList.add('header_row');
      //for no column of header
      var cell0 = new_row.insertCell(0);
      cell0.innerHTML = '<th>No.</th>';
      //for full-name column of header
      var cell1 = new_row.insertCell(1);
      cell1.innerHTML = '<th>Full Name</th>';
      //for date-of-birth column of header
      var cell2 = new_row.insertCell(2);
      cell2.innerHTML = '<th>Date Of Birth</th>';
      //for gender column of header
      var cell3 = new_row.insertCell(3);
      cell3.innerHTML = '<th>Gender</th>';
      //for eduction-level column of header
      var cell4 = new_row.insertCell(4);
      cell4.innerHTML = '<th>Education Level</th>';
      //for mobile-no column of header
      var cell5 = new_row.insertCell(5);
      cell5.innerHTML = '<th>Mobile No.</th>';
      //for edit column of header
      var cell6= new_row.insertCell(6);
      cell6.innerHTML = '<th></th>';
      //for delete column of header
      var cell7 = new_row.insertCell(7);
      cell7.innerHTML = '<th></th>';
    
     for(var i=0; i<old_data.length; i++){
         //insert new row
        var new_row = new_table.insertRow(i+1);
        //for no column
        var no = i + 1;
        var cell0 = new_row.insertCell(0);
        cell0.innerHTML = '<td>'+no+'</td>';
        //for full-name column
        var cell1 = new_row.insertCell(1);
        cell1.innerHTML = '<td>'+old_data[i]['full_name']+'</td>';
        //for date-of-birth column
        var cell2 = new_row.insertCell(2);
        cell2.innerHTML = '<td>'+old_data[i]['date_of_birth']+'</td>';
        //for gender column
        var cell3 = new_row.insertCell(3);
        cell3.innerHTML = '<td>'+old_data[i]['gender']+'</td>';
        //for eduction-level column
        var cell4 = new_row.insertCell(4);
        cell4.innerHTML = '<td>'+old_data[i]['education_level']+'</td>';
        //for mobile-no column
        var cell5= new_row.insertCell(5);
        cell5.innerHTML = '<td>'+old_data[i]['mobile_no']+'</td>';
        //for edit and delete column
        var cell6 = new_row.insertCell(6);
        cell6.innerHTML = '<td><input onclick="editData('+i+')"type="button" class="edit_button" name="edit" value="Edit" /></td>';
        //for edit and delete column
        var cell7 = new_row.insertCell(7);
        cell7.innerHTML = '<td><input onclick="deleteData('+i+')"type="button" class="delete_button" name="delete" value="Delete" /></td>';
	 }
   
    document.getElementById('student_form_div').style.display = "none";
    document.getElementById('student_list_div').style.display = "block";
}
	function deleteData(id){
		alert("Are you sure you want to delete it?")
		var old_data= localStorage.getItem('old_data')?JSON.parse(localStorage.getItem('old_data')):[];
		old_data.splice(id,1);
		localStorage.setItem('old_data',JSON.stringify(old_data));
		studentListTable(old_data);
		return false;
	}
	
function editData(id){
  var old_data=localStorage.getItem('old_data')?JSON.parse(localStorage.getItem('old_data')):[];
  var full_name=old_data[id]['full_name'];
  var date_of_birth=old_data[id]['date_of_birth'];
  var gender=old_data[id]['gender'];
  var eduction_level=old_data[id]['education_level'];
  var mobile_no=old_data[id]['mobile_no'];
	document.getElementById('student_list_div').style.display = "none";
	document.getElementById('student_form_div').style.display = "none";
	document.getElementById('edit_student_form_div').style.display = "block";
	document.getElementById('edit_full_name').value=full_name;
  
//edit dob's student form
var edit_years = document.getElementById('edit_years');
var opt = document.createElement('option');
opt.innerHTML = 2000;
edit_years.appendChild(opt);
for (var i = 2001; i<=2021; i++){
    opt = document.createElement('option');
    opt.value= i;
    opt.innerHTML=i;
    edit_years.appendChild(opt);
 }
 var edit_months = document.getElementById('edit_months');
 var opt = document.createElement('option');
 opt.value = 1;
  opt.innerHTML = 1;
  edit_months.appendChild(opt);
  for (var i =2; i<=12; i++){
      opt = document.createElement('option');
      opt.value= i;
      opt.innerHTML=i;
      edit_months.appendChild(opt);
}
var edit_days = document.getElementById('edit_days');
 var opt = document.createElement('option');
    opt.value = 1;
  opt.innerHTML = 1;
  edit_days.appendChild(opt);
  for (var i =2; i<=31; i++){
      opt = document.createElement('option');
      opt.value= i;
      opt.innerHTML=i;
      edit_days.appendChild(opt);
  }
    document.getElementsByClassName('edit_gender').value=gender;
	document.getElementById('old_id').value=id;
	return false;
}

function updateStudentList(){
	var my_id = document.getElementById('old_id').value;
	var new_full_name = document.getElementById('edit_full_name').value;
	var years=document.getElementById('edit_years').value;
    var months=document.getElementById('edit_months').value;
    var days=document.getElementById('edit_days').value;
    var new_date_of_birth=(years+'-'+months+'-'+days);
    var new_gender= document.getElementsByClassName('edit_gender');
    for(var i=0;i<new_gender.length;i++){
      if(new_gender[i].checked){
          var gender=new_gender[i].value;
         /*break;*/
      }
  }
    var new_eduction_level = document.getElementById('edit_education_level').value;
    var cty_cod=document.getElementById('edit_cty_cod').value;
    var ph_no=document.getElementById('edit_ph_no').value;
    var new_mobile_no=(cty_cod+'  '+ph_no);
	var old_data = localStorage.getItem('old_data')?JSON.parse(localStorage.getItem('old_data')):[];
	for(var i=0;i<old_data.length;i++){
		if(i == my_id){
			old_data[i]['full_name']=new_full_name;
			old_data[i]['date_of_birth']=new_date_of_birth;
            old_data[i]['gender']=gender;
            old_data[i]['eduction_level']=new_eduction_level;
            old_data[i]['mobile_no']= new_mobile_no;
		}
	}
	document.getElementById('edit_student_form_div').style.display = "none";
	localStorage.setItem('old_data',JSON.stringify(old_data));
	studentListTable(old_data);
	return false;
}

