import { render } from '@testing-library/react';
import Tweet from './Tweet';

describe('Tweet Component', () => {
  it('Default props', () => {
    const content = 'Hello World';
    const user = {
      username: 'gmoralesc',
      name: 'Gustavo Morales',
      email: 'gustavo.morales@gmail.com',
    };
    const { getByText } = render(<Tweet content={content} user={user} />);
    expect(getByText(content)).toBeTruthy();
    expect(getByText(`${user.name} @${user.username}`)).toBeTruthy();
  });
});
