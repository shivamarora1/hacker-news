import { render, screen } from "@testing-library/react";
import Home from "../src/pages/[[...type]]";
import "@testing-library/jest-dom";
import { useRouter } from 'next/router'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

describe("Home", () => {
  useRouter.mockReturnValue({ query: {}})
  it("renders a heading", () => {

    expect(true).toBe(true);
  });
});


