// Liskov Substitution Principle

// Bad Example

class Person {
  access() {
    console.log("You have access");
  }
}

class Frontend extends Person {
  developFrontend() {}
}

class Backend extends Person {
  developBackend() {}
}

class CompanyGuest extends Person {
  access() {
    throw new Error("You don't have access to see this resurs!");
  }
}

function hasAccess(member) {
  member.access();
}

// hasAccess should work with all classes that are inherited from Person, but CompanyGuest don't have access

hasAccess(new Frontend());
hasAccess(new Backend());
hasAccess(new CompanyGuest());

// ********************************************** //

// Good Example

class GoodPerson {}

class GoodMember extends GoodPerson {
  access() {
    console.log("You have access");
  }
}

class GoodGuest extends GoodPerson {
  isGuest = true;
}

class GoodFrontend extends GoodMember {
  developFrontend() {}
}

class GoodBackend extends GoodMember {
  developBackend() {}
}

class GoodCompanyGuest extends GoodGuest {
  access() {
    throw new Error("You don't have access to see this resurs!");
  }
}

// hasAccess should work with all classes that are inherited from Member, but not from Guest

hasAccess(new Frontend());
hasAccess(new Backend());
hasAccess(new CompanyGuest()); // There should be member!
