import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Catches render-time errors anywhere below it and shows a refresh prompt
 * instead of a blank page. This is the safety net for a genuinely broken
 * deploy (the stale-chunk failure is prevented separately by static imports).
 */
class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Surface to the console for debugging; no remote logging on this static site.
    console.error("Render error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-6 text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-semibold mb-3">Something went wrong</h1>
            <p className="text-muted-foreground mb-6">
              This page failed to load. Refreshing usually fixes it.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent"
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
