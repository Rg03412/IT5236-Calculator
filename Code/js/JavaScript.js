
// this is the java script file for my calculator app that i am making for class

//  @author <Ryan Gniewkowski>
//  @id <900970161>
//  @class <>

var mathLog = [];
var tempNumber = [];
var oporation = "addition";
var tempDisplay = "";

// BackButton code
			function BackButton(){
                //checks to see if there is a temp number that is still being typed
                console.log(tempNumber.length)
				if(tempNumber.length!==0){
					console.log(tempNumber)
                    tempNumber.pop();
                   tempDisplay = tempDisplay.substring(0, tempDisplay.length - 1);
                    console.log(tempNumber)
                    //checks for any mathLog items to see if they need to be deleted
				}if(mathLog.length!==0){
					console.log(mathLog)
					mathLog.pop()
					console.log(mathLog)
				}else{
                    console.log("nothing left")
				}
				document.getElementById("answerBlock").innerHTML = UpdateBox();
			}

            // what most numbers 0-9 have
            // very simple just takes the id it got pasted when the button is pressed and start making a temp number so that numbers can be how ever long you want
			function BasicNumber(id){
				tempNumber.push(id);
				
				tempDisplay = tempDisplay + id;
				console.log(tempDisplay,id)
				document.getElementById("answerBlock").innerHTML = UpdateBox();

			}
            //clears everytjing back to default when launching the app
			function ClearButton(){
				mathLog = [];
				tempNumber = [];
				oporation = "addition";
				tempDisplay = "";
				document.getElementById("answerBlock").innerHTML = "";
            }
            //added this so i dont have to remove buttons that dont work so i can keep the shape and rows even
            function UnaddedButton(){
                alert("This button is currently not implmented in this current verison");
            }

            // this is what is runs after almost every button press so that the box shows everything that is going on
			function UpdateBox(){
                    //this is stuff to remove the , from what is being displayed in the box
					if (mathLog.length !=0){
						if(tempDisplay!=""){
							x = mathLog.toString() + tempDisplay;
							console.log(x)
						return x.replaceAll(',','')
					} else{
						return mathLog.toString().replaceAll(',','')
					}
					}
					else if(tempDisplay!=""){
						return tempDisplay
					}
			}

            //Same as basicNumber but with symbols it
			function BasicMathSumbol(id){
                if(tempNumber.length !=0){
				i = 0;
                longNumber = "";
                
				for (;tempNumber[i];) {
					longNumber += tempNumber[i] ;
					i++;
				}
				tempNumber = [];
				tempDisplay = "";
				mathLog.push(parseInt(longNumber, 10))
				mathLog.push(id)
				console.log(mathLog)
                document.getElementById("answerBlock").innerHTML = UpdateBox();
                }else{
                    console.log(":)")
                }
			}


			function CalculateFinalAnswer(){
				finalAnswer = 0;
				i = 0;
				longNumber = "";
				for (;tempNumber[i];) {
					longNumber += tempNumber[i] ;
					i++;
				}
				tempNumber = [];
				mathLog.push(parseInt(longNumber, 10))
				console.log(mathLog)


				for (i = 0; i < mathLog.length; i++) {
                    // console.log(typeof mathLog[i])
                    // console.log(typeof mathLog[mathLog.length-1])
                    // if(typeof mathLog[mathLog.length-1]=== "string"){
                    //     console.log("ayy")
                    // }
                    if(mathLog[mathLog.length-1] == NaN){
                        console.log("we herer")
                        mathLog.pop()
                        mathLog.pop()
                    }
					//this goes through all the MathLog stuff and sees what is each item(num or string) and does the math accordingly 
					if(typeof mathLog[i]=== "number"){
						console.log(oporation)
						if(oporation == "addition"){
							finalAnswer += mathLog[i]
						}
						else if(oporation == "subtration"){
							console.log(finalAnswer, " - ", mathLog[i])
							finalAnswer = finalAnswer - mathLog[i]
						}
						else if(oporation == "division"){
							finalAnswer = finalAnswer/mathLog[i]
						}
						else if(oporation == "multiplication"){
							console.log(finalAnswer)
							finalAnswer = finalAnswer * mathLog[i]
						}
						else if(oporation == "power"){
							
							finalAnswer = Math.pow(finalAnswer,mathLog[powerLocation+1])
						}
					}else if(typeof mathLog[i]=== "string"){
						if(mathLog[i]== "+"){
							oporation = "addition";
						}
						else if(mathLog[i]== "-"){
							oporation = "subtration";
						}
						else if(mathLog[i]== "/"){
							oporation = "division";
						}
						else if(mathLog[i]== "*"){
							oporation = "multiplication";
						}
						else if(mathLog[i]== "^"){
							oporation = "power";
							powerLocation = i;
						}
					}
				}
				console.log(finalAnswer)
				document.getElementById("answerBlock").innerHTML = finalAnswer;
				finalAnswer = 0;
				oporation = "addition";
				tempDisplay = "";
				mathLog = [];
			}