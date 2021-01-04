import authReducer from '../../reducers/auth';

const uid = 'lmn4560';

test('should set uid on login', () => {
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer(undefined, action);
    expect(state.uid).toBe(uid);
});

test('should clear uid on logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({ uid }, action);
    expect(state).toEqual({});
});