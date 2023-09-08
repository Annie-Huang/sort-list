// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import jsonData from '../_data/data.json';

// https://kentcdodds.com/blog/stop-mocking-fetch
async function mockFetch(url, config) {
  switch (url) {
    case 'http://localhost:4000/results': {
      return {
        ok: true,
        status: 200,
        json: async () => jsonData.results,
      };
    }
    default: {
      throw new Error(`Unhandled request: ${url}`);
    }
  }
}

beforeAll(() => jest.spyOn(window, 'fetch'));
beforeEach(() => window.fetch.mockImplementation(mockFetch));
