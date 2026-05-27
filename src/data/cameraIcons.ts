/**
 * Camera SVG Icons — inline vector illustrations for each camera model.
 * Style: isometric line-art on dark background, brand-accurate colors.
 * viewBox: "0 0 200 140"
 */

export const cameraIcons: Record<string, string> = {
  "leica-m9": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140">
  <rect width="200" height="140" fill="#0f0f0f"/>
  <rect x="20" y="30" width="160" height="90" rx="4" fill="#2a2a2a" stroke="#c8c8c8" stroke-width="1.5"/>
  <rect x="20" y="30" width="160" height="10" rx="2" fill="#333" stroke="#c8c8c8" stroke-width="0.8"/>
  <ellipse cx="55" cy="30" rx="18" ry="8" fill="#1a1a1a" stroke="#c8c8c8" stroke-width="1.2"/>
  <circle cx="55" cy="30" r="4" fill="#222" stroke="#999" stroke-width="0.6"/>
  <rect x="100" y="26" width="12" height="8" rx="2" fill="#1a1a1a" stroke="#c8c8c8" stroke-width="0.8"/>
  <rect x="30" y="45" width="20" height="12" rx="3" fill="#0a0a0a" stroke="#888" stroke-width="1"/>
  <circle cx="35" cy="51" r="3" fill="#080808" stroke="#666" stroke-width="0.5"/>
  <circle cx="45" cy="51" r="3" fill="#080808" stroke="#666" stroke-width="0.5"/>
  <rect x="58" y="46" width="14" height="10" rx="2" fill="#0a0a0a" stroke="#888" stroke-width="1"/>
  <polygon points="145,48 152,55 145,62 138,55" fill="#e2231a"/>
  <circle cx="100" cy="95" r="28" fill="#111" stroke="#c8c8c8" stroke-width="1.5"/>
  <circle cx="100" cy="95" r="20" fill="#0a0a0a" stroke="#666" stroke-width="1"/>
  <circle cx="100" cy="95" r="8" fill="#050505" stroke="#444" stroke-width="0.5"/>
  <rect x="78" y="88" width="44" height="2" rx="1" fill="#555" opacity="0.6"/>
  <text x="100" y="130" font-family="serif" font-size="9" fill="#999" text-anchor="middle" letter-spacing="2">LEICA M9</text>
</svg>`,

  "leica-m8": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140">
  <rect width="200" height="140" fill="#0f0f0f"/>
  <rect x="22" y="34" width="156" height="84" rx="4" fill="#1a1a1a" stroke="#a0a0a0" stroke-width="1.5"/>
  <rect x="22" y="34" width="156" height="10" rx="2" fill="#222" stroke="#a0a0a0" stroke-width="0.8"/>
  <ellipse cx="55" cy="34" rx="16" ry="7" fill="#111" stroke="#a0a0a0" stroke-width="1.2"/>
  <circle cx="55" cy="34" r="3.5" fill="#1a1a1a" stroke="#888" stroke-width="0.6"/>
  <rect x="100" y="30" width="11" height="7" rx="2" fill="#111" stroke="#a0a0a0" stroke-width="0.8"/>
  <rect x="32" y="48" width="16" height="10" rx="2.5" fill="#080808" stroke="#777" stroke-width="1"/>
  <circle cx="36" cy="53" r="2.5" fill="#060606" stroke="#555" stroke-width="0.5"/>
  <circle cx="44" cy="53" r="2.5" fill="#060606" stroke="#555" stroke-width="0.5"/>
  <rect x="56" y="49" width="12" height="8" rx="2" fill="#080808" stroke="#777" stroke-width="1"/>
  <polygon points="143,51 150,57 143,63 136,57" fill="#c41e16"/>
  <circle cx="100" cy="93" r="26" fill="#0e0e0e" stroke="#a0a0a0" stroke-width="1.5"/>
  <circle cx="100" cy="93" r="18" fill="#080808" stroke="#555" stroke-width="1"/>
  <circle cx="100" cy="93" r="7" fill="#040404" stroke="#333" stroke-width="0.5"/>
  <rect x="80" y="87" width="40" height="1.5" rx="0.75" fill="#444" opacity="0.5"/>
  <text x="100" y="130" font-family="serif" font-size="9" fill="#888" text-anchor="middle" letter-spacing="2">LEICA M8</text>
</svg>`,

  "leica-m240": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140">
  <rect width="200" height="140" fill="#0f0f0f"/>
  <rect x="16" y="26" width="168" height="96" rx="5" fill="#1a1a1a" stroke="#a0a0a0" stroke-width="1.5"/>
  <rect x="16" y="26" width="168" height="12" rx="3" fill="#222" stroke="#a0a0a0" stroke-width="0.8"/>
  <ellipse cx="52" cy="26" rx="18" ry="8" fill="#111" stroke="#a0a0a0" stroke-width="1.2"/>
  <circle cx="52" cy="26" r="4" fill="#1a1a1a" stroke="#888" stroke-width="0.6"/>
  <rect x="100" y="22" width="14" height="9" rx="2" fill="#1a1a1a" stroke="#a0a0a0" stroke-width="0.8"/>
  <rect x="145" y="22" width="22" height="8" rx="2" fill="#111" stroke="#b31911" stroke-width="0.8"/>
  <text x="156" y="29" font-family="sans-serif" font-size="5" fill="#b31911" text-anchor="middle">LV</text>
  <rect x="28" y="44" width="20" height="13" rx="3" fill="#080808" stroke="#777" stroke-width="1"/>
  <circle cx="34" cy="50.5" r="3" fill="#060606" stroke="#555" stroke-width="0.5"/>
  <circle cx="44" cy="50.5" r="3" fill="#060606" stroke="#555" stroke-width="0.5"/>
  <rect x="56" y="45" width="15" height="11" rx="2" fill="#080808" stroke="#777" stroke-width="1"/>
  <polygon points="148,47 155,54 148,61 141,54" fill="#b31911"/>
  <circle cx="100" cy="96" r="30" fill="#0e0e0e" stroke="#a0a0a0" stroke-width="1.5"/>
  <circle cx="100" cy="96" r="22" fill="#080808" stroke="#555" stroke-width="1"/>
  <circle cx="100" cy="96" r="9" fill="#040404" stroke="#333" stroke-width="0.5"/>
  <rect x="76" y="89" width="48" height="2" rx="1" fill="#555" opacity="0.5"/>
  <text x="100" y="130" font-family="serif" font-size="8" fill="#888" text-anchor="middle" letter-spacing="1.5">LEICA M240</text>
</svg>`,

  "leica-m262": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140">
  <rect width="200" height="140" fill="#0f0f0f"/>
  <rect x="18" y="28" width="164" height="92" rx="5" fill="#1a1a1a" stroke="#a0a0a0" stroke-width="1.5"/>
  <rect x="18" y="28" width="164" height="11" rx="2" fill="#222" stroke="#a0a0a0" stroke-width="0.8"/>
  <ellipse cx="53" cy="28" rx="17" ry="8" fill="#111" stroke="#a0a0a0" stroke-width="1.2"/>
  <circle cx="53" cy="28" r="3.8" fill="#1a1a1a" stroke="#888" stroke-width="0.6"/>
  <rect x="100" y="24" width="13" height="8" rx="2" fill="#111" stroke="#a0a0a0" stroke-width="0.8"/>
  <rect x="29" y="46" width="19" height="12" rx="2.5" fill="#080808" stroke="#777" stroke-width="1"/>
  <circle cx="34" cy="52" r="2.8" fill="#060606" stroke="#555" stroke-width="0.5"/>
  <circle cx="43" cy="52" r="2.8" fill="#060606" stroke="#555" stroke-width="0.5"/>
  <rect x="56" y="47" width="14" height="10" rx="2" fill="#080808" stroke="#777" stroke-width="1"/>
  <polygon points="146,49 153,56 146,63 139,56" fill="#d42018"/>
  <circle cx="100" cy="95" r="28" fill="#0e0e0e" stroke="#a0a0a0" stroke-width="1.5"/>
  <circle cx="100" cy="95" r="20" fill="#080808" stroke="#555" stroke-width="1"/>
  <circle cx="100" cy="95" r="8" fill="#040404" stroke="#333" stroke-width="0.5"/>
  <rect x="78" y="88" width="44" height="2" rx="1" fill="#555" opacity="0.5"/>
  <text x="100" y="130" font-family="serif" font-size="8" fill="#888" text-anchor="middle" letter-spacing="1.5">LEICA M262</text>
</svg>`,

  "leica-q2": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140">
  <rect width="200" height="140" fill="#0f0f0f"/>
  <rect x="20" y="30" width="160" height="85" rx="4" fill="#1a1a1a" stroke="#a0a0a0" stroke-width="1.5"/>
  <rect x="20" y="30" width="160" height="10" rx="2" fill="#222" stroke="#a0a0a0" stroke-width="0.8"/>
  <rect x="148" y="40" width="28" height="68" rx="4" fill="#222" stroke="#888" stroke-width="0.8"/>
  <circle cx="72" cy="72" r="32" fill="#111" stroke="#c8c8c8" stroke-width="1.5"/>
  <circle cx="72" cy="72" r="26" fill="#0e0e0e" stroke="#999" stroke-width="1"/>
  <circle cx="72" cy="72" r="20" fill="#0a0a0a" stroke="#777" stroke-width="0.8"/>
  <circle cx="72" cy="72" r="10" fill="#060606" stroke="#555" stroke-width="0.6"/>
  <line x1="72" y1="48" x2="72" y2="44" stroke="#666" stroke-width="0.5"/>
  <line x1="72" y1="96" x2="72" y2="100" stroke="#666" stroke-width="0.5"/>
  <line x1="48" y1="72" x2="44" y2="72" stroke="#666" stroke-width="0.5"/>
  <line x1="96" y1="72" x2="100" y2="72" stroke="#666" stroke-width="0.5"/>
  <circle cx="58" cy="58" r="1.5" fill="#555"/>
  <circle cx="86" cy="58" r="1.5" fill="#555"/>
  <circle cx="58" cy="86" r="1.5" fill="#555"/>
  <circle cx="86" cy="86" r="1.5" fill="#555"/>
  <circle cx="160" cy="36" r="4" fill="#e2231a"/>
  <polygon points="130,50 137,57 130,64 123,57" fill="#e2231a"/>
  <text x="100" y="128" font-family="serif" font-size="9" fill="#999" text-anchor="middle" letter-spacing="2">LEICA Q2</text>
</svg>`,

  "leica-cl": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140">
  <rect width="200" height="140" fill="#0f0f0f"/>
  <rect x="22" y="32" width="156" height="86" rx="4" fill="#1a1a1a" stroke="#a0a0a0" stroke-width="1.5"/>
  <ellipse cx="55" cy="32" rx="20" ry="9" fill="#222" stroke="#a0a0a0" stroke-width="1.2"/>
  <line x1="40" y1="32" x2="70" y2="32" stroke="#888" stroke-width="0.5"/>
  <circle cx="55" cy="32" r="2.5" fill="#333" stroke="#999" stroke-width="0.5"/>
  <ellipse cx="145" cy="32" rx="16" ry="8" fill="#222" stroke="#a0a0a0" stroke-width="1.2"/>
  <circle cx="145" cy="32" r="2.5" fill="#333" stroke="#999" stroke-width="0.5"/>
  <circle cx="100" cy="78" r="24" fill="#111" stroke="#a0a0a0" stroke-width="1.5"/>
  <circle cx="100" cy="78" r="17" fill="#0a0a0a" stroke="#666" stroke-width="1"/>
  <circle cx="100" cy="78" r="7" fill="#060606" stroke="#444" stroke-width="0.5"/>
  <circle cx="155" cy="42" r="3.5" fill="#cc1f17"/>
  <polygon points="130,55 136,61 130,67 124,61" fill="#cc1f17" opacity="0.7"/>
  <rect x="115" y="60" width="8" height="3" rx="1" fill="#333" stroke="#666" stroke-width="0.4"/>
  <text x="100" y="130" font-family="serif" font-size="9" fill="#999" text-anchor="middle" letter-spacing="2">LEICA CL</text>
</svg>`,

  "leica-sl": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140">
  <rect width="200" height="140" fill="#0f0f0f"/>
  <rect x="12" y="24" width="176" height="100" rx="5" fill="#1a1a1a" stroke="#888" stroke-width="1.5"/>
  <rect x="145" y="30" width="38" height="88" rx="5" fill="#222" stroke="#666" stroke-width="1"/>
  <line x1="150" y1="50" x2="178" y2="50" stroke="#555" stroke-width="0.5"/>
  <line x1="150" y1="60" x2="178" y2="60" stroke="#555" stroke-width="0.5"/>
  <line x1="150" y1="70" x2="178" y2="70" stroke="#555" stroke-width="0.5"/>
  <rect x="12" y="24" width="176" height="14" rx="3" fill="#222" stroke="#888" stroke-width="0.8"/>
  <rect x="30" y="27" width="8" height="5" rx="1" fill="#333" stroke="#666" stroke-width="0.5"/>
  <rect x="50" y="27" width="8" height="5" rx="1" fill="#333" stroke="#666" stroke-width="0.5"/>
  <rect x="70" y="27" width="8" height="5" rx="1" fill="#333" stroke="#666" stroke-width="0.5"/>
  <circle cx="85" cy="78" r="36" fill="#111" stroke="#888" stroke-width="1.5"/>
  <circle cx="85" cy="78" r="28" fill="#0a0a0a" stroke="#666" stroke-width="1"/>
  <circle cx="85" cy="78" r="18" fill="#060606" stroke="#444" stroke-width="0.8"/>
  <circle cx="85" cy="78" r="6" fill="#030303" stroke="#333" stroke-width="0.5"/>
  <line x1="85" y1="44" x2="85" y2="42" stroke="#555" stroke-width="0.8"/>
  <line x1="85" y1="112" x2="85" y2="114" stroke="#555" stroke-width="0.8"/>
  <circle cx="120" cy="44" r="3" fill="#a8160f"/>
  <text x="100" y="132" font-family="sans-serif" font-size="9" fill="#888" text-anchor="middle" letter-spacing="3">LEICA SL</text>
</svg>`,

  "leica-digilux3": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140">
  <rect width="200" height="140" fill="#0f0f0f"/>
  <rect x="20" y="36" width="140" height="80" rx="4" fill="#1a1a1a" stroke="#c8c8c8" stroke-width="1.5"/>
  <rect x="50" y="18" width="50" height="22" rx="3" fill="#2a2a2a" stroke="#c8c8c8" stroke-width="1.2"/>
  <rect x="60" y="20" width="30" height="10" rx="2" fill="#1a1a1a" stroke="#888" stroke-width="0.8"/>
  <rect x="155" y="44" width="30" height="66" rx="4" fill="#c8c8c8" stroke="#999" stroke-width="1"/>
  <rect x="158" y="48" width="24" height="58" rx="3" fill="#333" stroke="#888" stroke-width="0.5"/>
  <ellipse cx="55" cy="36" rx="14" ry="6" fill="#222" stroke="#c8c8c8" stroke-width="1"/>
  <circle cx="55" cy="36" r="3" fill="#333" stroke="#999" stroke-width="0.5"/>
  <circle cx="80" cy="76" r="24" fill="#111" stroke="#c8c8c8" stroke-width="1.5"/>
  <circle cx="80" cy="76" r="17" fill="#0a0a0a" stroke="#888" stroke-width="1"/>
  <circle cx="80" cy="76" r="7" fill="#050505" stroke="#555" stroke-width="0.5"/>
  <polygon points="125,52 131,58 125,64 119,58" fill="#d42018"/>
  <rect x="115" y="42" width="4" height="6" rx="1" fill="#c8c8c8" stroke="#999" stroke-width="0.5"/>
  <text x="90" y="128" font-family="serif" font-size="8" fill="#999" text-anchor="middle" letter-spacing="1">DIGILUX 3</text>
</svg>`,

  "sony-a7m3": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140">
  <rect width="200" height="140" fill="#0f0f0f"/>
  <rect x="18" y="28" width="164" height="90" rx="4" fill="#1a1a1a" stroke="#a0a0a0" stroke-width="1.5"/>
  <rect x="150" y="34" width="32" height="78" rx="4" fill="#222" stroke="#888" stroke-width="1"/>
  <line x1="155" y1="54" x2="177" y2="54" stroke="#555" stroke-width="0.5"/>
  <line x1="155" y1="64" x2="177" y2="64" stroke="#555" stroke-width="0.5"/>
  <line x1="155" y1="74" x2="177" y2="74" stroke="#555" stroke-width="0.5"/>
  <rect x="18" y="28" width="164" height="14" rx="3" fill="#222" stroke="#a0a0a0" stroke-width="0.8"/>
  <circle cx="155" cy="28" r="10" fill="#222" stroke="#888" stroke-width="1"/>
  <line x1="155" y1="20" x2="155" y2="36" stroke="#666" stroke-width="0.5"/>
  <rect x="138" y="22" width="8" height="6" rx="1" fill="#333" stroke="#888" stroke-width="0.5"/>
  <text x="28" y="52" font-family="sans-serif" font-size="8" fill="#ff6b00" font-weight="bold" letter-spacing="2">SONY</text>
  <circle cx="85" cy="82" r="34" fill="#111" stroke="#a0a0a0" stroke-width="1.5"/>
  <circle cx="85" cy="82" r="26" fill="#0a0a0a" stroke="#666" stroke-width="1"/>
  <circle cx="85" cy="82" r="10" fill="#060606" stroke="#444" stroke-width="0.8"/>
  <rect x="78" y="56" width="14" height="2" rx="1" fill="#555"/>
  <rect x="60" y="74" width="50" height="1.5" rx="0.75" fill="#555" opacity="0.6"/>
  <text x="100" y="130" font-family="sans-serif" font-size="9" fill="#ff6b00" text-anchor="middle" letter-spacing="1">α7 III</text>
</svg>`,

  "sony-a7m4": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140">
  <rect width="200" height="140" fill="#0f0f0f"/>
  <rect x="14" y="24" width="172" height="96" rx="5" fill="#1a1a1a" stroke="#a0a0a0" stroke-width="1.5"/>
  <rect x="152" y="30" width="34" height="84" rx="5" fill="#222" stroke="#888" stroke-width="1"/>
  <line x1="157" y1="50" x2="181" y2="50" stroke="#555" stroke-width="0.5"/>
  <line x1="157" y1="60" x2="181" y2="60" stroke="#555" stroke-width="0.5"/>
  <line x1="157" y1="70" x2="181" y2="70" stroke="#555" stroke-width="0.5"/>
  <line x1="157" y1="80" x2="181" y2="80" stroke="#555" stroke-width="0.5"/>
  <rect x="14" y="24" width="172" height="15" rx="3" fill="#222" stroke="#a0a0a0" stroke-width="0.8"/>
  <circle cx="158" cy="24" r="11" fill="#222" stroke="#888" stroke-width="1"/>
  <line x1="158" y1="15" x2="158" y2="33" stroke="#666" stroke-width="0.5"/>
  <circle cx="138" cy="24" r="6" fill="#222" stroke="#888" stroke-width="0.8"/>
  <line x1="138" y1="19" x2="138" y2="29" stroke="#666" stroke-width="0.4"/>
  <rect x="24" y="26" width="6" height="5" rx="1" fill="#333" stroke="#888" stroke-width="0.5"/>
  <text x="24" y="50" font-family="sans-serif" font-size="8" fill="#d4952e" font-weight="bold" letter-spacing="2">SONY</text>
  <circle cx="85" cy="82" r="36" fill="#111" stroke="#a0a0a0" stroke-width="1.5"/>
  <circle cx="85" cy="82" r="28" fill="#0a0a0a" stroke="#666" stroke-width="1"/>
  <circle cx="85" cy="82" r="12" fill="#060606" stroke="#444" stroke-width="0.8"/>
  <rect x="77" y="54" width="16" height="2.5" rx="1" fill="#555"/>
  <rect x="57" y="74" width="56" height="2" rx="1" fill="#555" opacity="0.6"/>
  <text x="100" y="130" font-family="sans-serif" font-size="9" fill="#d4952e" text-anchor="middle" letter-spacing="1">α7 IV</text>
</svg>`,

  "fujifilm-x100vi": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140">
  <rect width="200" height="140" fill="#0f0f0f"/>
  <rect x="20" y="32" width="160" height="84" rx="4" fill="#1a1a1a" stroke="#a0a0a0" stroke-width="1.5"/>
  <rect x="20" y="32" width="160" height="10" rx="2" fill="#c8c8c8" stroke="#a0a0a0" stroke-width="0.8"/>
  <ellipse cx="50" cy="32" rx="16" ry="7" fill="#bbb" stroke="#888" stroke-width="1"/>
  <line x1="38" y1="32" x2="62" y2="32" stroke="#666" stroke-width="0.5"/>
  <circle cx="50" cy="32" r="2.5" fill="#ddd" stroke="#888" stroke-width="0.5"/>
  <ellipse cx="100" cy="32" rx="14" ry="6" fill="#bbb" stroke="#888" stroke-width="1"/>
  <line x1="88" y1="32" x2="112" y2="32" stroke="#666" stroke-width="0.5"/>
  <circle cx="100" cy="32" r="2" fill="#ddd" stroke="#888" stroke-width="0.5"/>
  <ellipse cx="148" cy="32" rx="14" ry="6" fill="#bbb" stroke="#888" stroke-width="1"/>
  <line x1="136" y1="32" x2="160" y2="32" stroke="#666" stroke-width="0.5"/>
  <circle cx="148" cy="32" r="2" fill="#ddd" stroke="#888" stroke-width="0.5"/>
  <rect x="32" y="48" width="30" height="30" rx="3" fill="#111" stroke="#a0a0a0" stroke-width="1.2"/>
  <circle cx="47" cy="63" r="12" fill="#0a0a0a" stroke="#888" stroke-width="1"/>
  <circle cx="47" cy="63" r="6" fill="#060606" stroke="#555" stroke-width="0.5"/>
  <rect x="70" y="50" width="14" height="10" rx="2" fill="#080808" stroke="#777" stroke-width="0.8"/>
  <rect x="75" y="48" width="8" height="3" rx="1" fill="#1a1a1a" stroke="#666" stroke-width="0.5"/>
  <text x="120" y="60" font-family="sans-serif" font-size="7" fill="#3a7d44" font-weight="bold" letter-spacing="1.5">FUJIFILM</text>
  <circle cx="165" cy="44" r="2.5" fill="#3a7d44"/>
  <text x="100" y="128" font-family="sans-serif" font-size="8" fill="#3a7d44" text-anchor="middle" letter-spacing="1">X100VI</text>
</svg>`,
};
