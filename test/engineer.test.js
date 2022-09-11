const Engineer = require ("../lib/Engineer")

test ("can set engineer", () => {
    const emp = new Engineer("Inna", "12011", "inna@gimal.com", "Inna1201")
 
    expect (emp.name).toBe("Inna");
    expect (emp.id).toBe("12011");
    expect (emp.email).toBe("inna@gimal.com");
    expect (emp.github).toBe("Inna1201");
});

test ("can get engineer", () => {
    const emp = new Engineer("Inna", "12011", "inna@gimal.com", "Inna1201")
    const role = "Engineer"
 
    expect (emp.getName()).toBe("Inna");
    expect (emp.getId()).toBe("12011");
    expect (emp.getEmail()).toBe("inna@gimal.com");
    expect (emp.getGithub()).toBe("Inna1201");
    expect (emp.getRole()).toEqual(role);
})