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
        startLeft: number,
        startTop: number,
        startMouseX: number,
        startMouseY: number
    }>({
        startX: 0,
        startY: 0,
        startWidth: 0,
        startHeight: 0,
        startLeft: 0,
        startTop: 0,
        startMouseX: 0,
        startMouseY: 0
    });

    useEffect(() => {
        const target = document.getElementById(id);
        if (!target) throw new Error("Element with given id doesn't exist");

        const container = target.parentElement;
        if (!container) throw new Error("Target element must have a parent");

        const onMouseDown = (e: MouseEvent) => {
            if (isResizeArea(e)) {
                isResizing.current = true;
                resizeDirection.current = getResizeDirection(e);
                coords.current.startX = e.clientX;
                coords.current.startY = e.clientY;
                coords.current.startWidth = target.offsetWidth;
                coords.current.startHeight = target.offsetHeight;
                coords.current.startLeft = target.offsetLeft;
                coords.current.startTop = target.offsetTop;
            } else if (e.target === target) {
                isDragging.current = true;
                coords.current.startMouseX = e.clientX;
                coords.current.startMouseY = e.clientY;
                coords.current.startLeft = target.offsetLeft;
                coords.current.startTop = target.offsetTop;
            }
        };

        const onMouseUp = () => {
            isDragging.current = false;
            isResizing.current = false;
            resizeDirection.current = null;
        };

        const onMouseMove = (e: MouseEvent) => {
            if (isResizing.current && resizeDirection.current) {
                resizeElement(e);
            } else if (isDragging.current) {
                moveElement(e);
            }
        };

        const isResizeArea = (e: MouseEvent): boolean => {
            const resizeAreaWidth = 10; // Resize Handle Width
            const rect = target.getBoundingClientRect();
            return (
                e.clientX >= rect.right - resizeAreaWidth &&
                e.clientX <= rect.right &&
                e.clientY >= rect.bottom - resizeAreaWidth &&
                e.clientY <= rect.bottom
            );
        };

        const getResizeDirection = (e: MouseEvent): string => {
            const resizeAreaWidth = 10; // Resize Handle Width
            const rect = target.getBoundingClientRect();
            const horizontal = e.clientX > rect.left + rect.width - resizeAreaWidth && e.clientX < rect.right;
            const vertical = e.clientY > rect.top + rect.height - resizeAreaWidth && e.clientY < rect.bottom;
            const left = e.clientX < rect.left + resizeAreaWidth;
            const top = e.clientY < rect.top + resizeAreaWidth;

            if (horizontal && vertical) return "bottomRight";
            if (horizontal && top) return "topRight";
            if (left && vertical) return "bottomLeft";
            if (left && top) return "topLeft";
            if (horizontal) return "right";
            if (vertical) return "bottom";
            if (left) return "left";
            if (top) return "top";
            return "";
        };

        const resizeElement = (e: MouseEvent) => {
            const deltaX = e.clientX - coords.current.startX;
            const deltaY = e.clientY - coords.current.startY;

            switch (resizeDirection.current) {
                case "bottomRight":
                    target.style.width = `${coords.current.startWidth + deltaX}px`;
                    target.style.height = `${coords.current.startHeight + deltaY}px`;
                    break;
                case "topRight":
                    target.style.width = `${coords.current.startWidth + deltaX}px`;
                    target.style.height = `${coords.current.startHeight - deltaY}px`;
                    target.style.top = `${coords.current.startTop + deltaY}px`;
                    break;
                case "bottomLeft":
                    target.style.width = `${coords.current.startWidth - deltaX}px`;
                    target.style.height = `${coords.current.startHeight + deltaY}px`;
                    target.style.left = `${coords.current.startLeft + deltaX}px`;
                    break;
                case "topLeft":
                    target.style.width = `${coords.current.startWidth - deltaX}px`;
                    target.style.height = `${coords.current.startHeight - deltaY}px`;
                    target.style.left = `${coords.current.startLeft + deltaX}px`;
                    target.style.top = `${coords.current.startTop + deltaY}px`;
                    break;
                case "right":
                    target.style.width = `${coords.current.startWidth + deltaX}px`;
                    break;
                case "bottom":
                    target.style.height = `${coords.current.startHeight + deltaY}px`;
                    break;
                case "left":
                    target.style.width = `${coords.current.startWidth - deltaX}px`;
                    target.style.left = `${coords.current.startLeft + deltaX}px`;
                    break;
                case "top":
                    target.style.height = `${coords.current.startHeight - deltaY}px`;
                    target.style.top = `${coords.current.startTop + deltaY}px`;
                    break;
                default:
                    break;
            }
        };

        const moveElement = (e: MouseEvent) => {
            const deltaX = e.clientX - coords.current.startMouseX;
            const deltaY = e.clientY - coords.current.startMouseY;
            target.style.left = `${coords.current.startLeft + deltaX}px`;
            target.style.top = `${coords.current.startTop + deltaY}px`;
        };

        target.addEventListener('mousedown', onMouseDown);
        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('mouseup', onMouseUp);
        container.addEventListener('mouseleave', onMouseUp);

        const cleanup = () => {
            target.removeEventListener('mousedown', onMouseDown);
            container.removeEventListener('mousemove', onMouseMove);
            container.removeEventListener('mouseup', onMouseUp);
            container.removeEventListener('mouseleave', onMouseUp);
        };

        return cleanup;
    }, [id]);
}

export default useDragger;