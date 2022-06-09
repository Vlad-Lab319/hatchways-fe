import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import App from './components/App';
import StudentList from './components/StudentsList';
import ToggleButton from './components/ToggleButton';
// import useApplicationData from '.hooks/useApplicationData';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);});
afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/students/i);
  expect(linkElement).toBeInTheDocument();
});

// test('renders learn react link', () => {
//   render(<StudentList />);
//   const linkElement = screen.getByText(/search by/i);
//   expect(linkElement).toBeInTheDocument();
// });
