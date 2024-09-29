export const selectorIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectorUser = (state) => state.auth.user;
export const selectorLoading = (state) => state.auth.isLoading;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;