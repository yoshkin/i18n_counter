// @ts-check

import fs from 'fs';
import path from 'path';
import testingLibrary from '@testing-library/dom';
import '@testing-library/jest-dom';

import run from '../src/application.js';

const { screen, within } = testingLibrary;

const getFixture = (filename) => fs.readFileSync(path.join('__fixtures__', filename)).toString();

const initialData = [
  {
    containerName: 'container-1',
    state: { lng: 'ru', clicksCount: 99 },
    expectedState: { lng: 'ru', clicksCount: 99 },
    language: 'Русский',
    textButton: 'кликов',
  },
  {
    containerName: 'container-2',
    state: { lng: 'en' },
    expectedState: { lng: 'en', clicksCount: 0 },
    language: 'English',
    textButton: 'clicks',
  },
];

beforeAll(() => {
  const initHtml = getFixture('index.html');
  document.body.innerHTML = initHtml;
  initialData.forEach(async ({ containerName, state }) => {
    await run(screen.getByTestId(containerName), state);
  });
});

test.each(initialData)('Test', async (data) => {
  const {
    containerName,
    language,
    expectedState,
    textButton,
  } = data;
  const container = screen.getByTestId(containerName);
  expect(within(container).getByRole('button', { name: `${expectedState.clicksCount} ${textButton}` })).toBeInTheDocument();
  expect(within(container).getByRole('button', { name: language })).toHaveClass('btn-primary');
  const regexp = new RegExp(`^((?!${language}).)*$`);
  within(container).getAllByRole('button', { name: regexp }).forEach((button) => expect(button).not.toHaveClass('btn-primary'));
});
