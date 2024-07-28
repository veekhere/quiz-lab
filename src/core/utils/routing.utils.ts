import { RouteConstants } from '@constants';
import { rootRoute } from '@router';


export function currentRoute() {
  const path = window?.location?.pathname?.substring(1)?.split("/");
  let currentRoute = RouteConstants.ROOT;

  if (path.length) {
    currentRoute = rootRoute?.children?.find((child) => child?.path?.substring(1) === path[0])?.key
      ?? RouteConstants.ROOT;
  }

  return currentRoute;
}
