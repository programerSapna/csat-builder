import { useCSAT } from '../context/CSATContext';
import {
  ColorField, SliderField, SectionLabel, SelectField
} from '../components/ui/Controls';

export default function StylingPage() {
  const { styling, updateStyling } = useCSAT();

  return (
    <div style={{ padding: '20px 20px 40px' }}>

      {/* Colors */}
      <SectionLabel number="1">Colors</SectionLabel>
      <ColorField label="Background" value={styling.bgColor} onChange={v => updateStyling('bgColor', v)} />
      <ColorField label="Title color" value={styling.titleColor} onChange={v => updateStyling('titleColor', v)} />
      <ColorField label="Subtitle color" value={styling.subtitleColor} onChange={v => updateStyling('subtitleColor', v)} />
      <ColorField label="Button color" value={styling.buttonColor} onChange={v => updateStyling('buttonColor', v)} />
      <ColorField label="Button text color" value={styling.buttonTextColor} onChange={v => updateStyling('buttonTextColor', v)} />

      {/* Typography */}
      <div style={{ marginTop: 24 }}>
        <SectionLabel number="2">Typography</SectionLabel>
        <SliderField
          label="Font size"
          value={styling.fontSize}
          onChange={v => updateStyling('fontSize', v)}
          min={12} max={24} step={1} unit="px"
        />
        <SelectField
          label="Font weight"
          value={styling.fontWeight}
          onChange={v => updateStyling('fontWeight', v)}
          options={[
            { label: 'Regular (400)', value: '400' },
            { label: 'Medium (500)', value: '500' },
            { label: 'Semibold (600)', value: '600' },
            { label: 'Bold (700)', value: '700' },
          ]}
        />
      </div>

      {/* Shape */}
      <div style={{ marginTop: 24 }}>
        <SectionLabel number="3">Shape</SectionLabel>
        <SliderField
          label="Border radius"
          value={styling.borderRadius}
          onChange={v => updateStyling('borderRadius', v)}
          min={0} max={32} step={2} unit="px"
        />
      </div>

      {/* Button */}
      <div style={{ marginTop: 24 }}>
        <SectionLabel number="4">Button</SectionLabel>
        <SliderField
          label="Width"
          value={styling.buttonWidth}
          onChange={v => updateStyling('buttonWidth', v)}
          min={40} max={100} step={5} unit="%"
        />
        <SliderField
          label="Height"
          value={styling.buttonHeight}
          onChange={v => updateStyling('buttonHeight', v)}
          min={32} max={64} step={2} unit="px"
        />
      </div>

      {/* Rating Colors */}
      <div style={{ marginTop: 24 }}>
        <SectionLabel number="5">Rating Colors</SectionLabel>
        <ColorField
          label="Selected"
          value={styling.ratingSelectedColor}
          onChange={v => updateStyling('ratingSelectedColor', v)}
        />
        <ColorField
          label="Unselected"
          value={styling.ratingUnselectedColor}
          onChange={v => updateStyling('ratingUnselectedColor', v)}
        />
      </div>
    </div>
  );
}
