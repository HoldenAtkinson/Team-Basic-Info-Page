const Engineer = require("../lib/Engineer");
const engineer = new Engineer(
  "holden",
  "7429",
  "holdenatkinson@gmail.com",
  "holdenjatkinson"
);

test("test for constructor values of engineer object", () => {
  expect(engineer.name).toBe("holden");
  expect(engineer.id).toBe("7429");
  expect(engineer.email).toBe("holdenatkinson@gmail.com");
  expect(engineer.github).toBe("holdenjatkinson");
});

test("test for getName() method.", () => {
  expect(engineer.getName).toBe("holden");
});

test("test for getId() method.", () => {
  expect(engineer.getId).toBe("7429");
});

test("test for getEmail() method.", () => {
  expect(engineer.getEmail).toBe("holdenatkinson@gmail.com");
});

test("test for getGithub() method.", () => {
  expect(engineer.getGithub).toBe("holdenjatkinson");
});

test("test for getRole() method.", () => {
  expect(engineer.getRole).toBe("Employee");
});
