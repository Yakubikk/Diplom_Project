export const fakeEndpoints: Record<string, unknown> = {
    'register': {
        id: 'fakeUserId',
        email: 'fake@example.com',
        token: 'fakeToken',
    },
    'login': {
        token: 'fakeToken',
        user: {
            id: 'fakeUserId',
            email: 'fake@example.com',
        },
    },
    'phoneLogin': {
        token: 'fakeToken',
        user: {
            id: 'fakeUserId',
            phone: 'fakePhoneNumber',
        },
    },
};
