// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]


function trim(){
 const  name = '     kimmi            '
 const trimedName = name.trim();
 console.log(trimedName);
}

function changetoLowerCase(){
    const lowerCase = 'KimsdfisdMODDOJDO';
    const lowerCaseValue = lowerCase.toLocaleLowerCase();
    console.log(lowerCaseValue);
}

function changeToUpperCase(){
    const upperCase = 'KimsdfisdMODDOJDO';
    const upperCaseValue = lowerCase.toLocalUpperCase();
    console.log(upperCaseValue);
}

module.exports.trim = trim;
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changeToUpperCase = changeToUpperCase