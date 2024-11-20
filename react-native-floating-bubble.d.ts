declare module "react-native-floating-bubble" {
  export function startService(): Promise<void>;
  export function showBubble(): void;
  export function hideBubble(): void;
  export function checkPermission(): Promise<boolean>;
  export function requestPermission(): Promise<void>;
}
