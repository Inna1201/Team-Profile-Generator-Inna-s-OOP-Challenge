const Engineer = require ("../lib/Engineer")

test ("can set engineer", () => {
    const emp = new Engineer("Inna", "12011", "inna@gimal.com", "Inna1201")
 
    expect (emp.name).toBe("Inna");
    expect (emp.id).toBe("12011");
    expect (emp.email).toBe("inna@gimal.com");
    expect (emp.github).toBe("Inna1201");

    
})