import { render, screen } from '@testing-library/react';
import App from './App';

global.ResizeObserver = require('resize-observer-polyfill')

test('Renders the app description', () => {
  render(<App />);
  const linkElement = screen.getByText("LeGM is a tool that lets you compare");
  expect(linkElement).toBeInTheDocument();
});

test('Fetch lebron james id', async () => {
    var id = "";
    try {
        await fetch('http://localhost:3001/search?name=' + "LeBron James")
        .then(response => response.json())
        .then(data => id = data.data[0].id)
    } catch (err) {
        console.log(err)
    }
    expect(id).toBe(237);
});

test('Fetch lebron james position', async () => {
    var position = "";  
  try {
        await fetch('http://localhost:3001/get_stats?player_id=' + 237)
        .then(response => response.json())
        .then(data => { 
          position = data.data[0].position 
        })
    } catch (err) {
        console.log(err)
    }
    expect(position).toBe('F');
});