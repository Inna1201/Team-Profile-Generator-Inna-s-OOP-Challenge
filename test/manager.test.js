const Manager = require ("../lib/Manager")

test ("can set manager", () => {
    const emp = new Manager("Dennis", "11121", "Dennis@gimal.com", "17")

    expect (emp.name).toBe("Dennis");
    expect (emp.id).toBe("11121");
    expect (emp.email).toBe("Dennis@gimal.com");
    expect (emp.officeNum).toBe("17");


    
})