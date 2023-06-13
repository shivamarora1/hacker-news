import { render } from "@testing-library/react";
import Home from "../src/pages/[[...type]]";
import { useRouter } from 'next/router'
import dayjs from 'dayjs';

import fs from "fs";

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

it("renders homepage unchanged", () => {
  useRouter.mockReturnValue({ query: {},asPath: ""})
  const mockFromNow = jest.spyOn(dayjs.prototype, 'fromNow').mockReturnValue('2 days ago'); 

  const raw = fs.readFileSync("__tests__/test.json", "utf8")
  const items = JSON.parse(raw);
  const page = 0

  const { container } = render(<Home items={items} page={page} />);
  expect(container).toMatchSnapshot();

  mockFromNow.mockRestore();
});




