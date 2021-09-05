const Homepage = require("../support/pages/Homepage");
let homepage = new Homepage();
const homepageData = require("../support/datatest/homepageData");

describe("bdd", () => {
  it("visit bdd atlas web", () => {
    homepage.visit("");
  });

  it("type quote", () => {
    homepage.type_quote(homepageData.datatest.quote);
  });

  it("select colour", () => {
    homepage.select_colour(homepageData.datatest.colour);
  });

  it("submit quote", () => {
    homepage.submit_quote(
      homepageData.datatest.quote,
      homepageData.datatest.colour
    );
  });

  it("clear spesific quote", () => {
    homepage.clear_quote(homepageData.datatest.quote);
  });
});
