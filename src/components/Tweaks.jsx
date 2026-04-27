import React from 'react';
import {
  useTweaks, TweaksPanel, TweakSection,
  TweakColor, TweakRadio, TweakToggle, TweakButton,
} from './TweaksPanel.jsx';

const tweakDefaultsRaw = document.getElementById('tweak-defaults').textContent;
const TWEAK_DEFAULTS = JSON.parse(tweakDefaultsRaw.match(/\{[\s\S]*\}/)[0]);

export default function Tweaks() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', tweaks.accent);
    const hex = tweaks.accent.replace('#','');
    const r = parseInt(hex.slice(0,2),16), g = parseInt(hex.slice(2,4),16), b = parseInt(hex.slice(4,6),16);
    document.documentElement.style.setProperty('--accent-glow', `rgba(${r},${g},${b},0.35)`);

    const fonts = {
      Calibri: "'Calibri', 'Carlito', 'Segoe UI', system-ui, sans-serif",
      Carlito: "'Carlito', 'Calibri', system-ui, sans-serif",
      Inter: "'Inter', system-ui, sans-serif",
      Geist: "'Geist', system-ui, sans-serif",
    };
    document.documentElement.style.setProperty('--sans', fonts[tweaks.fontStack] || fonts.Calibri);

    const grain = document.getElementById('grain');
    if (grain) grain.style.display = tweaks.showGrain ? 'block' : 'none';
    const fab = document.getElementById('botFab');
    if (fab) fab.style.display = tweaks.showBot ? 'flex' : 'none';
  }, [tweaks]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Brand">
        <TweakColor label="Accent color" value={tweaks.accent} onChange={v => setTweak('accent', v)} />
        <TweakRadio label="Font" value={tweaks.fontStack} onChange={v => setTweak('fontStack', v)} options={['Calibri','Carlito','Inter']}/>
      </TweakSection>
      <TweakSection label="Effects">
        <TweakToggle label="Film grain" value={tweaks.showGrain} onChange={v => setTweak('showGrain', v)} />
        <TweakToggle label="AI chatbot" value={tweaks.showBot} onChange={v => setTweak('showBot', v)} />
      </TweakSection>
      <TweakSection label="Quick presets">
        <TweakButton label="Cyan / Blue" onClick={() => setTweak('accent', '#00e5ff')} />
        <TweakButton label="Amber" onClick={() => setTweak('accent', '#ffb800')} />
        <TweakButton label="Violet" onClick={() => setTweak('accent', '#7c5cff')} />
        <TweakButton label="Mono (white)" onClick={() => setTweak('accent', '#ffffff')} />
        <TweakButton label="Default green" onClick={() => setTweak('accent', '#00ff88')} />
      </TweakSection>
    </TweaksPanel>
  );
}
