import { Button as UiButton } from './ui/button';

const variantMap = {
  solid: 'solid',
  light: 'light',
};

export default function Button({ children, variant = 'solid', className = '', ...props }) {
  return (
    <UiButton className={className} variant={variantMap[variant] ?? variant} {...props}>
      {children}
    </UiButton>
  );
}
