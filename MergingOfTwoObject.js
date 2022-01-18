const employee={
    empname:"max",
    empage:25
}

const qualification={
    empdesignation:"softwareEngineer"
}

const result = Object.assign(employee,qualification);
console.log(result);