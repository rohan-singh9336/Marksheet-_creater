window.onload = function() {
//..........creating function in add subject button.......................................
        var addSubjectBtn = document.getElementById("add-subjectbtn");

        addSubjectBtn.onclick = function() {

//.......creating div in feild of adding subject,fullmarks,and obtainedmarks................            
           var div = document.createElement("div");
                div.id = "horizontal";
        // ........creating subject feild..............
                var subject = document.createElement("input");
                    subject.name = "subject";
                    subject.placeholder = "Subject name";
                    subject.type = "text";
        //..........creating fullmarks feild...............
                var fullmarks = document.createElement("input"); 
                    fullmarks.name = "fullmarks";
                    fullmarks.placeholder = "Enter fullmarks";
                    fullmarks.type = "number";
                    fullmarks.className = "full-marks";
        // ..........creating obtained marks feild...........
                var obtainedMarks = document.createElement("input");
                    obtainedMarks.name = "obtainedMarks";
                    obtainedMarks.placeholder = "Enter Obtained Marks";
                    obtainedMarks.type = "number";
                    obtainedMarks.className = "obtained-marks";
        //...........creating delete button feild............
                var deleteButton = document.createElement("button");
                    deleteButton.innerHTML = "<i class='fa-solid fa-trash'></i>";
                    deleteButton.className = "delete-button";
                    deleteButton.type = "button";

                    
        //............adding input inside div tag.............
                div.append(subject);
                div.append(fullmarks);
                div.append(obtainedMarks);
                div.append(deleteButton);
        //............adding div tag to form..................

                var dynamicArea= document.getElementById("dynamic-area");
                    dynamicArea.append(div);

//.......................creating subject table with dynamicaly marks input code...........
        
               var subjectTr = document.createElement("tr");
                      subjectTr.style.textAlign = "center";

                var subjectTd = document.createElement("td");
                       

                var fullMarksTd = document.createElement("td");
                        
                       

                var obtainedMarksTd = document.createElement("td");
                        

                subjectTr.append(subjectTd);
                subjectTr.append(fullMarksTd);
                subjectTr.append(obtainedMarksTd);

                var subjectBody = document.getElementById("subject-body");
                        subjectBody.append(subjectTr);

        //..................subject marks entry in marks table dynamiciy in table................

                subject.oninput = function() {
                        subjectTd.innerHTML = this.value;
                }

                fullmarks.oninput = function() {
                        fullMarksTd.innerHTML = this.value;
                }
                
                obtainedMarks.oninput = function() {
                        obtainedMarksTd.innerHTML = this.value;

                //........ calculate total marks code in table ........
                var totalMarks = 0;
                var obm = document.getElementsByClassName("obtained-marks");
                        for(var i=0; i<obm.length; i++) 
                        {
                             var num = Number(obm[i].value);
                             totalMarks = totalMarks+num;

                             var totalMarksTd = document.getElementById("total-marks");
                             totalMarksTd.innerHTML = totalMarks;
                        }
                
                var fullMarksTd = 0;
                var full = document.getElementsByClassName("full-marks");
                
                         for(i=0; i<full.length; i++)
                         {
                                var mfull = Number(full[i].value);
                                fullMarksTd = fullMarksTd+mfull;

                                var totalsubjectMarks = document.getElementById("total-subject-marks");
                                totalsubjectMarks.innerHTML = fullMarksTd;
                         }

                //.........calculate percentage of student totalmarks in table.............
                
                  var noOfSubject = fullMarksTd;
                  var percentage = (totalMarks / noOfSubject) * 100;
                  var percentageTd = document.getElementById("Percentage");
                          percentageTd.innerHTML = percentage.toFixed(1)+'%';



                //........finding grade of student intable................................

                var grade = "";

                if(percentage > 95) grade = 'A+';

                else if(percentage > 90) grade = 'A';

                else if(percentage > 85) grade = 'B+';

                else if(percentage > 80) grade = 'B';

                else if(percentage > 70) grade = 'C+';

                else if(percentage > 60) grade = 'C';

                else if(percentage > 50) grade = 'D';

                else if(percentage > 40) grade = 'D+';

                else if(percentage > 30) grade = 'E';

                else grade = 'F';

                    var gradeId = document.getElementById("grade");
                          gradeId.innerHTML = grade;
                          
//..........................creating pass fail student marks dynamicaly.......................

                var passFail = document.getElementById("pass-fail");
                
                 if(percentage < 33) {
                        passFail.innerHTML = "FAIL";
                        passFail.style.color = "red";
                 }
                 else if(percentage > 33 && percentage < 45) {
                        passFail.innerHTML = "PROMOTED";
                        passFail.style.color = "red";
                 }
                 else {
                        passFail.innerHTML = "PASS";
                        passFail.style.color = "green";
                 }
                
              
                }



        //...........delete button row while deleted by button dynamicly...........

                deleteButton.onclick = function() {
                       div.remove();
                       subjectTr.remove();
                  
                }        
            }

//...............creating student input pic dynamicly in marksheet........................

    var studentPicInput = document.getElementById("student-pic-input");
            studentPicInput.onchange = function() {
                var studentImg = this.files[0];
                var url = URL.createObjectURL(studentImg);
             //.........converting url to main table student image............   
                var studentPic = document.getElementById("student-pic");
                studentPic.src = url;   
            }

//..............candidate name input feild code............................

            var studentNameInput = document.getElementById("candidate-name-input");
                studentNameInput.oninput = function() {
                        var studentName = document.getElementById("candidate-name");
                        studentName.innerHTML = this.value; 
                }
//................candidate father name input feild code.......................

                var studentFatherName = document.getElementById("father-name-input");
                        studentFatherName.oninput = function() {
                                var fatherName = document.getElementById("father-name");
                                fatherName.innerHTML = this.value;
                        }
//.....................candidate roll no. input feild code.......................

                var rollNumber = document.getElementById("roll-no-input");
                        rollNumber.oninput = function() {
                                var rollnum = document.getElementById("rollno");
                                rollnum.innerHTML = this.value;
                        }
//.....................candidate mother name input feild code....................

                        var studenMotherName = document.getElementById("mother-name-input");
                                studenMotherName.oninput = function() {
                                        var motherName = document.getElementById("mother-name");
                                        motherName.innerHTML = this.value;
                                }
//.......................candidate date of birth input feild code......................

                var dateOfBirth = document.getElementById("date-birth-input");
                        dateOfBirth.oninput = function() {
                                var dateBirth = document.getElementById("date-birth");
                                dateBirth.innerHTML = this.value;
                        }
//......................candidate gender input feild code...............................

                var candidateGender = document.getElementById("input");
                        candidateGender.onchange = function() {
                                var gender = document.getElementById("candidate-gender");
                                gender.innerHTML = this.value;
                        }
//......................candidate class input feild code...............................

                var candidateClass = document.getElementById("class-input");
                        candidateClass.oninput = function() {
                               var className = document.getElementById("candidate-class");
                               className.innerHTML = this.value;      
                        }
//........................candidate class section input feild code.......................

                        var candidateSection = document.getElementById("input-section");
                                candidateSection.onchange = function() {
                                        var classSection = document.getElementById("candidate-section");
                                        classSection.innerHTML = this.value;
                                }

//..........................school total working day's in year input feild code............
                
                        var schoolWorkingDays = document.getElementById("school-work-day");
                                schoolWorkingDays.oninput = function() {
                                        var totalWorkingDays = document.getElementById("working-day-school");
                                        totalWorkingDays.innerHTML = this.value;
                                }

//..........................student total attendence in year input feild code...................

                        var totalAttendenceStudent = document.getElementById("total-attendence");
                        totalAttendenceStudent.oninput = function() {
                                var attendenceTotal = document.getElementById("student-attendence");
                                attendenceTotal.innerHTML = this.value;
                        }
//...........................creating total percentage of attendence in year input feild code........

                       var calculatepercentage = document.getElementById("show-percentage");
                            calculatepercentage.onclick = function() {
                                var totalSchool = document.getElementById("school-work-day").value;
                                var studentAtten = document.getElementById("total-attendence").value;
                                     if( totalSchool == 0 && totalSchool == "" && studentAtten == "") {
                                        Swal.fire("Please enter school working day and total student attend class!");
                                     }
                                     else {
                                        var totalperAtten = (studentAtten / totalSchool) * 100;
                                        var totalPercentShow = document.getElementById("attendence-percentage");
                                             totalPercentShow.innerHTML = totalperAtten.toFixed(1)+'%';
                                     }
                            }

//.............................Export marksheet to PFD button not created fuctions......................................
               var generateMarksheet = document.getElementById("generate");
                   generateMarksheet.onclick = function() {
                        Swal.fire({
                        icon: "error",
                        title: "It will not work Ms. Pallu........",
                        text: "because marksheet ko PDF ma convert krne ke liye ReatJS shikhna hoga , OR ha...... Btao kaise laga mera project bahut mehnat se bana hai to acha hi bolna...... ",
                        });
                }

}

