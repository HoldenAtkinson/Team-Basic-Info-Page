const Manager = require("../lib/Manager");
const manager = new Manager(
  "holden",
  "7429",
  "holdenatkinson@gmail.com",
  "holdenjatkinson",
  "777"
);

test("test for constructor values of intern object", () => {
  expect(manager.name).toBe("holden");
  expect(manager.id).toBe("7429");
  expect(manager.email).toBe("holdenatkinson@gmail.com");
  expect(manager.officeNumber).toBe("University of Utah");
});

test("test for getName() method.", () => {
  expect(manager.getName).toBe("holden");
});

test("test for getId() method.", () => {
  expect(manager.getId).toBe("7429");
});

test("test for getEmail() method.", () => {
  expect(manager.getEmail).toBe("holdenatkinson@gmail.com");
});

test("test for getOfficeNumber() method.", () => {
    expect(manager.getofficeNumber).toBe("777");
  });

test("test for getRole() method.", () => {
  expect(manager.getRole).toBe("Manager");
});