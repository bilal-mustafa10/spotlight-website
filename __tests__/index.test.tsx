import * as React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

function Page(): React.JSX.Element {
  return <h1>Redefining SaaS</h1>;
}

describe('Home', () => {
  it('renders a heading', () => {
    render(<Page />);

    const heading = screen.getByRole('heading', {
      name: /Redefining SaaS/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
