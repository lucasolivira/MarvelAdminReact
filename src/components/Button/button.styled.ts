import styled from "styled-components";

export type ButtonColor = "primary" | "secondary" | "danger";
export type ButtonSize = "small" | "medium" | "large";

interface StyledButtonProps {
  color: ButtonColor;
  size: ButtonSize;
}

const colors: Record<
  ButtonColor,
  {
    background: string;
    text: string;
    hover: string;
  }
> = {
  primary: {
    background: "#2563eb",
    text: "#ffffff",
    hover: "#1d4ed8",
  },
  secondary: {
    background: "#6b7280",
    text: "#ffffff",
    hover: "#4b5563",
  },
  danger: {
    background: "#dc2626",
    text: "#ffffff",
    hover: "#b91c1c",
  },
};

const sizes: Record<
  ButtonSize,
  {
    padding: string;
    fontSize: string;
  }
> = {
  small: {
    padding: "6px 12px",
    fontSize: "12px",
  },
  medium: {
    padding: "10px 16px",
    fontSize: "14px",
  },
  large: {
    padding: "14px 20px",
    fontSize: "16px",
  },
};

export const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;

  transition:
    background 0.2s ease,
    opacity 0.2s ease;

  background: ${({ color }) => colors[color].background};
  color: ${({ color }) => colors[color].text};

  padding: ${({ size }) => sizes[size].padding};
  font-size: ${({ size }) => sizes[size].fontSize};

  &:hover {
    background: ${({ color }) => colors[color].hover};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
