import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

const CSSVariableDisplay = ({ variableName, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const computedValue = getComputedStyle(document.documentElement)
      .getPropertyValue(variableName)
      .trim();
    setValue(computedValue || defaultValue);
  }, [variableName, defaultValue]);

  const isColor = value.startsWith('#') || value.startsWith('rgb');

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-sm font-bold">{variableName}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xs mb-2">Value: {value}</p>
        {isColor && (
          <div 
            className="w-full h-10 rounded"
            style={{ backgroundColor: value }}
          ></div>
        )}
      </CardContent>
    </Card>
  );
};

const CSSVariablesPage = () => {
  const variables = [
    { name: '--fynn-color-primary', defaultValue: '#1D75EF' },
    { name: '--fynn-color-primary-rgb', defaultValue: '#1D75EF' },
    { name: '--fynn-color-primary-contrast', defaultValue: '#FFFFFF' },
    { name: '--fynn-color-primary-contrast-rgb', defaultValue: '#FFFFFF' },
    { name: '--fynn-color-primary-shade', defaultValue: '#1A67D2' },
    { name: '--fynn-color-primary-tint', defaultValue: '#3483F1' },
    { name: '--fynn-color-primary-faded', defaultValue: '#BBD6FA' },
    { name: '--fynn-color-primary-faded-rgb', defaultValue: '#BBD6FA' },
    { name: '--fynn-color-primary-faded-contrast', defaultValue: '#000000' },
    { name: '--fynn-color-primary-faded-contrast-rgb', defaultValue: '#000000' },
    { name: '--fynn-color-primary-faded-shade', defaultValue: '#A5BCDC' },
    { name: '--fynn-color-primary-faded-tint', defaultValue: '#C2DAFB' },
    { name: '--fynn-color-primary-subtle', defaultValue: '#F2F7FF' },
    { name: '--fynn-color-primary-subtle-rgb', defaultValue: '#F2F7FF' },
    { name: '--fynn-color-primary-subtle-contrast', defaultValue: '#000000' },
    { name: '--fynn-color-primary-subtle-contrast-rgb', defaultValue: '#000000' },
    { name: '--fynn-color-primary-subtle-shade', defaultValue: '#D5D9E0' },
    { name: '--fynn-color-primary-subtle-tint', defaultValue: '#F3F8FF' },
    { name: '--fynn-color-success', defaultValue: '#47AE0F' },
    { name: '--fynn-color-success-rgb', defaultValue: '#47AE0F' },
    { name: '--fynn-color-success-contrast', defaultValue: '#FFFFFF' },
    { name: '--fynn-color-success-contrast-rgb', defaultValue: '#FFFFFF' },
    { name: '--fynn-color-success-shade', defaultValue: '#3E990D' },
    { name: '--fynn-color-success-tint', defaultValue: '#59B627' },
    { name: '--fynn-color-success-faded', defaultValue: '#EFFFE6' },
    { name: '--fynn-color-success-faded-rgb', defaultValue: '#EFFFE7' },
    { name: '--fynn-color-success-faded-contrast', defaultValue: '#000000' },
    { name: '--fynn-color-success-faded-contrast-rgb', defaultValue: '#000000' },
    { name: '--fynn-color-success-faded-shade', defaultValue: '#D2E0CB' },
    { name: '--fynn-color-success-faded-tint', defaultValue: '#F1FFE9' },
    { name: '--fynn-color-warning', defaultValue: '#FFC409' },
    { name: '--fynn-color-warning-rgb', defaultValue: '#FFC409' },
    { name: '--fynn-color-warning-contrast', defaultValue: '#000000' },
    { name: '--fynn-color-warning-contrast-rgb', defaultValue: '#000000' },
    { name: '--fynn-color-warning-shade', defaultValue: '#E0AC08' },
    { name: '--fynn-color-warning-tint', defaultValue: '#FFCA22' },
    { name: '--fynn-color-warning-faded', defaultValue: '#FFF3CE' },
    { name: '--fynn-color-warning-faded-rgb', defaultValue: '#FFF3CE' },
    { name: '--fynn-color-warning-faded-contrast', defaultValue: '#000000' },
    { name: '--fynn-color-warning-faded-contrast-rgb', defaultValue: '#000000' },
    { name: '--fynn-color-warning-faded-shade', defaultValue: '#E0D6B5' },
    { name: '--fynn-color-warning-faded-tint', defaultValue: '#FFF4D3' },
    { name: '--fynn-color-warning-strong', defaultValue: '#AA8409' },
    { name: '--fynn-color-warning-strong-rgb', defaultValue: '#AA8409' },
    { name: '--fynn-color-warning-strong-contrast', defaultValue: '#000000' },
    { name: '--fynn-color-warning-strong-contrast-rgb', defaultValue: '#000000' },
    { name: '--fynn-color-warning-strong-shade', defaultValue: '#967408' },
    { name: '--fynn-color-warning-strong-tint', defaultValue: '#B39022' },
    { name: '--fynn-color-danger', defaultValue: '#C5000F' },
    { name: '--fynn-color-danger-rgb', defaultValue: '#C5000F' },
    { name: '--fynn-color-danger-contrast', defaultValue: '#FFFFFF' },
    { name: '--fynn-color-danger-contrast-rgb', defaultValue: '#FFFFFF' },
    { name: '--fynn-color-danger-shade', defaultValue: '#AD000D' },
    { name: '--fynn-color-danger-tint', defaultValue: '#CB1A27' },
    { name: '--fynn-color-danger-faded', defaultValue: '#F6D9DB' },
    { name: '--fynn-color-danger-faded-rgb', defaultValue: '#F6D9DB' },
    { name: '--fynn-color-danger-faded-contrast', defaultValue: '#000000' },
    { name: '--fynn-color-danger-faded-contrast-rgb', defaultValue: '#000000' },
    { name: '--fynn-color-danger-faded-shade', defaultValue: '#D8BFC1' },
    { name: '--fynn-color-danger-faded-tint', defaultValue: '#F7DDDF' },
    { name: '--fynn-color-light', defaultValue: '#FFFFFF' },
    { name: '--fynn-color-light-rgb', defaultValue: '#FFFFFF' },
    { name: '--fynn-color-light-contrast', defaultValue: '#000000' },
    { name: '--fynn-color-light-contrast-rgb', defaultValue: '#000000' },
    { name: '--fynn-color-light-shade', defaultValue: '#E0E0E0' },
    { name: '--fynn-color-light-tint', defaultValue: '#FFFFFF' },
    { name: '--fynn-color-light-faded', defaultValue: '#F4F4F4' },
    { name: '--fynn-color-light-faded-rgb', defaultValue: '#FFFFFF' },
    { name: '--fynn-color-light-faded-contrast', defaultValue: '#000000' },
    { name: '--fynn-color-light-faded-contrast-rgb', defaultValue: '#000000' },
    { name: '--fynn-color-light-faded-shade', defaultValue: '#D7D7D7' },
    { name: '--fynn-color-light-faded-tint', defaultValue: '#EDEDED' },
    { name: '--fynn-color-medium', defaultValue: '#5F5F5F' },
    { name: '--fynn-color-medium-rgb', defaultValue: '#5F5F5F' },
    { name: '--fynn-color-medium-contrast', defaultValue: '#FFFFFF' },
    { name: '--fynn-color-medium-contrast-rgb', defaultValue: '#FFFFFF' },
    { name: '--fynn-color-medium-shade', defaultValue: '#545454' },
    { name: '--fynn-color-medium-tint', defaultValue: '#6F6F6F' },
    { name: '--fynn-color-medium-subtle', defaultValue: '#E1E1E1' },
    { name: '--fynn-color-medium-subtle-rgb', defaultValue: '#E1E1E1' },
    { name: '--fynn-color-medium-subtle-contrast', defaultValue: '#000000' },
    { name: '--fynn-color-medium-subtle-contrast-rgb', defaultValue: '#000000' },
    { name: '--fynn-color-medium-subtle-shade', defaultValue: '#C6C6C6' },
    { name: '--fynn-color-medium-subtle-tint', defaultValue: '#E4E4E4' },
    { name: '--fynn-color-medium-faded', defaultValue: '#A8ABAF' },
    { name: '--fynn-color-medium-faded-rgb', defaultValue: '#A8ABAF' },
    { name: '--fynn-color-medium-faded-contrast', defaultValue: '#000000' },
    { name: '--fynn-color-medium-faded-contrast-rgb', defaultValue: '#000000' },
    { name: '--fynn-color-medium-faded-shade', defaultValue: '#94969A' },
    { name: '--fynn-color-medium-faded-tint', defaultValue: '#B1B3B7' },
    { name: '--fynn-color-dark', defaultValue: '#2F2F2F' },
    { name: '--fynn-color-dark-rgb', defaultValue: '#2F2F2F' },
    { name: '--fynn-color-dark-contrast', defaultValue: '#FFFFFF' },
    { name: '--fynn-color-dark-contrast-rgb', defaultValue: '#FFFFFF' },
    { name: '--fynn-color-dark-shade', defaultValue: '#292929' },
    { name: '--fynn-color-dark-tint', defaultValue: '#444444' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">CSS Variables</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {variables.map((variable) => (
          <CSSVariableDisplay
            key={variable.name}
            variableName={variable.name}
            defaultValue={variable.defaultValue}
          />
        ))}
      </div>
    </div>
  );
};

export default CSSVariablesPage;