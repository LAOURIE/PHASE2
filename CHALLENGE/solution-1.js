// solution-1.js

// function for student grades
function grade(mark){
    if(mark === ""){
        return "Compute the neccesitated value";
    }
    else if (mark > 79){
        return"A";
    }
    else if (mark => 60 && mark <=79){
        return "B";
    }
    else if (mark => 49 && mark <= 60){
        return "C";
    }
    else if (mark => 40  ){
        return"D";
    }
    else {
        return"E";
    }
}




