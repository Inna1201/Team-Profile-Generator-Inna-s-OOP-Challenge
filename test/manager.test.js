const Manager = require("../lib/Manager")

test("can set manager", () => {
    const emp = new Manager("Nina", "25041", "nina@gimal.com", "88");

    expect(emp.name).toBe("Nina");
    expect(emp.id).toBe("25041");
    expect(emp.email).toBe("nina@gimal.com");
    expect(emp.officeNum).toBe("88");
});

test("can get manager", () => {
    const emp = new Manager("Nina", "25041", "nina@gimal.com", "88");
    const role = "Manager";

    expect(emp.getName()).toBe("Nina");
    expect(emp.getId()).toBe("25041");
    expect(emp.getEmail()).toBe("nina@gimal.com");
    expect(emp.getOfficeNum()).toBe("88");
    expect(emp.getRole()).toEqual(role);
})