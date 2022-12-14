const Employee = require ("../lib/Employee")

test ("can set employee", () => {
    const emp = new Employee("Inna", "12011", "inna@gimal.com")

    expect (emp.name).toBe("Inna");
    expect (emp.id).toBe("12011");
    expect (emp.email).toBe("inna@gimal.com"); 
});

test ("can get employee", () => {
    const emp = new Employee("Inna", "12011", "inna@gimal.com")

    expect (emp.getName()).toBe("Inna");
    expect (emp.getId()).toBe("12011");
    expect (emp.getEmail()).toBe("inna@gimal.com");
})