import { Component } from 'react';
import { Card, SubHeading, BodyText, PrimaryButton } from '../design/components';
import { BRAND } from '../design/tokens';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          backgroundColor: BRAND.cream,
        }}>
          <Card style={{ maxWidth: 480, textAlign: 'center' }}>
            <div style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 48 }}>⚠️</span>
            </div>
            <SubHeading size={24} style={{ marginBottom: 8, color: '#D32F2F' }}>
              Something went wrong
            </SubHeading>
            <BodyText secondary size={14} style={{ marginBottom: 20 }}>
              We encountered an unexpected error. Don't worry, your data is safe.
            </BodyText>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div style={{
                backgroundColor: '#FFEBEE',
                padding: '12px',
                borderRadius: 8,
                marginBottom: 20,
                textAlign: 'left',
                fontFamily: 'monospace',
                fontSize: 12,
                color: '#D32F2F',
                overflowX: 'auto',
              }}>
                {this.state.error.toString()}
              </div>
            )}
            <PrimaryButton
              color={BRAND.burgundy}
              onClick={this.handleReset}
              style={{ width: '100%' }}
            >
              Return to Home
            </PrimaryButton>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}
