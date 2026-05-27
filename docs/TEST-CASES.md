# Photography Portfolio — Test Cases

## How to Run

### Local Dev Server Test
```bash
cd D:\hairuo-portfolio
npm run dev
# Open http://localhost:5173/hairuo-portfolio/
```

### Production Build Test
```bash
npm run build
npx serve dist -s
# Open http://localhost:3000/
```

### Deployed Site Test
Open https://hairuoliu.github.io/hairuo-portfolio/

---

## TC-1: Site Accessibility (P0 — Blocker)

| Step | Action | Expected Result | Actual |
|------|--------|-----------------|--------|
| 1.1 | Open deployed URL | Page loads, loading screen appears | ❌ |
| 1.2 | Check browser console (F12) | No red errors (CSP, JS, resource loading) | ❌ CSP error |
| 1.3 | Wait 5 seconds | Loading screen transitions to 3D scene | ❌ |
| 1.4 | Verify page is not blank | Dark background + 3D scene visible | ❌ |

**PASS CRITERIA**: Zero red console errors, page renders non-blank content.

---

## TC-2: 3D Scene Rendering (P0 — Blocker)

| Step | Action | Expected Result | Actual |
|------|--------|-----------------|--------|
| 2.1 | Observe 3D canvas | WebGL canvas renders, dark scene with fog | ❌ |
| 2.2 | Count camera models | Exactly 11 camera cards visible on shelves | ❌ |
| 2.3 | Identify cameras | Each camera card shows a distinct SVG icon | ❌ |
| 2.4 | Check shelf structure | 3-tier wooden shelf with metal brackets visible | ❌ |

**PASS CRITERIA**: All 11 cameras rendered with visible SVG icons on a 3-tier shelf.

---

## TC-3: Camera Icon Visual Quality (P1)

| Step | Action | Expected Result | Actual |
|------|--------|-----------------|--------|
| 3.1 | Check Leica M9 icon | Silver body outline, dual rangefinder windows, red Leica diamond, M-mount lens circle | ❌ |
| 3.2 | Check Leica Q2 icon | Large concentric lens circle (40% of card), grip bump on right, red dot | ❌ |
| 3.3 | Check Sony A7M3 icon | Grip on right, mode dial, E-mount circle, orange "SONY" text | ❌ |
| 3.4 | Check Fuji X100VI icon | Triple dials on top, fixed lens square, silver+black, green "FUJIFILM" | ❌ |
| 3.5 | Check brand consistency | Leica=red, Sony=orange, Fuji=green accent colors correct | ❌ |

**PASS CRITERIA**: Each camera's icon shows at least 2 distinctive features matching real camera.

---

## TC-4: Camera Hover Interaction (P1)

| Step | Action | Expected Result | Actual |
|------|--------|-----------------|--------|
| 4.1 | Hover over any camera card | Card scales up (1.1x), rises slightly, brand-color glow appears | ❌ |
| 4.2 | Check info text on hover | Camera type + sensor text appears below name | ❌ |
| 4.3 | Check cursor | Cursor changes to pointer | ❌ |
| 4.4 | Move mouse away | Card returns to normal size, info text disappears | ❌ |

**PASS CRITERIA**: Smooth hover animation with visible scale + glow + info text.

---

## TC-5: Camera Click → Navigation (P1)

| Step | Action | Expected Result | Actual |
|------|--------|-----------------|--------|
| 5.1 | Click on any camera card | Navigates to camera detail page (/camera/:id) | ❌ |
| 5.2 | Verify camera detail page | Shows camera name, type, sensor, year, description | ❌ |
| 5.3 | Click browser back | Returns to 3D homepage | ❌ |

**PASS CRITERIA**: Click navigates to detail page with correct camera info.

---

## TC-6: CSP Compliance (P0 — Blocker)

| Step | Action | Expected Result | Actual |
|------|--------|-----------------|--------|
| 6.1 | Open deployed site, check console | No CSP violation errors | ❌ |
| 6.2 | Verify Three.js shaders compile | No `new Function()` errors | ❌ |
| 6.3 | Verify all resources load | No blocked resources in Network tab | ❌ |

**PASS CRITERIA**: Zero CSP violations, all resources load successfully.

---

## TC-7: Build Integrity (P0)

| Step | Action | Expected Result | Actual |
|------|--------|-----------------|--------|
| 7.1 | Run `npm run build` | Build completes with exit code 0 | ✅ |
| 7.2 | Check build output | No errors (warnings OK) | ✅ |
| 7.3 | Check dist/index.html | Contains script and link tags with correct paths | ✅ |

**PASS CRITERIA**: Clean build, dist/ contains valid output.

---

## TC-8: Entrance Animation (P2)

| Step | Action | Expected Result | Actual |
|------|--------|-----------------|--------|
| 8.1 | Refresh page | Loading screen appears first | ❌ |
| 8.2 | Wait for loading complete | Cameras fly in from alternating sides | ❌ |
| 8.3 | Observe timing | Each camera enters with 0.1s stagger delay | ❌ |
| 8.4 | After all cameras placed | Subtle floating idle animation begins | ❌ |

**PASS CRITERIA**: Visible entrance animation with staggered timing.

---

## Verification Summary Template

| TC | Priority | Result | Notes |
|----|----------|--------|-------|
| TC-1 | P0 | ❌ | CSP blocks rendering |
| TC-2 | P0 | ❌ | Depends on TC-1 |
| TC-3 | P1 | ❌ | Depends on TC-2 |
| TC-4 | P1 | ❌ | Depends on TC-2 |
| TC-5 | P1 | ❌ | Depends on TC-2 |
| TC-6 | P0 | ❌ | Root cause of all failures |
| TC-7 | P0 | ✅ | Build passes |
| TC-8 | P2 | ❌ | Depends on TC-2 |
