import * as React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

function Page(): React.JSX.Element {
  return <h1>Redefining SaaS</h1>;
}

describe('Home', () => {
  it('renders homepage unchanged', () => {
    const { container } = render(<Page />);

    expect(container).toMatchSnapshot();
  });
});
