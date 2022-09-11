const Intern = require ("../lib/Intern")

test ("can set intern", () => {
    const emp = new Intern ("Dennis", "11121", "Dennis@gimal.com", "Rugby College");

    expect (emp.name).toBe("Dennis");
    expect (emp.id).toBe("11121");
    expect (emp.email).toBe("Dennis@gimal.com");
    expect (emp.school).toBe("Rugby College");
});

test ("can get intern", () => {
    const emp = new Intern ("Dennis", "11121", "Dennis@gimal.com", "Rugby College");
    const role = "Intern"
 
    expect (emp.getName()).toBe("Dennis");
    expect (emp.getId()).toBe("11121");
    expect (emp.getEmail()).toBe("Dennis@gimal.com");
    expect (emp.getSchool()).toBe("Rugby College");
    expect (emp.getRole()).toEqual(role);
})