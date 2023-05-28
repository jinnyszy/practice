import { Component } from "react";

class ErrorBoundary extends Component {
    state = { hasError: false };
    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught at error", error, info)
    }

    render() {
        if (this.state.hasError) {
            return (
                this.props.errorMsg
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary