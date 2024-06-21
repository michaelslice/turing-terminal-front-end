import { useEffect, useRef } from "react";

function useDragger(id: string): void {

    const isDragging = useRef<boolean>(false);
    const isResizing = useRef<boolean>(false);
    const resizeDirection = useRef<string | null>(null);

    const coords = useRef<{
      startX: number,
      startY: number,
      startWidth: number,
      startHeight: number,
      lastX: number,
      lastY: number
    }>({
      startX: 0,
      startY: 0,
      startWidth: 0,
      startHeight: 0,
      lastX: 0,
      lastY: 0
    })
  
    useEffect(() => {
  
      const target = document.getElementById(id);
      if (!target) throw new Error("Element with given id doesn't exist");
  
      const container = target.parentElement;
      if (!container) throw new Error("target element must have a parent");
  
      const onMouseDown = (e: MouseEvent) => {
        if(isResizeArea(e)) {
            isResizing.current = true;
            resizeDirection.current = getResizeDirection(e);
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
            coords.current.startWidth = target.offsetWidth;
            coords.current.startHeight = target.offsetHeight;
        } else {
            isDragging.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
        }
    }
  
    const onMouseUp = (e: MouseEvent) => {
        isDragging.current = false;
        isResizing.current = false;
        resizeDirection.current = null;
        coords.current.lastX = target.offsetLeft;
        coords.current.lastY = target.offsetTop;
    }

    const onMouseMove = (e: MouseEvent) => {
        if (isDragging.current) {

        const nextX = e.clientX - coords.current.startX + coords.current.lastX;
        const nextY = e.clientY - coords.current.startY + coords.current.lastY;

        target.style.top = `${nextY}px`;
        target.style.left = `${nextX}px`;
        } else if (isResizing.current && resizeDirection.current) {
            resizeElement(e);
        }
    }   
  
    const isResizeArea = (e: MouseEvent): boolean => {
        const resizeAreaWidth = 10; // Resize Handle Width
        return (
            e.clientX > target.offsetLeft + target.offsetWidth - resizeAreaWidth &&
            e.clientY > target.offsetTop + target.offsetHeight - resizeAreaWidth
        );
    };

    const getResizeDirection = (e: MouseEvent): string => {
        const resizeAreaWidth = 10; // Resize Handle Width
        const horizontal = e.clientX > target.offsetLeft + target.offsetWidth - resizeAreaWidth;
        const vertical = e.clientY > target.offsetTop + target.offsetHeight - resizeAreaWidth;
        if(horizontal && vertical) return "bottomRight";
        // TODO ADD MORE DIRECTIONS
        return ""
    };

    const resizeElement = (e: MouseEvent) => {
        const deltaX = e.clientX - coords.current.startX;
        const deltaY = e.clientY - coords.current.startY;

        switch(resizeDirection.current) {
            case "bottomRight":
                target.style.width = `${coords.current.startWidth + deltaX}px`;
                target.style.height = `${coords.current.startHeight + deltaY}px`;
            break;
        // TODO ADD CASES FOR OTHER DIRECTIONS
        default:
            break;
        }
    };

    target.addEventListener('mousedown', onMouseDown);
    target.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseUp);
  
    const cleanup = () => {
        target.removeEventListener('mousedown', onMouseDown);
        target.removeEventListener('mouseup', onMouseUp);
        container.removeEventListener('mousemove', onMouseMove);
        container.removeEventListener('mouseleave', onMouseUp);
    }
  
      return cleanup;
    }, [id])
  
  }

  export default useDragger