import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Participants from './Participants';

const participants = [
  {
    firstName: 'Iahgo',
    lastName: 'Barros',
    participation: 10,
  },
  {
    firstName: 'Raniel',
    lastName: 'Silva',
    participation: 30,
  },
  {
    firstName: 'Iandé',
    lastName: 'Bailey',
    participation: 60,
  }
];

describe('Participants component', () => {
  afterEach(cleanup);

  it('renders the correct list of names and participations', () => {
    const { getByText } = render(<Participants participants={participants} />);

    participants.forEach(({ firstName, lastName, participation }) => {
      const name = `${firstName} ${lastName}`;
      const participationText = `Participation: ${participation}`;
      expect(getByText(name)).toBeInTheDocument();
      expect(getByText(participationText)).toBeInTheDocument();
    });
  });
});
