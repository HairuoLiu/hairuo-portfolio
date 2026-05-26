/**
 * Anti-download protection utilities for photography portfolio.
 * Prevents casual downloading of images via right-click, drag, and keyboard shortcuts.
 */

/** Initialize global anti-download event listeners */
export function initAntiDownload(): void {
  // Disable right-click context menu on protected elements
  document.addEventListener("contextmenu", (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName === "IMG" ||
      target.closest(".photo-protected")
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  });

  // Disable drag on images
  document.addEventListener("dragstart", (e: DragEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName === "IMG" ||
      target.closest(".photo-protected")
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  });

  // Disable Ctrl+S / Cmd+S on protected pages
  document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (
      (e.ctrlKey || e.metaKey) &&
      (e.key === "s" || e.key === "S")
    ) {
      const activeEl = document.activeElement;
      if (activeEl && activeEl.closest(".photo-protected")) {
        e.preventDefault();
      }
    }
  });
}

/**
 * Generate CSS style object for a protected image.
 * Uses background-image instead of <img> tag to prevent easy saving.
 */
export function getProtectedImageStyle(
  url: string,
  size: "cover" | "contain" = "cover"
): React.CSSProperties {
  return {
    backgroundImage: `url(${url})`,
    backgroundSize: size,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
}

/**
 * Generate props for a protected image container element.
 */
export function getProtectedImageProps(
  url: string,
  size: "cover" | "contain" = "cover"
): {
  className: string;
  style: React.CSSProperties;
  onContextMenu: (e: React.MouseEvent) => void;
  onDragStart: (e: React.DragEvent) => void;
} {
  return {
    className: "photo-protected",
    style: getProtectedImageStyle(url, size),
    onContextMenu: (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    },
    onDragStart: (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
    },
  };
}
