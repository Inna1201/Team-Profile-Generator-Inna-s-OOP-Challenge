const Intern = require ("../lib/Intern")

test ("can set intern", () => {
    const emp = new Intern("Nina", "25041", "nina@gimal.com", "Rugby College")

    expect (emp.name).toBe("Nina");
    expect (emp.id).toBe("25041");
    expect (emp.email).toBe("nina@gimal.com");
    expect (emp.school).toBe("Rugby College");
    
})