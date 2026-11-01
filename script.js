"use strict";

const capabilities = {
  create: {
    title: "Create a website",
    example: "Create a landing page with a blue header and feature cards.",
    response: "Creates a project, writes the HTML and CSS, and adds a responsive layout you can refine through chat.",
    boundary: "Files are saved in your selected owner workspace. Publishing is a separate approval step."
  },
  explore: {
    title: "Explore a project",
    example: "Find where the navigation is defined and explain how it works.",
    response: "Discovers project files, searches relevant source, and reads the code to explain its structure without needing you to paste each file.",
    boundary: "Access is limited to the guarded owner workspace; sensitive files are not exposed."
  },
  improve: {
    title: "Improve the code",
    example: "Make the landing page work on mobile and improve keyboard navigation.",
    response: "Reads the existing files, makes focused changes, and preserves the surrounding behavior and style.",
    boundary: "Changes are saved file by file. An error on a later file does not roll back earlier saved changes."
  },
  validate: {
    title: "Prepare validation",
    example: "Prepare the project's tests so I can approve a run.",
    response: "Prepares a supported test or build command for an isolated, offline Docker run, then reports the result when it is available.",
    boundary: "Only the human can approve execution with /confirm-build in Telegram. The agent cannot approve it or run commands on the host."
  },
  publish: {
    title: "Prepare a release",
    example: "Publish this static website to GitHub Pages.",
    response: "Prepares a GitHub publishing plan with Pages enabled for the owner to review and approve.",
    boundary: "Only the human can approve publishing with /confirm in Telegram. Preparing a plan does not make a site live."
  }
};

const buttons = document.querySelectorAll("[data-capability]");
const title = document.getElementById("capability-title");
const example = document.getElementById("example");
const response = document.getElementById("response");
const boundary = document.getElementById("boundary");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const capability = capabilities[button.dataset.capability];
    if (!capability || !title || !example || !response || !boundary) {
      throw new Error("The capability explorer markup is invalid.");
    }
    buttons.forEach((choice) => {
      choice.setAttribute("aria-pressed", String(choice === button));
    });
    title.textContent = capability.title;
    example.textContent = capability.example;
    response.textContent = capability.response;
    boundary.textContent = capability.boundary;
  });
});
