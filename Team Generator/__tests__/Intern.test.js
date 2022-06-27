const Intern = require("../lib/Intern");
const intern = new Intern(
  "holden",
  "7429",
  "holdenatkinson@gmail.com",
  "holdenjatkinson",
  "University of Utah"
);

test("test for constructor values of intern object", () => {
  expect(intern.name).toBe("holden");
  expect(intern.id).toBe("7429");
  expect(intern.email).toBe("holdenatkinson@gmail.com");
  expect(intern.school).toBe("University of Utah");
});

test("test for getName() method.", () => {
  expect(intern.getName).toBe("holden");
});

test("test for getId() method.", () => {
  expect(intern.getId).toBe("7429");
});

test("test for getEmail() method.", () => {
  expect(intern.getEmail).toBe("holdenatkinson@gmail.com");
});

test("test for getSchool() method.", () => {
    expect(intern.getSchool).toBe("University of Utah");
  });

test("test for getRole() method.", () => {
  expect(intern.getRole).toBe("Intern");
});