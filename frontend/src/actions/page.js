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
  return { type: SWITCH_PAGE, page}
}
