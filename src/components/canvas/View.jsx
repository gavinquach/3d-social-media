import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { View as ViewImpl } from '@react-three/drei';
import { styled } from 'styled-components';
import { Three } from '../../helpers/components/Three';
import { useLocation, useRoute } from 'wouter';

// Set default styles
const ViewContainerStyled = styled.div`
  width: 40rem;
  height: 52rem;
`;

const View = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef(null);
  useImperativeHandle(ref, () => localRef.current);

  const [, params] = useRoute("/item/:id");
  const [location, setLocation] = useLocation();

  // add "Escape" key press event listener
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setLocation("/");
      }
    };

    if (location !== "/") {
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [location]);

  return (
    <>
      <ViewContainerStyled ref={localRef} {...props} >
        <a
          style={{ position: "absolute", top: 0, left: 0, fontSize: "2.5rem" }}
          href="#"
          onClick={() => setLocation("/")}
        >
          {params ? "< Back" : "Double click content to enter full view"}
        </a>
      </ViewContainerStyled>

      <Three>
        <ViewImpl track={localRef}>
          {children}
        </ViewImpl>
      </Three>

    </>
  );
});
View.displayName = 'View';

export default View;
