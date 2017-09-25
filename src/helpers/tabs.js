import asyncComponent from '../components/asyncComponent';

export function orderComparator(firstTab, secondTab) {
  return firstTab.order - secondTab.order;
}
export function transformToLinkFormat(tab) {
  return {
    path: tabToRouteLink(tab),
    title: tab.title
  };
}
export function transformToRouteFormat(tab) {
  return {
    path: tabToRouteLink(tab),
    component: makeAsyncTab(tab.path)
  };
}

export function makeAsyncTab(path) {
  return asyncComponent(() => loadTabComponent(path));
}

export function tabToRouteLink(tab) {
  return `/${tab.id}`;
}

export function loadTabComponent(path) {
  return import(`../${path}`);
}
