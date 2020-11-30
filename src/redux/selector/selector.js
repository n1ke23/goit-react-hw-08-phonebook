
export const contacts = state => state.contact.contacts;
export const items = state => contacts(state).items;
export const notify = state => contacts(state).isNotify;

