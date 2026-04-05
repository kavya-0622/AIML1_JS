function calculateResult(){
    const n = document.getElementById("subjects").value;
    let i;
    let total=0;
    for(i=0;i<n;i++){
        let x=parseFloat(prompt("Enter the subject no."+(i+1)));
        total += x;
    }
    let avg=total/n;
    let grade
    if(avg>90){
        grade='A+';
    }
    else if(avg>=75){
        grade='A';
    }
    else if(avg>=60){
        grade='B';
    }
    else if(avg>=50){
        grade='C'; 
    }
    else {
        grade='F';
    }

    if(avg>=40){
        result="Pass";
    }
    else{
        result="Fail"
    }

    document.getElementById("result").innerHTML="Total Marks"+total+"<br/>"
    +"Average Marks: "+avg.toFixed(2)+"<br/>"+"Grade: "+grade+"<br/>"
    +"Result: "+result +"<br/>"
}