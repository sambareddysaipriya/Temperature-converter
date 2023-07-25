function main(){
    var i=document.getElementById("inputnum").value;
    let f=document.getElementById("from").value;
    let t=document.getElementById("to").value;
    let r=0;
    if(f==="Celsius"){
        if(t==="Fahrenheit"){
            r=((9/5)*i)+32;
        }
        else if(t==="Kelvin"){
            r=i+273;
        }
        else if(t==="Rankine"){
            r=(i*(9/5))+491.67;
        }
    }
    else if(f==="Fahrenheit"){
        if(t==="Celsius"){
            r=(5/9)*(i-32);
        }
        else if(t==="Kelvin"){
            r=i-273;
        }
        else if(t==="Rankine"){
            r=i+459.67;
        }
    }
    else if(f==="Rankine"){
        if(t==="Celsius"){
            r=(i*(5/9))-273.15;
        }
        else if(t==="Fahrenheit"){
            r=i-459.67;
        }
        else if(t==="Kelvin"){
            r=i*(5/9);
        }
    }
    document.getElementById("result").value=r;
    event.preventDefault();
}