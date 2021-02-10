import { render, fireEvent } from '@testing-library/react';
import Login from './Login';
import API from '../api';

jest.mock('../api');

describe('Login', () => {
  it('Incorrect', async () => {
    const { getByTestId, getByRole, findByText } = render(<Login />);

    API.login.mockRejectedValue('Datos no válidos');

    const errorMessage = 'Incorrect username or password';
    const username = getByTestId(/username/);
    const password = getByTestId(/password/);
    const button = getByRole(/submit/);

    fireEvent.change(username, { target: { value: 'Gustavo' } });
    fireEvent.change(password, { target: { value: '123456' } });
    fireEvent.click(button);

    expect(await findByText(errorMessage)).toBeTruthy();
  });
});
