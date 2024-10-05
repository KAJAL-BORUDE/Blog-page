//Multiplication Function
function multiplication(num){
    for(let i=1;i<10;i++)
    {
        console.log(num*i);
        
    }
    
}
multiplication(8);

//Temperature to Fahrenheit function
function CalculateTemp(celcius){
    fahrenheit=(celcius*9/5+32);
    console.log(fahrenheit);
}
CalculateTemp(30);

//find numver is positive or negetive
function numberNature(number){
    if(number>0){
        console.log(number+" is positive number");
        
    }
    else{
        console.log(number+" is negetive number");
    }
}
numberNature(45);