import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import App from './components/App';
import ToggleButton from './components/ToggleButton';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders header on page load', () => {
  render(<App />);
  const headerElement = screen.getByText(/students/i);
  expect(headerElement).toBeInTheDocument();
});

it("changes value when clicked", () => {

  const onChange = jest.fn();

  act(() => {
    render(<ToggleButton handleToggle={onChange} toggle={false} prop1={<>+</>} prop2={<>-</>} />, container);
  });

  // get a hold of the button element, and trigger some clicks on it
  const button = document.querySelector("button");
  expect(button.innerHTML).toBe("+");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(onChange).toHaveBeenCalledTimes(1);

  act(() => {
    for (let i = 0; i < 5; i++) {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });

  expect(onChange).toHaveBeenCalledTimes(6);
});
