import "./EmptyState.css";
type Props = { onReset?: () => void; title: string; description: string };

export function EmptyState({ title, description, onReset }: Props) {
  return (
    <div className="empty-state" role="status" aria-live="polite">
      <p>{title}</p>
      <button type="button" onClick={onReset}>
        {description}
      </button>
    </div>
  );
}
