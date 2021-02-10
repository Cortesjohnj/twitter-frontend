import { render } from '@testing-library/react';
import TweetList from './TweetList';
import API from '../api';

jest.mock('../api');

describe('TweetList Component', () => {
  it('List one Tweet', async () => {
    const tweet = {
      id: '1',
      content: 'Hello World',
      user: {
        username: 'gmoralesc',
        name: 'Gustavo Morales',
        email: 'gustavo.morales@gmail.com',
      },
      date: '2 minutes ago',
    };

    API.getTweets.mockResolvedValue([tweet]);

    const { findByText } = render(<TweetList />);

    expect(await findByText(tweet.content)).toBeTruthy();
  });
});
