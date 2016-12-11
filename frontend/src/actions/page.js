/*
 * Action Types
 */

export const SWITCH_PAGE = 'SWITCH_PAGE';

/*
 * Page Types
 */

export const PAGES = {
  ABOUT: 'ABOUT',
  EDITORIAL: 'EDITORIAL'
}

export function changePage(page) {
  let action = { type: SWITCH_PAGE, page: page};
  console.log(action);
  return action;
}
