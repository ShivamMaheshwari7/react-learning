import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page TestCases", () => {
  // Jest and React testing Library provide this function which will get called before executing test cases only once
  beforeAll(() => {
    //console.log("Before All");
  });

  // this callback function will be called before executing every test case
  beforeEach(() => {
    //console.log("Before Each");
  });

  // this callback function will be called after running all the test cases
  afterAll(() => {
    //console.log("After All");
  });

  // this callback function will be called after running/executing each test case
  afterEach(() => {
    //console.log("After Each");
  });

  test("Should load contact us component", () => {
    // whenever we are testing a UI component , first we need to render the component on jsdom
    // it will render on jsdom
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
    // toBeInTheDocument() func we will use whenever we have to check whether something is loaded or not
  });

  test("Should load button inside Contact Component", () => {
    render(<Contact />);

    // multiple ways to locate/fetch button

    //const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside Contact Component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the Contact Component", () => {
    render(<Contact />);
    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    // Assertion
    expect(inputBoxes.length).toBe(2);
    //expect(inputBoxes.length).not.toBe(3);
  });
});
