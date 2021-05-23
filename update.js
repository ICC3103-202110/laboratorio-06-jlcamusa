

//edit

function update(input,model){
    const {LR} = input
    const {value} = input
    const {Type_1} = input
    const {Type_2} = input

    if(LR === true && Type_1 === Type_2){
        return {
            ...model,
            leftValue: value,
            leftUnit: Type_1,
            rightValue: value,
            rightUnit: Type_2
        }
    }

    if(LR === true && Type_1 === 'Celsius' && Type_2 === 'Kelvin' ){
        return {
            ...model,
            leftValue: value,
            leftUnit: Type_1,
            rightValue: value + 273.15,
            rightUnit: Type_2
        }
    }
    
    if(LR === true && Type_1 === 'Celsius' && Type_2 === 'Farenheit' ){
        return {
            ...model,
            leftValue: value,
            leftUnit: Type_1,
            rightValue: value * (9.0/5.0) + 32,
            rightUnit: Type_2
        }
    }

    if(LR === true && Type_1 === 'Farenheit' && Type_2 === 'Celsius' ){
        return {
            ...model,
            leftValue: value,
            leftUnit: Type_1,
            rightValue: (value - 32) * (5.0/9.0),
            rightUnit: Type_2
        }
    }

    if(LR === true && Type_1 === 'Farenheit' && Type_2 === 'Kelvin' ){
        return {
            ...model,
            leftValue: value,
            leftUnit: Type_1,
            rightValue: ((value - 32) * (5.0/9.0)) + 273.15,
            rightUnit: Type_2
        }
    }

    if(LR === true && Type_1 === 'Kelvin' && Type_2 === 'Celsius' ){
        return {
            ...model,
            leftValue: value,
            leftUnit: Type_1,
            rightValue: value - 273.15,
            rightUnit: Type_2
        }
    }

    if(LR === true && Type_1 === 'Kelvin' && Type_2 === 'Farenheit' ){
        return {
            ...model,
            leftValue: value,
            leftUnit: Type_1,
            rightValue: ((value - 273.15) * (9.0/5.0)) + 32,
            rightUnit: Type_2
        }
    }
    

    ///separacion///
    
    
    if(LR === false && Type_1 === 'Celsius' && Type_2 === 'Kelvin' ){
        return {
            ...model,
            leftValue: value + 273.15,
            leftUnit: Type_2,
            rightValue: value,
            rightUnit: Type_1
        }
    }
    
    if(LR === false && Type_1 === 'Celsius' && Type_2 === 'Farenheit' ){
        return {
            ...model,
            leftValue: value * (9.0/5.0) +32,
            leftUnit: Type_2,
            rightValue: value,
            rightUnit: Type_1
        }
    }

    if(LR === false && Type_1 === 'Farenheit' && Type_2 === 'Celsius' ){
        return {
            ...model,
            leftValue: (value - 32) * (5.0/9.0),
            leftUnit: Type_2,
            rightValue: value,
            rightUnit: Type_1
        }
    }
   
    if(LR === false && Type_1 === 'Farenheit' && Type_2 === 'Kelvin' ){
        return {
            ...model,
            leftValue: ((value - 32) * (5.0/9.0)) + 273.15,
            leftUnit: Type_2,
            rightValue: value,
            rightUnit: Type_1
        }
    }

    if(LR === false && Type_1 === 'Kelvin' && Type_2 === 'Celsius' ){
        return {
            ...model,
            leftValue: value - 273.15,
            leftUnit: Type_2,
            rightValue: value,
            rightUnit: Type_1
        }
    }

    if(LR === false && Type_1 === 'Kelvin' && Type_2 === 'Farenheit' ){
        return {
            ...model,
            leftValue: ((value - 273.15) * (9.0/5.0)) + 32,
            leftUnit: Type_2,
            rightValue: value,
            rightUnit: Type_1
        }
    }
    
}

module.exports = {
    update
}