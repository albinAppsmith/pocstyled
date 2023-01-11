import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import styled from 'styled-components';
import { token } from '@atlaskit/tokens';
const Main = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${token('color.background.default')};
  background-color: ${token('color.text.accent.purple.bolder')};
  height: 100%;
  width: 300px;
  padding-top: 4rem;
`;

const Select = styled.select`
  padding: 4px;
  border-width: 1px;
  border-style: solid;
`;


function App() {

  const [buttonCount, setButtonCount] = useState(5);
  const [padding, setPadding] = useState("0.5rem");
  const [borderWidth, setBorderWidth] = useState("1px");
  const [buttonColor, setButtonColor] = useState(token('color.text.accent.orange'));
  const [fontSize, setFontSize] = useState("1rem");
  const [margin, setMargin] = useState("2px");
  const [color, setColor] = useState(token('color.text.accent.orange.bolder'));

  const buttons = [];
  for(let i = 0; i < buttonCount; i++) {
    buttons.push(
      <Button
        padding={padding}
        borderWidth={borderWidth}
        borderColor={buttonColor}
        fontSize={fontSize}
        margin={margin}
        backgroundColor={buttonColor}
        color={color}
        key={i.toString()}
      >
        Button
      </Button>
    );
  }

  return (
    <Main className="App">
      <LeftSection>
        <h1>Buttons</h1>
        <ButtonContainer>
          {buttons}
        </ButtonContainer>
      </LeftSection>
      <Sidebar>
        <label>Button Count</label>
        <input type="number" value={buttonCount} onChange={(e) => {
          setButtonCount(e.target.value);
          console.log(e.target.value);
        }} />
        <br/>
        <button onClick={() => setButtonCount(buttonCount + 10)}>Add 10</button>
        <br/>
        <button onClick={() => setButtonCount(buttonCount + 100)}>Add 100</button>
        <br/>
         <button onClick={() => setButtonCount(buttonCount + 1000)}>Render 1000 buttons</button>
        <br/>
        <label>Padding</label>
        <Select value={padding} onChange={(e) => setPadding(e.target.value)}>
          <option value="0">Padding</option>
          <option value="0.5rem">0.5rem</option>
          <option value="1rem">1rem</option>
          <option value="1.5rem">1.5rem</option>
          <option value="2rem">2rem</option>
        </Select>
        <br/>
        <label>Border Width</label>
        <Select value={borderWidth} onChange={(e) => setBorderWidth(e.target.value)}>
          <option value="0">Border Width</option>
          <option value="1px">1 px</option>
          <option value="2px">2 px</option>
          <option value="3px">3 px</option>
        </Select>
        <br/>
        <label>Button Color</label>
        <Select value={buttonColor} onChange={(e) => setButtonColor(e.target.value)}>
          <option value="white">Button Color</option>
          <option value={`${token('color.border.accent.orange')}`}>Orange</option>
          <option value={`${token('color.border.accent.blue')}`}>Blue</option>
          <option value={`${token('color.text.accent.green.bolder')}`}>Green</option>
          <option value={`${token('color.border.accent.red')}`}>Red</option>
        </Select>
        <br/>
        <label>Font Size</label>
        <Select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
          <option value="0">Font Size</option>
          <option value="1rem">1 rem</option>
          <option value="1.5rem">1.5 rem</option>
          <option value="2rem">2 rem</option>
        </Select>
        <br/>
        <label>Margin</label>
        <Select value={margin} onChange={(e) => setMargin(e.target.value)}>
          <option value="0">Margin</option>
          <option value="2px">2 px</option>
          <option value="4px">4 px</option>
          <option value="6px">6 px</option>
        </Select>
        <br/>
        <label>Color</label>
        <Select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="white">Color</option>
          <option value={`token('color.text')`}>Black</option>
          <option value="white">White</option>
        </Select>
      </Sidebar>
    </Main>
  );
}

export default App;
