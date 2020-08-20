import React from 'react';
import styled from 'styled-components'

const ToggleStyle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 20%;
    margin-right: 2px;
    background: ${({ theme }) => theme.content};
    border: 2px solid var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    right: 0%;
    top: 40%;
    box-shadow: rgba(8, 11, 14, 0.06) 0px 0px 1px 0px, rgba(8, 11, 14, 0.1) 0px 3px 3px -1px;
    outline: none;
    &:hover{
        cursor: pointer;
    }
    svg {
        fill: ${({theme}) => theme.text};
    }
`;

const Toggle = ({children, ...rest}) => {
    React.useEffect(()=> {
        dragElement(document.getElementById("drag"));
        function dragElement(elmnt) {
        var posElmntX = 0, posElmntY = 0, posCursorX = 0, posCursorY = 0;
        if (document.getElementById(elmnt.id )) {
            /* if present, the header is where you move the DIV from:*/
            document.getElementById(elmnt.id).onmousedown = dragMouseDown;
        } else {
            /* otherwise, move the DIV from anywhere inside the DIV:*/
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            posCursorX = e.clientX;
            posCursorY = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            posElmntX = posCursorX - e.clientX;
            posElmntY = posCursorY - e.clientY;
            posCursorX = e.clientX;
            posCursorY = e.clientY;

            // set the element's new position:
            elmnt.style.left = (elmnt.offsetLeft - posElmntX) + "px";
            elmnt.style.top = (elmnt.offsetTop - posElmntY) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
        }
    })
    return(
        <ToggleStyle {...rest} id="drag">
            {children}
        </ToggleStyle>
    );
}

export default Toggle;