const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.blue(
        figlet.textSync(
            'Unit Converter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

//possibly change

function getTable(model){
    const {leftValue} = model
    const {leftUnit} = model
    const {rightValue} = model
    const {rightUnit} = model
    return [
        {
            'leftValue': leftValue,
            'leftUnit': leftUnit,
            'rightValue': rightValue,
            'rightUnit': rightUnit
        }
    ]
}

//edit

function inputForm(model){
    const message_1 = 'Left temperature is source?'
    const message_2 = 'Temperature value to convert?'
    const message_3 = 'From?'
    const message_4 = 'To?'

    return inquirer.prompt([
        {
            name: 'LR',
            type: 'confirm',
            message: message_1
        },
        {
            name: 'value',
            type: 'number',
            message: message_2,
        },
        {
            name: 'Type_1',
            type: 'list',
            message: message_3,
            choices: ['Celsius','Farenheit','Kelvin']
        },
        {
            name: 'Type_2',
            type: 'list',
            message: message_4,
            choices: ['Celsius','Farenheit','Kelvin']
        }
    ])
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    inputForm
}