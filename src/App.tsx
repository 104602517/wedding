import Nav from './components/Nav'
import { Route, useLocation } from 'react-router-dom'
import NameSearchIndex from './components/NameSearch'
import AboutUsIndex from './components/AboutUs'
import { CSSTransition } from "react-transition-group";
import { useCallback, useRef, useContext, useEffect } from 'react';
import WhereIndex from './components/Where';
import Modal from './components/Modal'
import { StoreContext } from './context/index'


interface AppRoute {
  path: string;
  title: string;
  Component: React.ComponentType;
}

function App() {
  const location = useLocation();
  const useragent = navigator.userAgent.toLowerCase()
  const isWebView = useragent.includes('line') || 
                    useragent.includes('instagram') ||
                    useragent.includes('messenger') ||
                    useragent.includes('facebook') ||
                    useragent.includes('fban') ||
                    useragent.includes('fbav') 

// Line
// Instagram
//messenger
// facebook
// fb
// FBAN / FBAV
  

  const appRoutes: AppRoute[] = [
    { path: "/wedding", title: "我坐哪裡?", Component: NameSearchIndex },
    { path: "/about-us", title: "我們是誰?", Component: AboutUsIndex },
    { path: "/where", title: "這是哪裡?", Component: WhereIndex }
  ];
  const isMatch = useCallback(
    (path: string): boolean => {
      if (location.pathname === '/wedding/') location.pathname = '/wedding'
      return location.pathname === path ? true : false;
    },
    [location]
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const routeRefs: any = useRef(null)
  const { isShowModal, setIsMainRef } = useContext(StoreContext)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mainRef = useRef<any>(null)

  useEffect(() => {
    if (mainRef) {
      setIsMainRef(mainRef)
    }
  }, [mainRef, setIsMainRef])

  return (
      <>

        <Nav/>
        { isShowModal && <Modal/>}
        <main className={`main ${isWebView ? 'webview' : null}`} ref={mainRef}>
          {appRoutes.map(({ path, Component }, index) => {
          return (
            <Route key={index} exact path={path}>
              {() => {
                // Route callback ensures the transitions are loaded correctly
                return (
                  <CSSTransition
                    nodeRef={routeRefs[index]}
                    in={isMatch(path)}
                    timeout={750}
                    classNames="fade"
                    unmountOnExit
                    appear
                  >
                    <div ref={routeRefs[index]} className="fade">
                      <Component/>
                    </div>
                  </CSSTransition>
                );
              }}
            </Route>
          );
        })}
        </main>
      </>
  )
}

export default App
