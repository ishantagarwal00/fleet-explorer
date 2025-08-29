import "./ErrorBanner.css";
type Props = { message: string };

export function ErrorBanner({ message }: Props) {
  return (
    <div className="error-banner" role="alert">
      {message}
    </div>
  );
}
