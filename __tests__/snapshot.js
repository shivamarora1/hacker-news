import { render } from "@testing-library/react";
import Home from "../src/pages/[[...type]]";
import { useRouter } from 'next/router'

import fs from "fs";

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

it("renders homepage unchanged", () => {
  useRouter.mockReturnValue({ query: {}})
  const raw = fs.readFileSync("test.txt", "utf8")
  const items = JSON.parse(raw);
  const page = 0

  const { container } = render(<Home items={items} page={page} />);
  expect(container).toMatchSnapshot();
});




