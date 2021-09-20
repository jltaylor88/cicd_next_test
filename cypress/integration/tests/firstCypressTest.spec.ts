describe("default navigation", () => {
  it("should navigate us to the documentation page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000");

    // Find the documentation link
    const link = cy.get("a").contains("Documentation");

    // Click on the link
    link.click();

    // Check the url
    cy.url().should("include", "/docs");
  });
});
